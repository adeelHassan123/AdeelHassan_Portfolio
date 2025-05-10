import React, { useState, useEffect } from 'react';
// eslint-disable-next-line no-unused-vars
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronUp } from 'lucide-react';
import './ScrollToTop.css';

const ScrollToTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  // Show button when scrolling down 300px
  const toggleVisibility = () => {
    if (window.scrollY > 300) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  // Scroll to top function
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  useEffect(() => {
    window.addEventListener('scroll', toggleVisibility);
    return () => {
      window.removeEventListener('scroll', toggleVisibility);
    };
  }, []);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.button
          className="scroll-to-top"
          onClick={scrollToTop}
          aria-label="Scroll to top"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 20 }}
          whileHover={{ 
            scale: 1.1,
            boxShadow: '0 0 20px rgba(0, 255, 255, 0.7)'
          }}
          whileTap={{ scale: 0.9 }}
        >
          <ChevronUp size={24} />
        </motion.button>
      )}
    </AnimatePresence>
  );
};

export default ScrollToTop; 