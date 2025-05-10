import React from 'react';
// eslint-disable-next-line no-unused-vars
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Code2, Brain, Database, Search } from 'lucide-react';
import './About.css';

const About = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: { 
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { 
      y: 0, 
      opacity: 1,
      transition: { duration: 0.6 }
    }
  };

  return (
    <section id="about" className="about">
      <motion.div
        className="section-title"
        initial={{ opacity: 0, y: 20 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6 }}
        ref={ref}
      >
        <h2>About Me</h2>
        <div className="title-bar"></div>
      </motion.div>

      <div className="about-content">
        <motion.div
          className="about-image"
          initial={{ opacity: 0, x: -50 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <div className="profile-picture">
            <img src="/src/assets/Profile_Pic.jpg" alt="Adeel Hassan" />
          </div>
        </motion.div>

        <motion.div
          className="about-text"
          initial={{ opacity: 0, x: 50 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          
          <p>
            Hi, I'm Adeel Hassan — a Computer Science student at NUST Islamabad,
            deeply interested in Deep Learning and Machine Learning. I’m driven
            by the idea of turning complex concepts into real-world applications
            that solve meaningful problems.
          </p>
          <p>
            I also work as a MERN Stack Developer, building scalable, efficient
            web apps with clean and responsive designs. I enjoy working across
            the full stack, from crafting intuitive frontends to managing
            backend logic and databases. 
          </p>
          <p>
          With a solid grip on algorithms, data
            structures, and ML fundamentals, I love diving into challenging
            problems and finding smart, practical solutions. Outside of coding,
            you’ll usually find me reading research papers, contributing to
            open-source projects, or just experimenting with new ideas.
          </p>

          <motion.div
            className="highlights"
            variants={containerVariants}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
          >
            

            <motion.div className="highlight-item" variants={itemVariants}>
              <div className="highlight-icon">
                <Brain size={24} />
              </div>
              <div className="highlight-text">
                <h4>Deep Learning & Machine Learning</h4>
                <p>Creating intelligent AI systems and training models</p>
              </div>
            </motion.div>

            <motion.div className="highlight-item" variants={itemVariants}>
              <div className="highlight-icon">
                <Code2 size={24} />
              </div>
              <div className="highlight-text">
                <h4>Full Stack Development</h4>
                <p>Building robust and scalable Websites and Web-applications</p>
              </div>
            </motion.div>

            <motion.div className="highlight-item" variants={itemVariants}>
              <div className="highlight-icon">
                <Database size={24} />
              </div>
              <div className="highlight-text">
                <h4>Data Base Management</h4>
                <p>Managing and storing data efficiently</p>
              </div>
            </motion.div>

            <motion.div className="highlight-item" variants={itemVariants}>
              <div className="highlight-icon">
                <Search size={24} />
              </div>
              <div className="highlight-text">
                <h4>Problem Solving</h4>
                <p>Exploring and solving cutting-edge CS technologies</p>
              </div>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default About; 