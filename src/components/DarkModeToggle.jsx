import React from 'react';

function DarkModeToggle({ darkMode, onToggle }) {
  return (
    <button 
      onClick={onToggle}
      style={{
        padding: '8px 16px',
        cursor: 'pointer',
        borderRadius: '4px',
        border: '1px solid #ccc',
        backgroundColor: darkMode ? '#fff' : '#333',
        color: darkMode ? '#303030' : '#fff',
        fontWeight: 'bold'
      }}
    >
      {darkMode ? 'Toggle Light Mode' : 'Toggle Dark Mode'}
    </button>
  );
}

export default DarkModeToggle;
