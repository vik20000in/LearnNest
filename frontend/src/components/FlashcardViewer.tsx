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
        className="mt-4 inline-flex items-center gap-2 px-4 py-2 bg-primary/5 text-primary rounded-lg hover:bg-primary/10 transition-colors text-sm font-medium border border-primary/20"
      >
        <FileText size={16} />
        View Cheat Sheet
      </button>

      {isOpen && (
        <div className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 flex items-center justify-center p-4 animate-in fade-in duration-200">
          <div className="bg-surface rounded-xl shadow-2xl w-full max-w-5xl max-h-[90vh] flex flex-col animate-in zoom-in-95 duration-200">
            {/* Header */}
            <div className="p-5 border-b flex justify-between items-center bg-background rounded-t-xl">
              <div className="flex items-center gap-3">
                <div className="p-2 bg-primary/10 rounded-lg text-primary">
                  <BookOpen size={24} />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-text">Revision Cheat Sheet</h3>
                  <p className="text-sm text-text/60">Quick reference guide for this chapter</p>
                </div>
              </div>
              <button 
                onClick={() => setIsOpen(false)}
                className="text-text/40 hover:text-text/80 p-2 rounded-full hover:bg-background transition-colors"
              >
                <X size={24} />
              </button>
            </div>

            {/* Content */}
            <div className="flex-1 overflow-y-auto p-6 bg-background/50">
              {loading ? (
                <div className="flex flex-col items-center justify-center py-20">
                    <div className="animate-spin rounded-full h-12 w-12 border-4 border-primary/10 border-t-primary mb-4"></div>
                    <p className="text-text/60 font-medium">Loading your revision notes...</p>
                </div>
              ) : flashcards.length > 0 ? (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {flashcards.map((card) => (
                    <div key={card.id} className="bg-surface p-5 rounded-xl border border-text/10 shadow-sm hover:shadow-md transition-all duration-200 group">
                      <h4 className="font-bold text-primary mb-3 text-sm uppercase tracking-wide border-b border-text/5 pb-2 flex items-center gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-primary/60"></span>
                        {card.front}
                      </h4>
                      <p className="text-text/80 text-sm leading-relaxed pl-3.5 border-l-2 border-primary/10 group-hover:border-primary/40 transition-colors">
                        {card.back}
                      </p>
                    </div>
                  ))}
                </div>
              ) : (
                <div className="flex flex-col items-center justify-center py-20 bg-surface rounded-xl border-2 border-dashed border-text/10">
                  <div className="p-4 bg-background rounded-full mb-4">
                    <FileText size={32} className="text-text/40" />
                  </div>
                  <h4 className="text-lg font-medium text-text mb-1">No notes available yet</h4>
                  <p className="text-text/60 mb-6 text-center max-w-sm">
                    Flashcards will be available soon for this chapter.
                  </p>
                </div>
              )}
            </div>
            
            {/* Footer */}
            <div className="p-4 border-t bg-surface rounded-b-xl flex justify-end">
                <button 
                    onClick={() => setIsOpen(false)}
                    className="px-5 py-2.5 bg-background text-text/80 rounded-lg hover:bg-background/80 font-medium transition-colors"
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
