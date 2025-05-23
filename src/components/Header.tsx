import React from 'react';

interface HeaderProps {
  onMenuToggle: () => void;
  isMenuOpen: boolean;
  hasShadow: boolean;
}

const Header: React.FC<HeaderProps> = ({ onMenuToggle, isMenuOpen, hasShadow }) => {
  return (
    <nav className={hasShadow ? 'shadow' : ''}>
      <div className="nav-logo">
        <p className="nav-name">Ari<span>.</span></p>
      </div>
      <div className={`nav-menu ${isMenuOpen ? 'responsive' : ''}`} id="myNavMenu">
        <ul className="nav_menu_list">
          {['home', 'about', 'projects', 'contact'].map((section) => (
            <li key={section} className="nav_list">
              <a href={`#${section}`} className="nav-link">
                {section.charAt(0).toUpperCase() + section.slice(1)}
              </a>
              <div className="circle"></div>
            </li>
          ))}
        </ul>
      </div>
      <div className="nav-button">
        <a href="https://drive.google.com/uc?export=download&id=1Jb2T4RsIKYrq3_gmkvEdH9ZsWS-GIdbs">
          <button className="btn">
            Download CV <i className="uil uil-file-alt"></i>
          </button>
        </a>
      </div>
      <div className="nav-menu-btn">
        <i className="uil uil-bars" onClick={onMenuToggle}></i>
      </div>
    </nav>
  );
};

export default Header;