import { Link, animateScroll as scroll } from 'react-scroll'

const Nav = () => {
    return (
        <div className="nav-links">
            <Link className="nav" to="home" id="home-link" smooth={true} duration = {500}>Margaret Camilletti</Link>
            <Link className="nav" to="about" id="about-link" smooth={true} duration={500}>About</Link>
            <Link className="nav" to="projects" id="projects-link" smooth={true} duration={500}>Projects</Link>
            <Link className="nav" to="resume" id="resume-link" smooth={true} duration={500}>Resume</Link>
            <Link className="nav" to="contact" id="contact-link" smoot={true} duration={500}>Contact</Link>
        </div>
    )
}

export default Nav