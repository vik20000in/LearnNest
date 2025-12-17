import { useState, useEffect } from 'react';
import axios from 'axios';
import { Download, Loader2, Layout, FileDown, Key, FileQuestion } from 'lucide-react';

interface Subject {
  id: number;
  name: string;
}

interface StoredPaper {
  id: number;
  subject_id: number;
  title: string;
  created_at: string;
  variant_set_id?: string;
  variant_label?: string;
}

interface DownloadingState {
  paper: boolean;
  answerKey: boolean;
}

const QuestionGenerator = () => {
  const [subjects, setSubjects] = useState<Subject[]>([]);
  const [filterSubject, setFilterSubject] = useState<number | null>(null);
  const [loading, setLoading] = useState(false);
  const [generatedPaper, setGeneratedPaper] = useState<any>(null);
  const [storedPapers, setStoredPapers] = useState<StoredPaper[]>([]);
  const [currentPaperId, setCurrentPaperId] = useState<number | null>(null);
  const [showAnswers, setShowAnswers] = useState(false);
  const [downloading, setDownloading] = useState<DownloadingState>({ paper: false, answerKey: false });

  useEffect(() => {
    axios.get('/api/subjects').then(res => setSubjects(res.data));
    fetchStoredPapers();
  }, []);

  const fetchStoredPapers = async () => {
    try {
      const res = await axios.get('/api/papers');
      setStoredPapers(res.data);
    } catch (error) {
      console.error('Failed to fetch papers', error);
    }
  };

  const loadPaper = async (id: number) => {
    setLoading(true);
    setGeneratedPaper(null);
    setCurrentPaperId(id);
    try {
      const res = await axios.get(`/api/papers/${id}`);
      setGeneratedPaper(res.data.content);
    } catch (error) {
      console.error('Failed to load paper', error);
      alert('Failed to load paper');
    } finally {
      setLoading(false);
    }
  };

  const downloadPDF = async (type: 'paper' | 'answerKey') => {
    if (!currentPaperId) {
      alert('Please select a paper first');
      return;
    }

    const downloadKey = type === 'paper' ? 'paper' : 'answerKey';
    setDownloading(prev => ({ ...prev, [downloadKey]: true }));

    try {
      const endpoint = type === 'paper' 
        ? `/api/papers/${currentPaperId}/export-pdf`
        : `/api/papers/${currentPaperId}/export-answer-key`;

      const response = await axios.get(endpoint, {
        responseType: 'blob'
      });

      // Create blob link to download
      const url = window.URL.createObjectURL(new Blob([response.data]));
      const link = document.createElement('a');
      link.href = url;
      
      // Get filename from content-disposition header or use default
      const contentDisposition = response.headers['content-disposition'];
      let filename = type === 'paper' ? 'question-paper.pdf' : 'answer-key.pdf';
      
      if (contentDisposition) {
        const filenameMatch = contentDisposition.match(/filename="?(.+)"?/i);
        if (filenameMatch && filenameMatch[1]) {
          filename = filenameMatch[1];
        }
      }
      
      link.setAttribute('download', filename);
      document.body.appendChild(link);
      link.click();
      link.parentNode?.removeChild(link);
      window.URL.revokeObjectURL(url);

    } catch (error) {
      console.error(`Failed to download ${type} PDF:`, error);
      alert(`Failed to download ${type === 'paper' ? 'question paper' : 'answer key'} PDF`);
    } finally {
      setDownloading(prev => ({ ...prev, [downloadKey]: false }));
    }
  };

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className='space-y-8 print:space-y-4'>
      <div className='print:hidden space-y-8'>
        <div className='flex justify-between items-center'>
          <h1 className='text-3xl font-bold'>Practice Question Papers</h1>
        </div>

        <div className='grid md:grid-cols-3 gap-8'>
          {/* Left Panel: Paper Selection */}
          <div className='md:col-span-1 space-y-6 card h-fit'>
            {(
              <div className='space-y-4'>
                <h2 className='font-bold text-lg flex items-center gap-2'>
                  <Layout className='w-5 h-5' /> Available Papers
                </h2>
                
                <div>
                  <label className='block font-bold mb-2 text-sm'>Filter by Subject</label>
                  <select 
                    className='w-full p-2 border rounded-md'
                    onChange={e => setFilterSubject(Number(e.target.value) || null)}
                    value={filterSubject || ''}
                  >
                    <option value=''>All Subjects</option>
                    {subjects.map(s => <option key={s.id} value={s.id}>{s.name}</option>)}
                  </select>
                </div>

                <div>
                  <label className='flex items-center gap-2 cursor-pointer font-bold text-sm'>
                    <input 
                      type='checkbox'
                      checked={showAnswers}
                      onChange={e => setShowAnswers(e.target.checked)}
                    />
                    Include Answer Key
                  </label>
                </div>

                <div className='space-y-2 max-h-[600px] overflow-y-auto'>
                  {storedPapers.length === 0 ? (
                    <div className='text-center py-8 text-gray-500 bg-gray-50 rounded-lg border border-dashed'>
                      <p>No papers found.</p>
                      <p className='text-xs mt-2'>Run the generation script on the server.</p>
                    </div>
                  ) : (
                    (() => {
                      const filteredPapers = storedPapers.filter(p => !filterSubject || p.subject_id === filterSubject);
                      
                      // Group papers by subject
                      const papersBySubject = filteredPapers.reduce((acc, paper) => {
                        const subjectId = paper.subject_id;
                        if (!acc[subjectId]) acc[subjectId] = [];
                        acc[subjectId].push(paper);
                        return acc;
                      }, {} as Record<number, StoredPaper[]>);
                      
                      return Object.entries(papersBySubject).map(([subjectId, subjectPapers]) => {
                        const subject = subjects.find(s => s.id === Number(subjectId));
                        
                        // Group by chapter (extracted from title)
                        const papersByChapter = subjectPapers.reduce((acc, paper) => {
                          // Extract chapter name from title (e.g., "Physics Practice Paper - Matter - Set A")
                          const match = paper.title.match(/(?:Practice Paper|Annual Exam Paper) - (.+?) -/);
                          const chapterName = match ? match[1] : 'General';
                          if (!acc[chapterName]) acc[chapterName] = [];
                          acc[chapterName].push(paper);
                          return acc;
                        }, {} as Record<string, StoredPaper[]>);
                        
                        return (
                          <div key={subjectId} className='space-y-2'>
                            <div className='font-bold text-sm text-gray-700 bg-gray-100 px-3 py-2 rounded-md'>
                              {subject?.name || `Subject ${subjectId}`}
                            </div>
                            
                            {Object.entries(papersByChapter).map(([chapterName, chapterPapers]) => (
                              <div key={chapterName} className='ml-2 space-y-1'>
                                <div className='font-semibold text-xs text-gray-600 px-2 py-1'>
                                  📖 {chapterName}
                                </div>
                                
                                {/* Sort by Set (A, B, C, etc.) */}
                                {chapterPapers
                                  .sort((a, b) => {
                                    const labelA = a.variant_label || '';
                                    const labelB = b.variant_label || '';
                                    return labelA.localeCompare(labelB);
                                  })
                                  .map(paper => (
                                    <button
                                      key={paper.id}
                                      onClick={() => loadPaper(paper.id)}
                                      className='w-full text-left p-2 ml-4 rounded-lg border hover:bg-blue-50 hover:border-blue-200 transition-colors group text-sm'
                                    >
                                      <div className='flex items-center gap-2'>
                                        {paper.variant_label && (
                                          <span className='px-2 py-0.5 bg-blue-100 text-blue-700 text-xs font-bold rounded'>
                                            Set {paper.variant_label}
                                          </span>
                                        )}
                                        <div className='text-xs text-gray-600 group-hover:text-blue-700'>
                                          {paper.variant_label ? `Set ${paper.variant_label} - ${chapterName}` : paper.title}
                                        </div>
                                      </div>
                                    </button>
                                  ))}
                              </div>
                            ))}
                          </div>
                        );
                      });
                    })()
                  )}
                </div>
              </div>
            )}
          </div>

          {/* Right Panel: Preview */}
          <div className='md:col-span-2 card min-h-[600px] flex flex-col'>
            <div className='space-y-3 mb-4 border-b pb-4'>
              <div className='flex justify-between items-center'>
                <h2 className='text-xl font-bold'>Paper Preview</h2>
                {generatedPaper && (
                  <div className='flex gap-2'>
                    <button 
                      onClick={() => downloadPDF('paper')} 
                      disabled={downloading.paper || !currentPaperId}
                      className='btn btn-primary flex items-center gap-2 text-sm'
                    >
                      {downloading.paper ? (
                        <><Loader2 size={16} className='animate-spin' /> Generating...</>
                      ) : (
                        <><FileDown size={16} /> Export PDF</>
                      )}
                    </button>
                    <button 
                      onClick={() => downloadPDF('answerKey')} 
                      disabled={downloading.answerKey || !currentPaperId}
                      className='btn btn-secondary flex items-center gap-2 text-sm'
                    >
                      {downloading.answerKey ? (
                        <><Loader2 size={16} className='animate-spin' /> Generating...</>
                      ) : (
                        <><Key size={16} /> Answer Key</>
                      )}
                    </button>
                    <button onClick={handlePrint} className='btn btn-secondary flex items-center gap-2 text-sm'>
                      <Download size={16} /> Print
                    </button>
                  </div>
                )}
              </div>
            </div>

            {loading ? (
              <div className='flex-grow flex flex-col items-center justify-center text-gray-500'>
                <Loader2 className='w-12 h-12 animate-spin mb-4 text-blue-600' />
                <p>Generating question paper...</p>
                <p className='text-sm mt-2'>This may take a minute.</p>
              </div>
            ) : generatedPaper ? (
              <div className='flex-grow overflow-y-auto pr-2'>
                <div className='bg-white p-8 shadow-sm border min-h-[800px]'>
                  <div className='text-center border-b-2 border-black pb-4 mb-6'>
                    <h1 className='text-2xl font-bold uppercase'>{generatedPaper.school || 'LearnNest School'}</h1>
                    <h2 className='text-xl font-bold uppercase mt-1'>{generatedPaper.title || 'Practice Paper'}</h2>
                    <p className='text-lg font-semibold mt-2'>{generatedPaper.class || ''}</p>
                  </div>

                  {generatedPaper.sections?.map((section: any, idx: number) => (
                    <div key={idx} className='mb-6'>
                      <h3 className='font-bold text-lg mb-3 uppercase border-b pb-1'>{section.name || section.type + ' Questions'}</h3>
                      <div className='space-y-4'>
                        {section.questions.map((q: any, qIdx: number) => (
                          <div key={qIdx} className='pl-4'>
                            <div className='flex gap-2'>
                              <span className='font-bold'>{qIdx + 1}.</span>
                              <div className='flex-grow'>
                                <p className='font-medium'>{q.question}</p>
                                {q.options && (
                                  <div className='grid grid-cols-2 gap-2 mt-2 ml-4'>
                                    {q.options.map((opt: string, oIdx: number) => (
                                      <div key={oIdx} className='flex items-center gap-2'>
                                        <span className='font-semibold'>({String.fromCharCode(65 + oIdx)})</span> {opt}
                                      </div>
                                    ))}
                                  </div>
                                )}
                              </div>
                              <span className='font-bold text-sm'>[{q.marks || 1}]</span>
                            </div>
                            {showAnswers && q.answer && (
                              <div className='mt-2 p-2 bg-green-50 border border-green-100 rounded text-sm text-green-800'>
                                <span className='font-bold'>Answer:</span> {q.answer}
                              </div>
                            )}
                          </div>
                        ))}
                      </div>
                    </div>
                  ))}
                  
                  {generatedPaper.raw && (
                    <div className='whitespace-pre-wrap font-mono text-sm bg-gray-50 p-4'>
                      {generatedPaper.raw}
                    </div>
                  )}
                </div>
              </div>
            ) : (
              <div className='h-full flex flex-col items-center justify-center text-gray-400 border-2 border-dashed rounded-xl'>
                <FileQuestion className='w-16 h-16 mb-4 opacity-20' />
                <p>Select a paper from the list to preview</p>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Print Only View */}
      <div className='hidden print:block'>
        {generatedPaper && (
          <div>
             <div className='text-center border-b-2 border-black pb-4 mb-6'>
                <h1 className='text-2xl font-bold uppercase'>{generatedPaper.school || 'LearnNest School'}</h1>
                <h2 className='text-xl font-bold uppercase mt-1'>{generatedPaper.title || 'Practice Paper'}</h2>
                <p className='text-lg font-semibold mt-2'>{generatedPaper.class || ''}</p>
              </div>

              {generatedPaper.sections?.map((section: any, idx: number) => (
                <div key={idx} className='mb-6'>
                  <h3 className='font-bold text-lg mb-3 uppercase border-b pb-1'>{section.name || section.type + ' Questions'}</h3>
                  <div className='space-y-4'>
                    {section.questions.map((q: any, qIdx: number) => (
                      <div key={qIdx} className='pl-4 break-inside-avoid'>
                        <div className='flex gap-2'>
                          <span className='font-bold'>{qIdx + 1}.</span>
                          <div className='flex-grow'>
                            <p>{q.question}</p>
                            {q.options && (
                              <div className='grid grid-cols-2 gap-2 mt-2 ml-4'>
                                {q.options.map((opt: string, oIdx: number) => (
                                  <div key={oIdx} className='flex items-center gap-2'>
                                    <span className='font-semibold'>({String.fromCharCode(65 + oIdx)})</span> {opt}
                                  </div>
                                ))}
                              </div>
                            )}
                          </div>
                          <span className='font-bold text-sm'>[{q.marks || 1}]</span>
                        </div>
                        {showAnswers && q.answer && (
                          <div className='mt-2 text-sm font-semibold text-gray-700'>
                            Answer: {q.answer}
                          </div>
                        )}
                      </div>
                    ))}
                  </div>
                </div>
              ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default QuestionGenerator;
