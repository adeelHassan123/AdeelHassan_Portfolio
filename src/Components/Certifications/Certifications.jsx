import React from 'react';
// eslint-disable-next-line no-unused-vars
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import './Certifications.css';
import { Send } from "lucide-react";


const Certifications = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

const certifications = [
  {
    title: 'Advanced Learning Algorithms',
    issuer: 'DeepLearning.AI',
    date: '2025',
    description: 'Covered deep neural networks, optimization, and advanced ML techniques.',
    image: '/Advance_ML.jpg',
    credentialId: 'CQDLMD0JZA3X',
    url: 'https://www.coursera.org/account/accomplishments/verify/CQDLMD0JZA3X'
  },
  {
    title: 'JavaScript',
    issuer: 'HackerRank',
    date: '2025',
    description: 'Demonstrated skills in modern JavaScript development.',
    image: '/javascript.png',
    credentialId: '74d9ab99e37d',
    url: 'https://www.hackerrank.com/certificates/74d9ab99e37d'
  },
  {
    title: 'Rest API',
    issuer: 'HackerRank',
    date: '2025',
    description: 'Proven understanding of RESTful APIs and web service integration.',
    image: '/rest api.png',
    credentialId: '40fb299b1b62',
    url: 'https://www.hackerrank.com/certificates/40fb299b1b62'
  },
  {
    title: 'SQL (Advanced)',
    issuer: 'HackerRank',
    date: '2025',
    description: 'Mastered advanced SQL including performance tuning and query optimization.',
    image: '/sql adv.png',
    credentialId: 'a319004307dd',
    url: 'https://www.hackerrank.com/certificates/a319004307dd'
  },
  {
    title: 'Java Programmer',
    issuer: 'HackerRank',
    date: '2025',
    description: 'Certified Java skills including OOP and standard library usage.',
    image: '/java.png',
    credentialId: '6f8d245f2a8b',
    url: 'https://www.hackerrank.com/certificates/6f8d245f2a8b'
  },
  {
    title: 'CSS',
    issuer: 'HackerRank',
    date: '2025',
    description: 'Built responsive frontends using CSS for modern web design.',
    image: '/CSS.png',
    credentialId: 'f872f578984f',
    url: 'https://www.hackerrank.com/certificates/f872f578984f'
  },
  {
    title: 'SQL',
    issuer: 'HackerRank',
    date: '2025',
    description: 'Gained SQL and PL/SQL proficiency for relational databases.',
    image: '/SQL.png',
    credentialId: '52e217470c98',
    url: 'https://www.hackerrank.com/certificates/52e217470c98'
  },
  {
    title: 'Structured Programming',
    issuer: 'University of California, Santa Cruz',
    date: '2023',
    description: 'Focused on modular design, functions, and control structures using C.',
    image: '/structured.jpeg',
    credentialId: 'D2LWN24RND9Y',
    url: 'https://www.coursera.org/account/accomplishments/verify/D2LWN24RND9Y'
  },
  {
    title: 'Programming Fundamentals',
    issuer: 'Duke University',
    date: '2023',
    description: 'Built foundational logic in C, including memory management, pointers, and structured programming.',
    image: '/C_prof.jpeg',
    credentialId: 'KXGEVF74Z8WL',
    url: 'https://www.coursera.org/account/accomplishments/verify/KXGEVF74Z8WL'
  },
  {
    title: 'Introduction to C',
    issuer: 'Sololearn',
    date: '2023',
    description: 'Learned the basics of C programming language.',
    image: '/IntroC.jpg',
    credentialId: 'CC-4MIKZFAS',
    url: 'https://www.sololearn.com/en/certificates/CC-4MIKZFAS'
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
                {cert.url && (
                  <a 
                    href={cert.url} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="btn btn-primary"
                  >
                    <Send /> View Credential
                  </a>
                )}
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