import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Navbar from "./Components/Navbar/Navbar";
import Hero from "./Components/Hero/Hero";
import About from "./Components/About/About";
import Skills from "./Components/Skills/Skills";
import Projects from "./Components/Projects/Projects";
import Education from "./Components/Education/Education";
import Certifications from "./Components/Certifications/Certifications";
import Contact from "./Components/Contact/Contact";
import ScrollToTop from "./Components/ScrollToTop/ScrollToTop";

function App() {
  useEffect(() => {
    AOS.init({ 
      duration: 10,
      once: false,
      mirror: true
    });
  }, []);

  return (
    <div className="App">
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Certifications />
      <Education />
      <Contact />
      <ScrollToTop />
    </div>
  );
}

export default App;