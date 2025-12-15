import { useState, useEffect } from 'react';
import axios from 'axios';
import { Download, Loader2, FileText, PenTool, Layout } from 'lucide-react';

interface Subject {
  id: number;
  name: string;
}

interface Chapter {
  id: number;
  name: string;
}

interface StoredPaper {
  id: number;
  title: string;
  created_at: string;
}

const QuestionGenerator = () => {
  const [subjects, setSubjects] = useState<Subject[]>([]);
  const [selectedSubject, setSelectedSubject] = useState<number | null>(null);
  const [chapters, setChapters] = useState<Chapter[]>([]);
  const [selectedChapters, setSelectedChapters] = useState<number[]>([]);
  const [difficulty, setDifficulty] = useState('Medium');
  const [loading, setLoading] = useState(false);
  const [generatedPaper, setGeneratedPaper] = useState<any>(null);
  
  const [activeTab, setActiveTab] = useState<'annual' | 'custom'>('annual');
  const [storedPapers, setStoredPapers] = useState<StoredPaper[]>([]);

  const [questionTypes, setQuestionTypes] = useState({
    mcq: 5,
    veryShort: 5,
    short: 3,
    long: 2,
    numerical: 0
  });

  useEffect(() => {
    axios.get('/api/subjects').then(res => setSubjects(res.data));
    fetchStoredPapers();
  }, []);

  useEffect(() => {
    if (selectedSubject) {
      axios.get(`/api/subjects/${selectedSubject}/chapters`).then(res => {
        setChapters(res.data);
        setSelectedChapters([]);
      });
    }
  }, [selectedSubject]);

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

  const handleChapterToggle = (id: number) => {
    setSelectedChapters(prev => 
      prev.includes(id) ? prev.filter(c => c !== id) : [...prev, id]
    );
  };

  const handleGenerate = async () => {
    if (!selectedSubject || selectedChapters.length === 0) return;

    setLoading(true);
    setGeneratedPaper(null);

    try {
      const res = await axios.post('/api/generate-questions', {
        subjectId: selectedSubject,
        chapterIds: selectedChapters,
        difficulty,
        questionTypes
      });
      setGeneratedPaper(res.data);
    } catch (error: any) {
      console.error('Generation failed', error);
      const errorMessage = error.response?.data?.error || 'Failed to generate questions. Please try again.';
      alert(errorMessage);
    } finally {
      setLoading(false);
    }
  };

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className='space-y-8 print:space-y-4'>
      <div className='print:hidden space-y-8'>
        <div className='flex justify-between items-center'>
          <h1 className='text-3xl font-bold'>Question Paper Generator</h1>
          <div className='flex bg-gray-100 p-1 rounded-lg'>
            <button
              onClick={() => setActiveTab('annual')}
              className={`px-4 py-2 rounded-md flex items-center gap-2 ${activeTab === 'annual' ? 'bg-white shadow text-blue-600' : 'text-gray-600'}`}
            >
              <FileText size={18} /> Annual Papers
            </button>
            <button
              onClick={() => setActiveTab('custom')}
              className={`px-4 py-2 rounded-md flex items-center gap-2 ${activeTab === 'custom' ? 'bg-white shadow text-blue-600' : 'text-gray-600'}`}
            >
              <PenTool size={18} /> Custom Generator
            </button>
          </div>
        </div>

        <div className='grid md:grid-cols-3 gap-8'>
          {/* Left Panel: Configuration or List */}
          <div className='md:col-span-1 space-y-6 card h-fit'>
            
            {activeTab === 'annual' ? (
              <div className='space-y-4'>
                <h2 className='font-bold text-lg flex items-center gap-2'>
                  <Layout className='w-5 h-5' /> Available Papers
                </h2>
                <p className='text-sm text-gray-500'>Select a pre-generated annual examination paper.</p>
                
                <div className='space-y-2 max-h-[600px] overflow-y-auto'>
                  {storedPapers.length === 0 ? (
                    <div className='text-center py-8 text-gray-500 bg-gray-50 rounded-lg border border-dashed'>
                      <p>No papers found.</p>
                      <p className='text-xs mt-2'>Run the generation script on the server.</p>
                    </div>
                  ) : (
                    storedPapers.map(paper => (
                      <button
                        key={paper.id}
                        onClick={() => loadPaper(paper.id)}
                        className='w-full text-left p-3 rounded-lg border hover:bg-blue-50 hover:border-blue-200 transition-colors group'
                      >
                        <div className='font-semibold group-hover:text-blue-700'>{paper.title}</div>
                        <div className='text-xs text-gray-500 mt-1'>
                          {new Date(paper.created_at).toLocaleDateString()}
                        </div>
                      </button>
                    ))
                  )}
                </div>
              </div>
            ) : (
              <>
                <div>
                  <label className='block font-bold mb-2'>1. Select Subject</label>
                  <select 
                    className='w-full p-2 border rounded-md'
                    onChange={e => setSelectedSubject(Number(e.target.value))}
                    value={selectedSubject || ''}
                  >
                    <option value=''>Choose Subject...</option>
                    {subjects.map(s => <option key={s.id} value={s.id}>{s.name}</option>)}
                  </select>
                </div>

                {selectedSubject && (
                  <div>
                    <label className='block font-bold mb-2'>2. Select Chapters</label>
                    <div className='max-h-48 overflow-y-auto border rounded-md p-2 space-y-2'>
                      {chapters.map(chapter => (
                        <label key={chapter.id} className='flex items-start gap-2 cursor-pointer hover:bg-gray-50 p-1 rounded'>
                          <input 
                            type='checkbox'
                            checked={selectedChapters.includes(chapter.id)}
                            onChange={() => handleChapterToggle(chapter.id)}
                            className='mt-1'
                          />
                          <span className='text-sm'>{chapter.name}</span>
                        </label>
                      ))}
                    </div>
                  </div>
                )}

                <div>
                  <label className='block font-bold mb-2'>3. Difficulty</label>
                  <div className='flex gap-4'>
                    {['Easy', 'Medium', 'Hard'].map(d => (
                      <label key={d} className='flex items-center gap-2 cursor-pointer'>
                        <input 
                          type='radio' 
                          name='difficulty'
                          value={d}
                          checked={difficulty === d}
                          onChange={e => setDifficulty(e.target.value)}
                        />
                        {d}
                      </label>
                    ))}
                  </div>
                </div>

                <div>
                  <label className='block font-bold mb-2'>4. Question Distribution</label>
                  <div className='space-y-2 text-sm'>
                    <div className='flex justify-between items-center'>
                      <span>MCQs</span>
                      <input 
                        type='number' 
                        className='w-16 p-1 border rounded'
                        value={questionTypes.mcq}
                        onChange={e => setQuestionTypes({...questionTypes, mcq: Number(e.target.value)})}
                      />
                    </div>
                    <div className='flex justify-between items-center'>
                      <span>Very Short</span>
                      <input 
                        type='number' 
                        className='w-16 p-1 border rounded'
                        value={questionTypes.veryShort}
                        onChange={e => setQuestionTypes({...questionTypes, veryShort: Number(e.target.value)})}
                      />
                    </div>
                    <div className='flex justify-between items-center'>
                      <span>Short Answer</span>
                      <input 
                        type='number' 
                        className='w-16 p-1 border rounded'
                        value={questionTypes.short}
                        onChange={e => setQuestionTypes({...questionTypes, short: Number(e.target.value)})}
                      />
                    </div>
                    <div className='flex justify-between items-center'>
                      <span>Long Answer</span>
                      <input 
                        type='number' 
                        className='w-16 p-1 border rounded'
                        value={questionTypes.long}
                        onChange={e => setQuestionTypes({...questionTypes, long: Number(e.target.value)})}
                      />
                    </div>
                  </div>
                </div>

                <button 
                  onClick={handleGenerate}
                  disabled={loading || !selectedSubject || selectedChapters.length === 0}
                  className='w-full btn btn-primary flex items-center justify-center gap-2'
                >
                  {loading ? <Loader2 className='animate-spin' /> : <PenTool size={20} />}
                  Generate Paper
                </button>
              </>
            )}
          </div>

          {/* Right Panel: Preview */}
          <div className='md:col-span-2 card min-h-[600px] flex flex-col'>
            <div className='flex justify-between items-center mb-4 border-b pb-4'>
              <h2 className='text-xl font-bold'>Paper Preview</h2>
              {generatedPaper && (
                <button onClick={handlePrint} className='btn btn-secondary flex items-center gap-2'>
                  <Download size={18} /> Print / PDF
                </button>
              )}
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
                    <p className='text-lg font-semibold mt-2'>{generatedPaper.class || `Subject: ${subjects.find(s => s.id === selectedSubject)?.name}`}</p>
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
                <PenTool className='w-16 h-16 mb-4 opacity-20' />
                <p>Select a paper from the list or generate a new one</p>
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
                <p className='text-lg font-semibold mt-2'>{generatedPaper.class || `Subject: ${subjects.find(s => s.id === selectedSubject)?.name}`}</p>
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
