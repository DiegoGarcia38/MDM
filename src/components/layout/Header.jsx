import React, { useState } from 'react';
import { Code, Menu, X, ArrowLeft } from 'lucide-react';

const Header = ({ currentScreen, userProgress, screens, setCurrentScreen }) => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="header">
      <div className="header-container">
        <div className="header-left">
          <Code className="header-icon" />
          <span className="header-title">Metadatos: datos sobre datos</span>
        </div>
        
        <div className="header-progress">
          <div className="progress-bar">
            <div 
              className="progress-fill"
              style={{ width: `${(userProgress / 6) * 100}%` }}
            />
          </div>
          <span className="progress-text">{Math.round((userProgress / 6) * 100)}%</span>
        </div>

        <div className="header-nav">
          {Object.entries(screens).map(([key, label]) => {
            if (key === 'home' || key === 'evaluation' || key === 'about' || key === 'help') return null;
            return (
              <button
                key={key}
                onClick={() => setCurrentScreen(key)}
                className={`nav-button ${currentScreen === key ? 'nav-button-active' : ''}`}
              >
                {label}
              </button>
            );
          })}
        </div>
        
        <button 
          onClick={() => setMenuOpen(!menuOpen)}
          className="mobile-menu-button"
        >
          {menuOpen ? <X className="menu-icon" /> : <Menu className="menu-icon" />}
        </button>
      </div>

      {menuOpen && (
        <div className="mobile-menu">
          {Object.entries(screens).map(([key, label]) => {
            if (key === 'home' || key === 'evaluation') return null;
            return (
              <button
                key={key}
                onClick={() => {
                  setCurrentScreen(key);
                  setMenuOpen(false);
                }}
                className={`mobile-nav-button ${currentScreen === key ? 'mobile-nav-button-active' : ''}`}
              >
                {label}
              </button>
            );
          })}
        </div>
      )}
    </nav>
  );
};

export default Header;