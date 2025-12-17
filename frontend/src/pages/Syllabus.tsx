import { useState, useEffect } from 'react';
import axios from 'axios';
import FlashcardViewer from '../components/FlashcardViewer';

interface Subject {
  id: number;
  name: string;
}

interface Chapter {
  id: number;
  name: string;
  syllabus: string;
}

const Syllabus = () => {
  const [subjects, setSubjects] = useState<Subject[]>([]);
  const [selectedSubject, setSelectedSubject] = useState<number | null>(null);
  const [chapters, setChapters] = useState<Chapter[]>([]);
  const [newChapter, setNewChapter] = useState({ name: '', syllabus: '' });

  useEffect(() => {
    fetchSubjects();
  }, []);

  useEffect(() => {
    if (selectedSubject) {
      fetchChapters(selectedSubject);
    }
  }, [selectedSubject]);

  const fetchSubjects = async () => {
    const res = await axios.get('/api/subjects');
    setSubjects(res.data);
  };

  const fetchChapters = async (subjectId: number) => {
    const res = await axios.get(`/api/subjects/${subjectId}/chapters`);
    setChapters(res.data);
  };

  const handleAddChapter = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!selectedSubject) return;

    await axios.post('/api/chapters', {
      subject_id: selectedSubject,
      ...newChapter
    });
    setNewChapter({ name: '', syllabus: '' });
    fetchChapters(selectedSubject);
  };

  return (
    <div className="space-y-8">
      <h1 className="text-3xl font-bold">Syllabus Management</h1>

      <div className="grid md:grid-cols-4 gap-6">
        <div className="col-span-1 space-y-2">
          <h2 className="text-xl font-semibold mb-4 text-text">Subjects</h2>
          {subjects.map(subject => (
            <button
              key={subject.id}
              onClick={() => setSelectedSubject(subject.id)}
              className={`w-full text-left px-4 py-3 rounded-lg transition-colors ${
                selectedSubject === subject.id 
                  ? 'bg-primary text-white' 
                  : 'bg-surface text-text hover:bg-background'
              }`}
            >
              {subject.name}
            </button>
          ))}
        </div>

        <div className="col-span-3 space-y-6">
          {selectedSubject ? (
            <>
              <div className="space-y-4">
                <h3 className="text-xl font-bold text-text">Chapters</h3>
                {chapters.length === 0 && <p className="text-text/60">No chapters added yet.</p>}
                {chapters.map(chapter => (
                  <div key={chapter.id} className="card">
                    <h4 className="font-bold text-lg text-text">{chapter.name}</h4>
                    <p className="text-text/80 mt-2 whitespace-pre-wrap">{chapter.syllabus}</p>
                    <FlashcardViewer chapterId={chapter.id} />
                  </div>
                ))}
              </div>

              <div className="card">
                <h3 className="text-xl font-bold mb-4 text-text">Add New Chapter</h3>
                <form onSubmit={handleAddChapter} className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium mb-1 text-text">Chapter Name</label>
                    <input
                      type="text"
                      value={newChapter.name}
                      onChange={e => setNewChapter({ ...newChapter, name: e.target.value })}
                      className="w-full p-2 border rounded-md bg-background text-text"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-1 text-text">Syllabus Details</label>
                    <textarea
                      value={newChapter.syllabus}
                      onChange={e => setNewChapter({ ...newChapter, syllabus: e.target.value })}
                      className="w-full p-2 border rounded-md h-24 bg-background text-text"
                      placeholder="Enter topics covered in this chapter..."
                    />
                  </div>
                  <button type="submit" className="btn btn-primary">Add Chapter</button>
                </form>
              </div>
            </>
          ) : (
            <div className="flex items-center justify-center h-64 bg-background rounded-xl border-2 border-dashed border-text/20">
              <p className="text-text/60 text-lg">Select a subject to view syllabus</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Syllabus;
