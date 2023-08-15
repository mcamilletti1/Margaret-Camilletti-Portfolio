import { useState } from 'react';
import { Link } from 'react-router-dom';
import Nav from './Nav';

const Header = () => {
  const [showMenu, setShowMenu] = useState(false);

  const handleMenuToggle = () => {
    setShowMenu(!showMenu);
  };

  return (
    <header className="header-container">
      <div className="left-side">
        <Link className="nav" to="home" id="home-link" smooth={true} duration={500}>
          Margaret Camilletti
        </Link>
      </div>
      <div className="right-side">
        <div className={`hamburger-menu ${showMenu ? 'active' : ''}`} onClick={handleMenuToggle}>
          <div className="bar"></div>
          <div className="bar"></div>
          <div className="bar"></div>
        </div>
        <Nav showMenu={showMenu} />
      </div>
    </header>
  );
};

export default Header;