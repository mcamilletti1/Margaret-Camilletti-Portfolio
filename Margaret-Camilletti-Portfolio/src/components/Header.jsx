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
      <a target="_blank" href="https://github.com/mcamilletti1"><img height="30px" width="30px" className="icon" src="src/assets/pngaaa.com-94893.png"></img></a>
      <a target="_blank" href="https://linkedin.com/in/margaretcamilletti"><img height="30px" width="30px" className="icon" src="src/assets/kisspng-united-states-hilton-hotels-resorts-organization-linkedin-white-5b39721a0b09e5.9500994915304914180452.png"></img></a>
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