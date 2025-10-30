import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

const Footer = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <footer ref={ref} className="py-12 px-6 border-t border-border">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center space-y-4"
        >
          <div className="font-poppins font-bold text-2xl">
            Qasim<span className="text-accent">.</span>
          </div>
          <p className="text-muted-foreground font-inter">
            Designed & Developed by <span className="text-accent">Qasim Ali</span>
          </p>
          <p className="text-sm text-muted-foreground/60">
            © {new Date().getFullYear()} All rights reserved.
          </p>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
