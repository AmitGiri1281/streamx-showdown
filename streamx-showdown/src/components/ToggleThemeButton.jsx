// src/components/ToggleThemeButton.jsx
import React from 'react';
import { useTheme } from '../context/ThemeContext';

const ToggleThemeButton = () => {
  const { darkMode, setDarkMode } = useTheme();

  return (
    <button onClick={() => setDarkMode(prev => !prev)}>
      Switch to {darkMode ? 'Light' : 'Dark'} Mode
    </button>
  );
};

export default ToggleThemeButton;
