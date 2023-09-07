

const Nav = ({ showMenu }) => {

  const scrollToTarget = (targetId) => {
    const targetElement = document.getElementById(targetId);
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav className={`nav-container ${showMenu ? 'show-nav-links' : ''}`} id="menu-content">
      <ul className="unstyled-ul">
        <li>
      <a
        className="nav"
        onClick={() => scrollToTarget('about')}
        onKeyDown={(e) => {
          if (e.key === 'Enter') {
            scrollToTarget('about');
          }
        }}
        tabIndex={showMenu ? 0 : -1} 
        role="menuitem"
      >
        About
      </a>
      </li>
      <li>
      <a
        className="nav"
        onClick={() => scrollToTarget('projects')}
        onKeyDown={(e) => {
          if (e.key === 'Enter') {
            scrollToTarget('projects');
          }
        }}
        tabIndex={showMenu ? 0 : -1}
        role="menuitem"
      >
        Projects
      </a>
      </li>
      <li>
      <a
        className="nav"
        onClick={() => scrollToTarget('resume')}
        onKeyDown={(e) => {
          if (e.key === 'Enter') {
            scrollToTarget('resume');
          }
        }}
        tabIndex={showMenu ? 0 : -1}
        role="menuitem"
      >
        Resume
      </a>
      </li>
      <li>
      <a
        className="nav"
        onClick={() => scrollToTarget('contact')}
        onKeyDown={(e) => {
          if (e.key === 'Enter') {
            scrollToTarget('contact');
          }
        }}
        tabIndex={showMenu ? 0 : -1}
        role="menuitem"
      >
        Contact
      </a>
      </li>
      </ul>
    </nav>
  );
};

export default Nav;