import { useState, useEffect } from 'react';
import axios from 'axios';
import { X, BookOpen, FileText } from 'lucide-react';

interface Flashcard {
  id: number;
  front: string;
  back: string;
}

interface FlashcardViewerProps {
  chapterId: number;
}

const FlashcardViewer = ({ chapterId }: FlashcardViewerProps) => {
  const [flashcards, setFlashcards] = useState<Flashcard[]>([]);
  const [loading, setLoading] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    if (isOpen && flashcards.length === 0) {
        fetchFlashcards();
    }
  }, [chapterId, isOpen]);

  const fetchFlashcards = async () => {
    setLoading(true);
    try {
      const res = await axios.get(`/api/chapters/${chapterId}/flashcards`);
      setFlashcards(res.data);
    } catch (error) {
      console.error('Failed to fetch flashcards', error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <button
        onClick={() => setIsOpen(true)}
        className="mt-4 inline-flex items-center gap-2 px-4 py-2 bg-indigo-50 text-indigo-700 rounded-lg hover:bg-indigo-100 transition-colors text-sm font-medium border border-indigo-200"
      >
        <FileText size={16} />
        View Cheat Sheet
      </button>

      {isOpen && (
        <div className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 flex items-center justify-center p-4 animate-in fade-in duration-200">
          <div className="bg-white rounded-xl shadow-2xl w-full max-w-5xl max-h-[90vh] flex flex-col animate-in zoom-in-95 duration-200">
            {/* Header */}
            <div className="p-5 border-b flex justify-between items-center bg-gray-50 rounded-t-xl">
              <div className="flex items-center gap-3">
                <div className="p-2 bg-indigo-100 rounded-lg text-indigo-600">
                  <BookOpen size={24} />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900">Revision Cheat Sheet</h3>
                  <p className="text-sm text-gray-500">Quick reference guide for this chapter</p>
                </div>
              </div>
              <button 
                onClick={() => setIsOpen(false)}
                className="text-gray-400 hover:text-gray-600 p-2 rounded-full hover:bg-gray-200 transition-colors"
              >
                <X size={24} />
              </button>
            </div>

            {/* Content */}
            <div className="flex-1 overflow-y-auto p-6 bg-gray-50/50">
              {loading ? (
                <div className="flex flex-col items-center justify-center py-20">
                    <div className="animate-spin rounded-full h-12 w-12 border-4 border-indigo-100 border-t-indigo-600 mb-4"></div>
                    <p className="text-gray-500 font-medium">Loading your revision notes...</p>
                </div>
              ) : flashcards.length > 0 ? (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {flashcards.map((card) => (
                    <div key={card.id} className="bg-white p-5 rounded-xl border border-gray-200 shadow-sm hover:shadow-md transition-all duration-200 group">
                      <h4 className="font-bold text-indigo-700 mb-3 text-sm uppercase tracking-wide border-b border-gray-100 pb-2 flex items-center gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-indigo-400"></span>
                        {card.front}
                      </h4>
                      <p className="text-gray-700 text-sm leading-relaxed pl-3.5 border-l-2 border-indigo-100 group-hover:border-indigo-300 transition-colors">
                        {card.back}
                      </p>
                    </div>
                  ))}
                </div>
              ) : (
                <div className="flex flex-col items-center justify-center py-20 bg-white rounded-xl border-2 border-dashed border-gray-200">
                  <div className="p-4 bg-gray-50 rounded-full mb-4">
                    <FileText size={32} className="text-gray-400" />
                  </div>
                  <h4 className="text-lg font-medium text-gray-900 mb-1">No notes available yet</h4>
                  <p className="text-gray-500 mb-6 text-center max-w-sm">
                    Flashcards will be available soon for this chapter.
                  </p>
                </div>
              )}
            </div>
            
            {/* Footer */}
            <div className="p-4 border-t bg-white rounded-b-xl flex justify-end">
                <button 
                    onClick={() => setIsOpen(false)}
                    className="px-5 py-2.5 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200 font-medium transition-colors"
                >
                    Close
                </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default FlashcardViewer;
