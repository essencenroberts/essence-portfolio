import { useState } from 'react';


export function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  function toggleMenu() {
    setMenuOpen(!menuOpen);
  }

  return (
      <div className="glass-wrapper">
        
        <nav id="desktop-nav">
          <div className="logo">Essence Roberts</div>
          
          <ul className="nav-links">
            <li><a href="#about">About</a></li>
            <li><a href="#experience">Experience</a></li>
            <li><a href="#projects">Projects</a></li>
            <li><a href="#contact">Contact</a></li>  
          </ul>
        </nav>

        <nav id="hamburger-nav">
        
          <div className="hamburger-menu">
            <div className="hamburger-icon" onClick={toggleMenu}> 
              <span></span> 
              <span></span> 
              <span></span> 
            </div>

            <div className={menuOpen ? "menu-links open" : "menu-links"}>
              <li><a href="#about" onClick={toggleMenu}>About</a></li>
              <li><a href="#experience" onClick={toggleMenu}>Experience</a></li>
              <li><a href="#projects" onClick={toggleMenu}>Projects</a></li>
              <li><a href="#contact" onClick={toggleMenu}>Contact</a></li>  
            </div>
          </div>
        </nav>
    </div>  
  );
}

