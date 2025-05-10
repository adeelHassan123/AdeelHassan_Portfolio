import React from 'react';
// eslint-disable-next-line no-unused-vars
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import './Certifications.css';

const Certifications = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  const certifications = [
      {
        title: 'Java Programming',
        issuer: 'Coursera',
        date: '2023',
        description: 'Learned Java fundamentals, OOP, and data structures.',
        image: '/src/assets/java.png'
      },
      {
        title: 'Structured Programming',
        issuer: 'Coursera',
        date: '2022',
        description: 'Focused on modular design, functions, and control structures using C programming.',
        image: '/src/assets/Structured.jpeg'
      },
      {
        title: 'Programming Fundamentals',
        issuer: 'Coursera ',
        date: '2022',
        description: 'Built foundational logic in C, including memory management, pointers, and structured programming.',
        image: '/src/assets/C_prof.jpeg'
      },
      {
        title: 'Introduction to C',
        issuer: 'Sololearn',
        date: '2022',
        description: 'Learned the basics of C programming language.',
        image: '/src/assets/IntroC.jpg'
      },
      
      {
        title: 'Frontend Development ',
        issuer: 'HackerRank',
        date: '2023',
        description: 'Built responsive frontends with HTML/CSS.',
        image: '/src/assets/CSS.png'
      },
      {
        title: 'Advanced SQL',
        issuer: 'HackerRank',
        date: '2024',
        description: 'Mastered complex queries, joins, subqueries, indexing, and performance tuning.',
        image: '/src/assets/SQL.png'
      }
];

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
    hidden: { x: -50, opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
      transition: {
        duration: 0.5
      }
    }
  };

  return (
    <section id="certifications" className="certifications">
      <motion.div 
        className="section-title"
        initial={{ opacity: 0, y: 20 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6 }}
        ref={ref}
      >
        <h2>Certifications</h2>
        <div className="title-bar"></div>
      </motion.div>

      <motion.div 
        className="certifications-timeline"
        variants={containerVariants}
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
      >
        {certifications.map((cert, index) => (
          <motion.div 
            key={index} 
            className="certification-item"
            variants={itemVariants}
          >
            <div className="certification-content">
              <div className="certification-header">
                <h3>{cert.title}</h3>
                <span className="certification-date">{cert.date}</span>
              </div>
              <div className="certification-issuer">{cert.issuer}</div>
              <p className="certification-description">{cert.description}</p>
              <div className="certification-image">
                <img src={cert.image} alt={`${cert.title} certificate`} />
              </div>
            </div>
          </motion.div>
        ))}
      </motion.div>
      
      
    </section>
  );
};

export default Certifications; 