import { useState } from 'react';
import { Link } from 'react-router-dom';
import Nav from './Nav';

const Header = () => {
  const [showMenu, setShowMenu] = useState(false);

  const handleMenuToggle = () => {
    setShowMenu(!showMenu);
  };

  const handleMenuKeyDown = (e) => {
    if (e.key === 'Enter' || e.key === 'Space') {
      handleMenuToggle();
    }
  };

  return (
    <header className="header-container">
      <div className="left-side">
        <Link className="nav" to="/home" id="home-link" smooth={true} duration={500}>
          <span className="sr-only">Margaret Camilletti</span>
        </Link>
      </div>
      <div className="right-side">
      <a target="_blank" rel="noopener noreferrer" href="https://github.com/mcamilletti1"><img height="30px" width="30px" className="icon" src="src/assets/pngaaa.com-94893.png" alt="GitHub"></img></a>
      <a target="_blank" rel="noopener noreferrer" href="https://linkedin.com/in/margaretcamilletti"><img height="30px" width="30px" className="icon" src="src/assets/kisspng-united-states-hilton-hotels-resorts-organization-linkedin-white-5b39721a0b09e5.9500994915304914180452.png" alt="LinkedIn"></img></a>
        <div className={`hamburger-menu ${showMenu ? 'active' : ''}`} 
        onClick={handleMenuToggle}
        onKeyDown={handleMenuKeyDown}
        tabIndex={0}
        role="button"
        aria-label="Toggle Menu"
        aria-expanded={showMenu}
        aria-controls="menu-content"
        >
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