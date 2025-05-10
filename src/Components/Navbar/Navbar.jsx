import React, { useState, useEffect } from 'react';
// eslint-disable-next-line no-unused-vars
import { motion } from 'framer-motion';
import { Menu, X, Code } from 'lucide-react';
import './Navbar.css';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY;
      if (offset > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <motion.nav 
      className={`navbar ${scrolled ? 'scrolled' : ''}`}
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="navbar-container">
        <motion.div 
          className="logo"
          whileHover={{ scale: 1.05 }}
        >
          <Code size={24} className="logo-icon" />
          <span>Adeel Hassan</span>
        </motion.div>

        <div className="menu-button">
          <button onClick={toggleMenu}>
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        <div className={`nav-links ${isOpen ? 'active' : ''}`}>
          <ul>
            <motion.li whileHover={{ scale: 1.1 }}>
              <a href="#home" onClick={closeMenu}>Home</a>
            </motion.li>
            <motion.li whileHover={{ scale: 1.1 }}>
              <a href="#about" onClick={closeMenu}>About</a>
            </motion.li>
            <motion.li whileHover={{ scale: 1.1 }}>
              <a href="#skills" onClick={closeMenu}>Skills</a>
            </motion.li>
            <motion.li whileHover={{ scale: 1.1 }}>
              <a href="#projects" onClick={closeMenu}>Projects</a>
            </motion.li>
          
            <motion.li whileHover={{ scale: 1.1 }}>
              <a href="#certifications" onClick={closeMenu}>Certifications</a>
            </motion.li>
            <motion.li whileHover={{ scale: 1.1 }}>
              <a href="#education" onClick={closeMenu}>Education</a>
            </motion.li>
            <motion.li whileHover={{ scale: 1.1 }}>
              <a href="#contact" onClick={closeMenu}>Contact</a>
            </motion.li>
          </ul>
        </div>
      </div>
    </motion.nav>
  );
};

export default Navbar; 