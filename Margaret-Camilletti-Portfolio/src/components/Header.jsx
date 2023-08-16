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
      <img height="30px" width="30px" className="icon" src="src/assets/pngaaa.com-94893.png"></img>
      <img height="30px" width="30px" className="icon" src="src/assets/png-transparent-white-in-text-on-black-background-black-and-white-point-angle-pattern-linkedin-texture-white-text.png"></img>
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