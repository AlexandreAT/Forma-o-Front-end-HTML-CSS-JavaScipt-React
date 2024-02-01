import React, { useContext } from 'react';
import { ThemeContext } from '../App';

export const ThemeSwitch = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <div className="style-color">
      <button className='btn-theme' onClick={toggleTheme}>
        {theme === 'dark' ? (
          <i id="mode-icon" className="fa-solid fa-moon"></i>
        ) : (
          <i id="mode-icon" className="fa-solid fa-sun"></i>
        )}
      </button>
    </div>
  );
};
