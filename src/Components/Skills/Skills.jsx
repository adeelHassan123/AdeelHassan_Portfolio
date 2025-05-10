import React from 'react';
// eslint-disable-next-line no-unused-vars
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Brain, Code2, Database, Wrench } from 'lucide-react';
import './Skills.css';

const Skills = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  const skillCategories = [
    {
      title: "ML/DL",
      icon: <Brain size={24} />,
      skills: ["TensorFlow", "PyTorch", "Keras", "Scikit-learn"],
      color: "var(--neon-green)"
    },
    {
      title: "Web Development",
      icon: <Code2 size={24} />,
      skills: ["MERN Stack","Next.js" ,  "Supabase", "Firebase"],
      color: "var(--electric-blue)"
    },
    {
      title: "Languages",
      icon: <Database size={24} />,
      skills: ["C/C++", "Java", "Python", "HTML/CSS/JavaScript"],
      color: "var(--vibrant-orange)"
    },
    {
      title: "Tools",
      icon: <Wrench size={24} />,
      skills: ["Git", "VS Code" , "Postman", "Vercel", "Jupyter Notebook"],
      color: "#ff55a3"
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
    hidden: { y: 20, opacity: 0 },
    visible: { 
      y: 0, 
      opacity: 1,
      transition: { duration: 0.6 }
    }
  };

  return (
    <section id="skills" className="skills">
      <motion.div 
        className="section-title"
        initial={{ opacity: 0, y: 20 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6 }}
        ref={ref}
      >
        <h2>My Skills</h2>
        <div className="title-bar"></div>
      </motion.div>

      <motion.div 
        className="skills-container"
        variants={containerVariants}
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
      >
        {skillCategories.map((category, idx) => (
          <motion.div 
            key={idx} 
            className="skills-category-card"
            variants={itemVariants}
            whileHover={{ 
              scale: 1.02,
              boxShadow:`0 0 10px ${category.color}`
            }}
          >
            <div className="category-header" style={{ color: category.color }}>
              {category.icon}
              <h3>{category.title}</h3>
            </div>
            <div className="skills-list">
              {category.skills.map((skill, index) => (
                <motion.div 
                  key={index} 
                  className="skill-item"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ 
                    scale: 1.02,
                    backgroundColor: 'rgba(255, 255, 255, 0.08)'
                  }}
                >
                  {skill}
                </motion.div>
              ))}
            </div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
};

export default Skills;
