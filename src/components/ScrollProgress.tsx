import { motion, useScroll } from 'framer-motion';

const ScrollProgress = () => {
  const { scrollYProgress } = useScroll();

  return (
    <motion.div
      className="fixed top-0 left-0 right-0 h-0.5 bg-[hsl(var(--lime))] origin-left z-[100]"
      style={{ 
        scaleX: scrollYProgress,
        boxShadow: '0 0 10px hsl(var(--lime) / 0.6)',
      }}
    />
  );
};

export default ScrollProgress;
