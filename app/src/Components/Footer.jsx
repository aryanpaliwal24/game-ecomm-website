import React from 'react';

export const Footer = () => {
  return (
    <div className="footer-container">
      <div className="footer-content">
        <p>&copy; 2024 DarkSiders Gaming Store. All rights reserved.</p>
        <div className="social-links">
          <a
            href="https://github.com/aryanpaliwal24" 
            target="_blank"
            rel="noopener noreferrer"
            className="social-link"
          >
            <i className="fab fa-github"></i> GitHub
          </a>
          <a
            href="https://www.linkedin.com/in/aryan-paliwal24/"
            target="_blank"
            rel="noopener noreferrer"
            className="social-link"
          >
            <i className="fab fa-linkedin"></i> LinkedIn
          </a>
        </div>
      </div>
    </div>
  );
};
