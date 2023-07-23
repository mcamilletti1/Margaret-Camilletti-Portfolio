import React from 'react';
import { Link } from 'react-scroll';

const Nav = ({ showMenu }) => {
  return (
    <div className={`nav-container ${showMenu ? 'show-nav-links' : ''}`}>
      <Link
        className="nav"
        to="about"
        smooth={true}
        duration={500}
        offset={-70}
      >
        About
      </Link>
      <Link
        className="nav"
        to="projects"
        smooth={true}
        duration={500}
        offset={-70}
      >
        Projects
      </Link>
      <Link
        className="nav"
        to="resume"
        smooth={true}
        duration={500}
        offset={-70}
      >
        Resume
      </Link>
      <Link
        className="nav"
        to="contact"
        smooth={true}
        duration={500}
        offset={-70}
      >
        Contact
      </Link>
    </div>
  );
};

export default Nav;