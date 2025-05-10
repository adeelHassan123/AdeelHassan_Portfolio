import React from 'react';
// eslint-disable-next-line no-unused-vars
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Github, ExternalLink } from 'lucide-react';
import './Projects.css';

const Projects = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  const projects = [
    {
      title: 'Deep Learning Framework for MNIST (C++)',
      description: 'Developed a custom deep learning framework in C++ for the MNIST dataset, achieving 84.1% accuracy. Includes tensor manipulation, dynamic architecture with linked lists and stacks, backpropagation with cross-entropy loss, and OpenCV visualization.',
      image: '/Predict1.png',
      technologies: ['C++', 'OpenCV', 'MNIST'],
      github: 'https://github.com/adeelHassan123/Tencor.git',
      demo: ''
    },
    {
      title: 'UniVibe - Society Management Web App',
      description: 'A MERN stack web application allowing university students to explore, enroll in, and manage society memberships with role-based access control and secure JWT-based authentication.',
      image: '/Univibe.png',
      technologies: ['MongoDB', 'Express', 'React', 'Node.js', 'JWT'],
      github: 'https://github.com/adeelHassan123/UniVibe-1.git',
      demo: ''
    },
    {
      title: 'Islamic Mobile App (Java)',
      description: 'An Islamic Android app developed in Java featuring Qibla direction, prayer times with alarms, Quranic verses, and an Islamic calendar.',
      image: '/IslamicApp.png',
      technologies: ['Java', 'Android Studio'],
      github: 'https://github.com/adeelHassan123/islamic-app',
      demo: ''
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: { 
        staggerChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: { 
      y: 0, 
      opacity: 1,
      transition: { duration: 0.6 }
    }
  };

  return (
    <section id="projects" className="projects">
      <motion.div 
        className="section-title"
        initial={{ opacity: 0, y: 20 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6 }}
        ref={ref}
      >
        <h2>Featured Projects</h2>
        <div className="title-bar"></div>
      </motion.div>

      <motion.div 
        className="projects-grid"
        variants={containerVariants}
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
      >
        {projects.map((project, index) => (
          <motion.div 
            key={index} 
            className="project-card"
            variants={itemVariants}
            whileHover={{ 
              y: -10,
              transition: { duration: 0.3 }
            }}
          >
            <div className="project-image">
              <img src={project.image} alt={project.title} />
            </div>
            <div className="project-content">
              <h3>{project.title}</h3>
              <p>{project.description}</p>
              <div className="project-tech">
                {project.technologies.map((tech, techIndex) => (
                  <span key={techIndex} className="tech-tag">{tech}</span>
                ))}
              </div>
              <div className="project-links">
                <a 
                  href={project.github} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="project-link github-link"
                >
                  <Github size={20} />
                  <span>View Code</span>
                </a>
                {project.demo && (
                  <a 
                    href={project.demo} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="project-link demo-link"
                  >
                    <ExternalLink size={20} />
                    <span>Live Demo</span>
                  </a>
                )}
              </div>
            </div>
          </motion.div>
        ))}
      </motion.div>

      <motion.div 
        className="projects-cta"
        initial={{ opacity: 0, y: 20 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6, delay: 0.6 }}
      >
        <a 
          href="https://github.com/adeelHassan123/" 
          target="_blank" 
          rel="noopener noreferrer" 
          className="btn btn-secondary"
        >
          <Github size={18} />
          View More on GitHub
        </a>
      </motion.div>
    </section>
  );
};

export default Projects;