import React from 'react';

interface FooterProps {}

const Footer: React.FC<FooterProps> = () => {
  return (
    <footer>
      <div className="top-footer">
        <p>Muhammad Warisi.</p>
      </div>
      <div className="middle-footer">
        <ul className="footer-menu">
          {['home', 'about', 'projects', 'contact'].map((section) => (
            <li key={section} className="footer_menu_list">
              <a href={`#${section}`}>{section.charAt(0).toUpperCase() + section.slice(1)}</a>
            </li>
          ))}
        </ul>
      </div>
      <div className="footer-social-icons">
        {[
          { href: 'https://www.instagram.com/warisii_/', icon: 'uil uil-instagram' },
          { href: 'https://www.linkedin.com/in/muhammad-warisi-5856372b3/', icon: 'uil uil-linkedin-alt' },
          { href: 'https://github.com/muhammadwarisi', icon: 'uil uil-github-alt' },
        ].map((social, index) => (
          <div key={index} className="icon">
            <a href={social.href}>
              <i className={social.icon}></i>
            </a>
          </div>
        ))}
      </div>
      <div className="bottom-footer">
        <p>
          Copyright © <a href="#home">Muhammad Warisi</a> - All rights reserved
        </p>
      </div>
    </footer>
  );
};

export default Footer;