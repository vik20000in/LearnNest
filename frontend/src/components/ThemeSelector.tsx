import { useState, useRef, useEffect } from 'react';
import { Palette, Check } from 'lucide-react';
import { useTheme, Theme } from '../context/ThemeContext';

const themes: { id: Theme; name: string; color: string }[] = [
  { id: 'light', name: 'Light', color: '#4F46E5' },
  { id: 'dark', name: 'Dark', color: '#1F2937' },
  { id: 'nature', name: 'Nature', color: '#15803D' },
  { id: 'ocean', name: 'Ocean', color: '#0284C7' },
  { id: 'sunset', name: 'Sunset', color: '#E11D48' },
];

const ThemeSelector = () => {
  const { theme, setTheme } = useTheme();
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <div className="relative" ref={dropdownRef}>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center space-x-1 text-gray-600 hover:text-primary transition-colors p-2 rounded-md hover:bg-gray-100 dark:hover:bg-gray-700"
        title="Change Theme"
      >
        <Palette className="w-5 h-5" />
        <span className="hidden md:inline">Theme</span>
      </button>

      {isOpen && (
        <div className="absolute right-0 mt-2 w-48 bg-white dark:bg-gray-800 rounded-md shadow-lg py-1 z-50 ring-1 ring-black ring-opacity-5">
          {themes.map((t) => (
            <button
              key={t.id}
              onClick={() => {
                setTheme(t.id);
                setIsOpen(false);
              }}
              className={`flex items-center justify-between w-full px-4 py-2 text-sm text-left hover:bg-gray-100 dark:hover:bg-gray-700 ${
                theme === t.id ? 'text-primary font-medium' : 'text-gray-700 dark:text-gray-200'
              }`}
            >
              <div className="flex items-center">
                <span
                  className="w-3 h-3 rounded-full mr-2"
                  style={{ backgroundColor: t.color }}
                ></span>
                {t.name}
              </div>
              {theme === t.id && <Check className="w-4 h-4" />}
            </button>
          ))}
        </div>
      )}
    </div>
  );
};

export default ThemeSelector;
