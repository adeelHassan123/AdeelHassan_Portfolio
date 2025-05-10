import React from 'react';
// eslint-disable-next-line no-unused-vars
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { BookOpen, Award, Calendar } from 'lucide-react';
import './Education.css';

const Education = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  const educationList = [
    {
      degree: 'Bachelor of Science in Computer Science',
      institution: 'National University of Sciences and Technology (NUST)',
      period: '2023 - 2027',
      description: 'Focused on Deep learning, Machine Learning, and Web Development with a minor in data management.',
      achievements: [
        'CGPA: 3.24'
      ]
    },
    {
      degree: 'HSSC',
      institution: 'Punjab College of Sciences',
      description: 'Completed Higher Secondary School with distinction',
      achievements: [
        'Marks Percentage: 94.18%',
        'Best Student Award for Excellence',
      ]
    },
    {
      degree: 'SSC',
      institution: 'Bahria Foundation College and School Systems',
      description: 'Completed Secondary School with distinction',
      achievements: [
        'Marks Percentage: 94.36%',
        'Kangaroo Contest Award Holder'
      ]
    }

  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: { 
        staggerChildren: 0.4
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.6 }
    }
  };

  return (
    <section id="education" className="education">
      <motion.div 
        className="section-title"
        initial={{ opacity: 0, y: 20 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6 }}
        ref={ref}
      >
        <h2>Education</h2>
        <div className="title-bar"></div>
      </motion.div>

      <motion.div 
        className="education-timeline"
        variants={containerVariants}
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
      >
        {educationList.map((item, index) => (
          <motion.div 
            key={index} 
            className={`timeline-item ${index % 2 === 0 ? 'left' : 'right'}`}
            variants={itemVariants}
          >
            <div className="timeline-content">
              <div className="timeline-icon">
                <BookOpen size={24} />
              </div>
              
              <h3>{item.degree}</h3>
              <h4>{item.institution}</h4>
              <p>{item.description}</p>
              
              {item.achievements && (
                <div className="achievements">
                  <h5>Achievements:</h5>
                  <ul>
                    {item.achievements.map((achievement, i) => (
                      <li key={i}>
                        <Award size={14} />
                        <span>{achievement}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
};

export default Education; 