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
          className="about-text"
          initial={{ opacity: 0, x: 50 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <p>
            I am Adeel Hassan, a Computer Science student at NUST Islamabad with a specialization in Artificial Intelligence and Machine Learning. My expertise lies in developing innovative AI-driven solutions and scalable web applications, aligning with industry standards for performance and reliability.
          </p>
          <p>
            As a proficient MERN Stack Developer, I design and implement robust full-stack solutions, ensuring seamless integration of frontend interfaces and backend systems. My work emphasizes clean architecture, optimized databases, and responsive design to meet the demands of modern tech enterprises.
          </p>
          <p>
            With a strong foundation in algorithms, data structures, and machine learning frameworks, I excel at solving complex technical challenges. I actively contribute to open-source projects and stay updated with cutting-edge research to deliver high-impact, future-ready solutions.
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
                <h4>AI & Machine Learning</h4>
                <p>Designing and deploying advanced AI models</p>
              </div>
            </motion.div>

            <motion.div className="highlight-item" variants={itemVariants}>
              <div className="highlight-icon">
                <Code2 size={24} />
              </div>
              <div className="highlight-text">
                <h4>Full Stack Development</h4>
                <p>End-to-end web application development</p>
              </div>
            </motion.div>

            <motion.div className="highlight-item" variants={itemVariants}>
              <div className="highlight-icon">
                <Database size={24} />
              </div>
              <div className="highlight-text">
                <h4>Database Optimization</h4>
                <p>Efficient data management and querying</p>
              </div>
            </motion.div>

            <motion.div className="highlight-item" variants={itemVariants}>
              <div className="highlight-icon">
                <Search size={24} />
              </div>
              <div className="highlight-text">
                <h4>Problem Solving</h4>
                <p>Addressing complex technical challenges</p>
              </div>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;