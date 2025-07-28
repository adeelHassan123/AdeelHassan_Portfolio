import React from 'react';
import { useForm, ValidationError } from '@formspree/react';
// eslint-disable-next-line no-unused-vars
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Mail, Phone, Linkedin, Github, Send } from 'lucide-react';
import './Contact.css';

const Contact = () => {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });

  const [state, handleSubmit] = useForm("xyzpjegq"); // Replace with your actual Formspree ID

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: { staggerChildren: 0.2 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };

  return (
    <section id="contact" className="contact">
      <motion.div 
        className="section-title"
        initial={{ opacity: 0, y: 20 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6 }}
        ref={ref}
      >
        <h2>Contact Me</h2>
        <div className="title-bar"></div>
      </motion.div>

      <div className="contact-container">
        <motion.div 
          className="contact-info"
          initial={{ opacity: 0, x: -50 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <h3>Let's Connect</h3>
          <p>
            Whether you have a question, project idea, or just want to say hi, 
            feel free to reach out. I'm always open to discussing new projects, 
            creative ideas, or opportunities to be part of your vision.
          </p>

          <motion.div 
            className="contact-methods"
            variants={containerVariants}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
          >
            <motion.div className="contact-method" variants={itemVariants}>
              <div className="contact-icon"><Mail size={24} /></div>
              <div className="contact-details">
                <h4>Email</h4>
                <a href="mailto:adeel.hassan2k20@gmail.com">adeel.hassan2k20@gmail.com</a>
              </div>
            </motion.div>

            <motion.div className="contact-method" variants={itemVariants}>
              <div className="contact-icon"><Phone size={24} /></div>
              <div className="contact-details">
                <h4>Phone</h4>
                <a href="tel:+923125479934">+92 312 5479934</a>
              </div>
            </motion.div>

            <motion.div className="contact-method" variants={itemVariants}>
              <div className="contact-icon"><Linkedin size={24} /></div>
              <div className="contact-details">
                <h4>LinkedIn</h4>
                <a href="https://www.linkedin.com/in/adeelhassancs/" target="_blank" rel="noopener noreferrer">
                  linkedin.com/in/adeelhassancs
                </a>
              </div>
            </motion.div>

            <motion.div className="contact-method" variants={itemVariants}>
              <div className="contact-icon"><Github size={24} /></div>
              <div className="contact-details">
                <h4>GitHub</h4>
                <a href="https://github.com/adeelHassan123/" target="_blank" rel="noopener noreferrer">
                  github.com/adeelHassan123
                </a>
              </div>
            </motion.div>
          </motion.div>
        </motion.div>

        <motion.div 
          className="contact-form-container"
          initial={{ opacity: 0, x: 50 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          {state.succeeded ? (
            <p className="form-feedback success">Thank you for your message! I’ll get back to you soon.</p>
          ) : (
            <form className="contact-form" onSubmit={handleSubmit}>
              <div className="form-group">
                <label htmlFor="name">Name</label>
                <input id="name" type="text" name="name" required />
              </div>

              <div className="form-group">
                <label htmlFor="email">Email</label>
                <input id="email" type="email" name="email" required />
                <ValidationError prefix="Email" field="email" errors={state.errors} />
              </div>

              <div className="form-group">
                <label htmlFor="message">Message</label>
                <textarea id="message" name="message" rows="5" required />
                <ValidationError prefix="Message" field="message" errors={state.errors} />
              </div>

              <button type="submit" className="submit-button" disabled={state.submitting}>
                <Send size={18} /> Send Message
              </button>
            </form>
          )}
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
