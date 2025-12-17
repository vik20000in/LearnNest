import { Link } from 'react-router-dom';
import { PenTool, FileText, BookOpen, FolderInput, DownloadCloud } from 'lucide-react';
import { useState } from 'react';
import axios from 'axios';

const Home = () => {
  const [showImport, setShowImport] = useState(false);
  const [showDriveSync, setShowDriveSync] = useState(false);
  const [folderPath, setFolderPath] = useState('');
  const [driveFolderId, setDriveFolderId] = useState('1ovJm7sxHRLhMLC8zsWUj8Xaw7gR9kQ8E');
  const [apiKey, setApiKey] = useState('');
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

  const handleDriveSync = async (e: React.FormEvent) => {
    e.preventDefault();
    setImportStatus('Syncing from Google Drive... This may take a while.');
    try {
      const res = await axios.post('/api/documents/sync-drive', { folderId: driveFolderId, apiKey });
      setImportStatus(`Success! Synced ${res.data.count} documents.`);
      setTimeout(() => {
        setShowDriveSync(false);
        setImportStatus('');
      }, 3000);
    } catch (error: any) {
      setImportStatus('Error: ' + (error.response?.data?.error || error.message));
    }
  };

  return (
    <div className="space-y-12 relative">
      {showImport && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-surface p-8 rounded-xl shadow-2xl max-w-md w-full">
            <h3 className="text-2xl font-bold mb-4 text-text">Import from Local Folder</h3>
            <p className="text-text/80 mb-4 text-sm">
              Enter the local path to your folder with PDFs.
              <br/>
              <span className="text-xs text-text/60">Example: C:\Users\Name\Documents\School</span>
            </p>
            <form onSubmit={handleImport} className="space-y-4">
              <input 
                type="text" 
                value={folderPath}
                onChange={e => setFolderPath(e.target.value)}
                placeholder="Paste folder path here..."
                className="w-full p-2 border rounded bg-background text-text"
                required
              />
              <div className="flex justify-end gap-2">
                <button 
                  type="button" 
                  onClick={() => setShowImport(false)}
                  className="btn bg-gray-200 hover:bg-gray-300 text-gray-800"
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

      {showDriveSync && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-surface p-8 rounded-xl shadow-2xl max-w-md w-full">
            <h3 className="text-2xl font-bold mb-4 text-text">Sync from Google Drive</h3>
            <p className="text-text/80 mb-4 text-sm">
              Enter your Google API Key to fetch documents from the specified Drive folder.
            </p>
            <form onSubmit={handleDriveSync} className="space-y-4">
              <div>
                <label className="block text-xs font-bold text-text/60 mb-1">Folder ID</label>
                <input 
                    type="text" 
                    value={driveFolderId}
                    onChange={e => setDriveFolderId(e.target.value)}
                    className="w-full p-2 border rounded bg-background text-text"
                    required
                />
              </div>
              <div>
                <label className="block text-xs font-bold text-text/60 mb-1">Google API Key</label>
                <input 
                    type="text" 
                    value={apiKey}
                    onChange={e => setApiKey(e.target.value)}
                    placeholder="Enter your Google API Key"
                    className="w-full p-2 border rounded bg-background text-text"
                    required
                />
                <p className="text-xs text-text/40 mt-1">Required to access Google Drive API.</p>
              </div>
              
              <div className="flex justify-end gap-2">
                <button 
                  type="button" 
                  onClick={() => setShowDriveSync(false)}
                  className="btn bg-gray-200 hover:bg-gray-300 text-gray-800"
                >
                  Cancel
                </button>
                <button type="submit" className="btn btn-primary">
                  Start Sync
                </button>
              </div>
              {importStatus && <p className="text-center font-bold text-primary break-words">{importStatus}</p>}
            </form>
          </div>
        </div>
      )}

      <div className="text-center space-y-4">
        <h1 className="text-5xl font-bold text-primary">Welcome to LearnNest</h1>
        <p className="text-xl text-text/80">Your personal study companion for Class 6 ICSE</p>
      </div>

      <div className="grid md:grid-cols-4 gap-6">
        <Link to="/generate" className="card hover:shadow-xl transition-shadow group bg-surface">
          <div className="flex flex-col items-center text-center space-y-4">
            <div className="p-4 bg-primary/10 rounded-full group-hover:bg-primary/20 transition-colors">
              <PenTool className="w-12 h-12 text-primary" />
            </div>
            <h2 className="text-xl font-bold text-text">Generate Questions</h2>
            <p className="text-text/60 text-sm">Create custom question papers with AI.</p>
          </div>
        </Link>

        <Link to="/documents" className="card hover:shadow-xl transition-shadow group bg-surface">
          <div className="flex flex-col items-center text-center space-y-4">
            <div className="p-4 bg-secondary/10 rounded-full group-hover:bg-secondary/20 transition-colors">
              <FileText className="w-12 h-12 text-secondary" />
            </div>
            <h2 className="text-xl font-bold text-text">Document Vault</h2>
            <p className="text-text/60 text-sm">Store and organize your homework & notices.</p>
          </div>
        </Link>

        <Link to="/syllabus" className="card hover:shadow-xl transition-shadow group bg-surface">
          <div className="flex flex-col items-center text-center space-y-4">
            <div className="p-4 bg-purple-100 rounded-full group-hover:bg-purple-200 transition-colors">
              <BookOpen className="w-12 h-12 text-purple-600" />
            </div>
            <h2 className="text-xl font-bold text-text">Syllabus Manager</h2>
            <p className="text-text/60 text-sm">Keep track of what you need to study.</p>
          </div>
        </Link>

        <button onClick={() => setShowDriveSync(true)} className="card hover:shadow-xl transition-shadow group text-left bg-surface">
          <div className="flex flex-col items-center text-center space-y-4">
            <div className="p-4 bg-blue-100 rounded-full group-hover:bg-blue-200 transition-colors">
              <DownloadCloud className="w-12 h-12 text-blue-600" />
            </div>
            <h2 className="text-xl font-bold text-text">Sync Drive</h2>
            <p className="text-text/60 text-sm">Download documents from Google Drive.</p>
          </div>
        </button>

        <button onClick={() => setShowImport(true)} className="card hover:shadow-xl transition-shadow group text-left bg-surface">
          <div className="flex flex-col items-center text-center space-y-4">
            <div className="p-4 bg-orange-100 rounded-full group-hover:bg-orange-200 transition-colors">
              <FolderInput className="w-12 h-12 text-orange-600" />
            </div>
            <h2 className="text-xl font-bold text-text">Import Folder</h2>
            <p className="text-text/60 text-sm">Bulk import documents from Google Drive / Local.</p>
          </div>
        </button>
      </div>
    </div>
  );
};

export default Home;
