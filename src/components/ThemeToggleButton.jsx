import React, { useContext } from 'react';
import { ThemeContext } from './ThemeContext';

const ThemeToggleButton = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);
  return (
    <button
      onClick={toggleTheme}
      className="p-2 rounded-full transition-colors duration-300 focus:outline-none"
    >
      {theme === 'dark' ? (
        <span role="img" aria-label="sun" className="text-yellow-400 text-xl">☀️</span>
      ) : (
        <span role="img" aria-label="moon" className="text-gray-800 text-xl">🌙</span>
      )}
    </button>
  );
};

export default ThemeToggleButton;