import { Routes, Route, Link } from 'react-router-dom';
import Home from './pages/Home';
import QuestionGenerator from './pages/QuestionGenerator';
import Documents from './pages/Documents';
import Syllabus from './pages/Syllabus';
import { BookOpen, FileText, PenTool, Home as HomeIcon } from 'lucide-react';

function App() {
  return (
    <div className="min-h-screen flex flex-col">
      <nav className="bg-white shadow-lg">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex justify-between h-16">
            <div className="flex items-center">
              <Link to="/" className="flex items-center space-x-2 text-primary font-bold text-2xl">
                <BookOpen className="w-8 h-8" />
                <span>LearnNest</span>
              </Link>
            </div>
            <div className="flex items-center space-x-8">
              <Link to="/" className="flex items-center space-x-1 text-gray-600 hover:text-primary">
                <HomeIcon className="w-5 h-5" />
                <span>Home</span>
              </Link>
              <Link to="/generate" className="flex items-center space-x-1 text-gray-600 hover:text-primary">
                <PenTool className="w-5 h-5" />
                <span>Generate Paper</span>
              </Link>
              <Link to="/documents" className="flex items-center space-x-1 text-gray-600 hover:text-primary">
                <FileText className="w-5 h-5" />
                <span>Documents</span>
              </Link>
              <Link to="/syllabus" className="flex items-center space-x-1 text-gray-600 hover:text-primary">
                <BookOpen className="w-5 h-5" />
                <span>Syllabus</span>
              </Link>
            </div>
          </div>
        </div>
      </nav>

      <main className="flex-grow container mx-auto px-4 py-8">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/generate" element={<QuestionGenerator />} />
          <Route path="/documents" element={<Documents />} />
          <Route path="/syllabus" element={<Syllabus />} />
        </Routes>
      </main>

      <footer className="bg-gray-800 text-white py-6 mt-auto">
        <div className="container mx-auto px-4 text-center">
          <p>© 2025 LearnNest. Built for ICSE Class 6.</p>
        </div>
      </footer>
    </div>
  );
}

export default App;
