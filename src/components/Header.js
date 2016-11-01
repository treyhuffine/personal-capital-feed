import React from 'react';
import './Header.css';

const headerImageSrc = 'https://www.personalcapital.com/images/website3/layout/logos/logo--text.svg';

let Header = () => {
  return (
    <nav className="Header">
      <div className="nav-wrapper">
        <img
          src={headerImageSrc}
          className="Header-image"
          alt="Personal Capital - Trey Huffine"
        />
      </div>
    </nav>
  );
}

export default Header;
