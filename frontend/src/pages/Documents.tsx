import { useState, useEffect } from 'react';
import axios from 'axios';
import { Upload, Trash2, FileText } from 'lucide-react';

interface Document {
  id: number;
  title: string;
  type: string;
  file_path: string;
  created_at: string;
}

const Documents = () => {
  const [documents, setDocuments] = useState<Document[]>([]);
  const [file, setFile] = useState<File | null>(null);
  const [title, setTitle] = useState('');
  const [type, setType] = useState('homework');

  useEffect(() => {
    fetchDocuments();
  }, []);

  const fetchDocuments = async () => {
    const res = await axios.get('/api/documents');
    setDocuments(res.data);
  };

  const handleUpload = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!file) return;

    const formData = new FormData();
    formData.append('file', file);
    formData.append('title', title);
    formData.append('type', type);

    try {
      await axios.post('/api/documents', formData, {
        headers: { 'Content-Type': 'multipart/form-data' }
      });
      setTitle('');
      setFile(null);
      fetchDocuments();
    } catch (error) {
      console.error('Upload failed', error);
    }
  };

  const handleDelete = async (id: number) => {
    if (confirm('Are you sure you want to delete this document?')) {
      await axios.delete(`/api/documents/${id}`);
      fetchDocuments();
    }
  };

  return (
    <div className="space-y-8">
      <h1 className="text-3xl font-bold">Document Vault</h1>

      <div className="grid md:grid-cols-3 gap-8">
        <div className="card h-fit">
          <h2 className="text-xl font-bold mb-4 flex items-center gap-2">
            <Upload className="w-5 h-5" /> Upload Document
          </h2>
          <form onSubmit={handleUpload} className="space-y-4">
            <div>
              <label className="block text-sm font-medium mb-1 text-text">Title</label>
              <input
                type="text"
                value={title}
                onChange={e => setTitle(e.target.value)}
                className="w-full p-2 border rounded-md bg-background text-text"
                required
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-1 text-text">Type</label>
              <select
                value={type}
                onChange={e => setType(e.target.value)}
                className="w-full p-2 border rounded-md bg-background text-text"
              >
                <option value="homework">Homework</option>
                <option value="circular">Circular</option>
                <option value="exam_notice">Exam Notice</option>
                <option value="syllabus">Syllabus PDF</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium mb-1 text-text">File</label>
              <input
                type="file"
                onChange={e => setFile(e.target.files ? e.target.files[0] : null)}
                className="w-full text-text"
                required
              />
            </div>
            <button type="submit" className="btn btn-primary w-full">Upload</button>
          </form>
        </div>

        <div className="md:col-span-2 space-y-4">
          <h2 className="text-xl font-bold mb-4 text-text">Your Documents</h2>
          <div className="grid gap-4">
            {documents.map(doc => (
              <div key={doc.id} className="bg-surface p-4 rounded-lg shadow flex items-center justify-between">
                <div className="flex items-center gap-4">
                  <div className={`p-3 rounded-full ${
                    doc.type === 'homework' ? 'bg-blue-100 text-blue-600' :
                    doc.type === 'circular' ? 'bg-yellow-100 text-yellow-600' :
                    'bg-background text-text/80'
                  }`}>
                    <FileText className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="font-bold text-text">{doc.title}</h3>
                    <p className="text-sm text-text/60 capitalize">{doc.type} • {new Date(doc.created_at).toLocaleDateString()}</p>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <a 
                    href={`http://localhost:3000${doc.file_path}`} 
                    target="_blank" 
                    rel="noreferrer"
                    className="btn bg-background hover:bg-background/80 text-text text-sm"
                  >
                    View
                  </a>
                  <button 
                    onClick={() => handleDelete(doc.id)}
                    className="p-2 text-red-500 hover:bg-red-500/10 rounded-full"
                  >
                    <Trash2 className="w-5 h-5" />
                  </button>
                </div>
              </div>
            ))}
            {documents.length === 0 && (
              <p className="text-center text-text/60 py-8">No documents uploaded yet.</p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Documents;
