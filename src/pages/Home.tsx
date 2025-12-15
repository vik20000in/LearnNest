import { Link } from 'react-router-dom';
import { PenTool, FileText, BookOpen, FolderInput } from 'lucide-react';
import { useState } from 'react';
import axios from 'axios';

const Home = () => {
  const [showImport, setShowImport] = useState(false);
  const [folderPath, setFolderPath] = useState('');
  const [importStatus, setImportStatus] = useState('');

  const handleImport = async (e: React.FormEvent) => {
    e.preventDefault();
    setImportStatus('Importing...');
    try {
      const res = await axios.post('/api/documents/import', { folderPath });
      setImportStatus(`Success! Imported ${res.data.count} documents.`);
      setTimeout(() => {
        setShowImport(false);
        setImportStatus('');
        setFolderPath('');
      }, 2000);
    } catch (error) {
      setImportStatus('Error: Could not import. Check path.');
    }
  };

  return (
    <div className="space-y-12 relative">
      {showImport && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white p-8 rounded-xl shadow-2xl max-w-md w-full">
            <h3 className="text-2xl font-bold mb-4">Import from Folder</h3>
            <p className="text-gray-600 mb-4 text-sm">
              Enter the local path to your Google Drive folder or any folder with PDFs.
              <br/>
              <span className="text-xs text-gray-400">Example: C:\Users\Name\Google Drive\School</span>
            </p>
            <form onSubmit={handleImport} className="space-y-4">
              <input 
                type="text" 
                value={folderPath}
                onChange={e => setFolderPath(e.target.value)}
                placeholder="Paste folder path here..."
                className="w-full p-2 border rounded"
                required
              />
              <div className="flex justify-end gap-2">
                <button 
                  type="button" 
                  onClick={() => setShowImport(false)}
                  className="btn bg-gray-200 hover:bg-gray-300"
                >
                  Cancel
                </button>
                <button type="submit" className="btn btn-primary">
                  Import
                </button>
              </div>
              {importStatus && <p className="text-center font-bold text-primary">{importStatus}</p>}
            </form>
          </div>
        </div>
      )}

      <div className="text-center space-y-4">
        <h1 className="text-5xl font-bold text-primary">Welcome to LearnNest</h1>
        <p className="text-xl text-gray-600">Your personal study companion for Class 6 ICSE</p>
      </div>

      <div className="grid md:grid-cols-4 gap-6">
        <Link to="/generate" className="card hover:shadow-xl transition-shadow group">
          <div className="flex flex-col items-center text-center space-y-4">
            <div className="p-4 bg-indigo-100 rounded-full group-hover:bg-indigo-200 transition-colors">
              <PenTool className="w-12 h-12 text-primary" />
            </div>
            <h2 className="text-xl font-bold">Generate Questions</h2>
            <p className="text-gray-600 text-sm">Create custom question papers with AI.</p>
          </div>
        </Link>

        <Link to="/documents" className="card hover:shadow-xl transition-shadow group">
          <div className="flex flex-col items-center text-center space-y-4">
            <div className="p-4 bg-emerald-100 rounded-full group-hover:bg-emerald-200 transition-colors">
              <FileText className="w-12 h-12 text-secondary" />
            </div>
            <h2 className="text-xl font-bold">Document Vault</h2>
            <p className="text-gray-600 text-sm">Store and organize your homework & notices.</p>
          </div>
        </Link>

        <Link to="/syllabus" className="card hover:shadow-xl transition-shadow group">
          <div className="flex flex-col items-center text-center space-y-4">
            <div className="p-4 bg-purple-100 rounded-full group-hover:bg-purple-200 transition-colors">
              <BookOpen className="w-12 h-12 text-purple-600" />
            </div>
            <h2 className="text-xl font-bold">Syllabus Manager</h2>
            <p className="text-gray-600 text-sm">Keep track of what you need to study.</p>
          </div>
        </Link>

        <button onClick={() => setShowImport(true)} className="card hover:shadow-xl transition-shadow group text-left">
          <div className="flex flex-col items-center text-center space-y-4">
            <div className="p-4 bg-orange-100 rounded-full group-hover:bg-orange-200 transition-colors">
              <FolderInput className="w-12 h-12 text-orange-600" />
            </div>
            <h2 className="text-xl font-bold">Import Folder</h2>
            <p className="text-gray-600 text-sm">Bulk import documents from Google Drive / Local.</p>
          </div>
        </button>
      </div>
    </div>
  );
};

export default Home;
