import { Link as ScrollLink } from 'react-scroll';

const Nav = ({ showMenu }) => {
  return (
    <nav className={`nav-container ${showMenu ? 'show-nav-links' : ''}`}>
      <ul className="unstyled-ul">
        <li>
      <ScrollLink
        className="nav"
        to="about"
        smooth={true}
        duration={500}
        offset={-70}
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
      >
        Contact
      </ScrollLink>
      </li>
      </ul>
    </nav>
  );
};

export default Nav;