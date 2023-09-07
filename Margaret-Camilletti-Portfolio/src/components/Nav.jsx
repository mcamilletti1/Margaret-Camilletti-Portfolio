import { Link as ScrollLink } from 'react-scroll';

const Nav = ({ showMenu }) => {
  return (
    <nav className={`nav-container ${showMenu ? 'show-nav-links' : ''}`} id="menu-content">
      <ul className="unstyled-ul">
        <li>
      <ScrollLink
        className="nav"
        to="about"
        smooth={true}
        duration={500}
        offset={-70}
        tabIndex={showMenu ? 0 : -1} 
        role="menuitem"
      >
        About
      </ScrollLink>
      </li>
      <li>
      <ScrollLink
        className="nav"
        to="projects"
        smooth={true}
        duration={500}
        offset={-70}
        tabIndex={showMenu ? 0 : -1}
        role="menuitem"
      >
        Projects
      </ScrollLink>
      </li>
      <li>
      <ScrollLink
        className="nav"
        to="resume"
        smooth={true}
        duration={500}
        offset={-70}
        tabIndex={showMenu ? 0 : -1}
        role="menuitem"
      >
        Resume
      </ScrollLink>
      </li>
      <li>
      <ScrollLink
        className="nav"
        to="contact"
        smooth={true}
        duration={500}
        offset={-70}
        tabIndex={showMenu ? 0 : -1}
        role="menuitem"
      >
        Contact
      </ScrollLink>
      </li>
      </ul>
    </nav>
  );
};

export default Nav;