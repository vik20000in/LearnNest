import { useState, useEffect } from 'react';
import axios from 'axios';

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
          <h2 className="text-xl font-semibold mb-4">Subjects</h2>
          {subjects.map(subject => (
            <button
              key={subject.id}
              onClick={() => setSelectedSubject(subject.id)}
              className={`w-full text-left px-4 py-3 rounded-lg transition-colors ${
                selectedSubject === subject.id 
                  ? 'bg-primary text-white' 
                  : 'bg-white hover:bg-gray-50'
              }`}
            >
              {subject.name}
            </button>
          ))}
        </div>

        <div className="col-span-3 space-y-6">
          {selectedSubject ? (
            <>
              <div className="card">
                <h3 className="text-xl font-bold mb-4">Add New Chapter</h3>
                <form onSubmit={handleAddChapter} className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium mb-1">Chapter Name</label>
                    <input
                      type="text"
                      value={newChapter.name}
                      onChange={e => setNewChapter({ ...newChapter, name: e.target.value })}
                      className="w-full p-2 border rounded-md"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-1">Syllabus Details</label>
                    <textarea
                      value={newChapter.syllabus}
                      onChange={e => setNewChapter({ ...newChapter, syllabus: e.target.value })}
                      className="w-full p-2 border rounded-md h-24"
                      placeholder="Enter topics covered in this chapter..."
                    />
                  </div>
                  <button type="submit" className="btn btn-primary">Add Chapter</button>
                </form>
              </div>

              <div className="space-y-4">
                <h3 className="text-xl font-bold">Chapters</h3>
                {chapters.length === 0 && <p className="text-gray-500">No chapters added yet.</p>}
                {chapters.map(chapter => (
                  <div key={chapter.id} className="card">
                    <h4 className="font-bold text-lg">{chapter.name}</h4>
                    <p className="text-gray-600 mt-2 whitespace-pre-wrap">{chapter.syllabus}</p>
                  </div>
                ))}
              </div>
            </>
          ) : (
            <div className="flex items-center justify-center h-64 bg-gray-100 rounded-xl border-2 border-dashed border-gray-300">
              <p className="text-gray-500 text-lg">Select a subject to view syllabus</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Syllabus;
