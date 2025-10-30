import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

const CustomCursor = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);
  const [isClicking, setIsClicking] = useState(false);

  useEffect(() => {
    const updatePosition = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };

    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (
        target.tagName === 'A' ||
        target.tagName === 'BUTTON' ||
        target.closest('a') ||
        target.closest('button') ||
        target.classList.contains('cursor-hover')
      ) {
        setIsHovering(true);
      } else {
        setIsHovering(false);
      }
    };

    const handleMouseDown = () => setIsClicking(true);
    const handleMouseUp = () => setIsClicking(false);

    window.addEventListener('mousemove', updatePosition);
    window.addEventListener('mouseover', handleMouseOver);
    window.addEventListener('mousedown', handleMouseDown);
    window.addEventListener('mouseup', handleMouseUp);

    return () => {
      window.removeEventListener('mousemove', updatePosition);
      window.removeEventListener('mouseover', handleMouseOver);
      window.removeEventListener('mousedown', handleMouseDown);
      window.removeEventListener('mouseup', handleMouseUp);
    };
  }, []);

  return (
    <>
      {/* Outer cursor - diamond/arrow shape */}
      <motion.div
        className="fixed top-0 left-0 pointer-events-none z-[9999] mix-blend-difference"
        animate={{
          x: position.x - 20,
          y: position.y - 20,
          scale: isClicking ? 0.8 : isHovering ? 1.5 : 1,
          rotate: isHovering ? 45 : 0,
        }}
        transition={{
          type: 'spring',
          stiffness: 500,
          damping: 28,
          mass: 0.5,
        }}
      >
        <div 
          className={`w-10 h-10 border-2 rounded-sm transition-all duration-300 ${
            isHovering 
              ? 'border-accent bg-accent/20' 
              : 'border-white'
          }`}
          style={{
            boxShadow: isHovering 
              ? '0 0 20px hsl(var(--glow-cyan)), 0 0 40px hsl(var(--glow-cyan) / 0.5)' 
              : 'none',
          }}
        />
      </motion.div>

      {/* Inner cursor - small dot */}
      <motion.div
        className="fixed top-0 left-0 w-2 h-2 bg-accent rounded-full pointer-events-none z-[9999] mix-blend-difference"
        animate={{
          x: position.x - 4,
          y: position.y - 4,
          scale: isClicking ? 0.5 : 1,
        }}
        transition={{
          type: 'spring',
          stiffness: 1000,
          damping: 40,
        }}
        style={{
          boxShadow: '0 0 10px hsl(var(--glow-cyan))',
        }}
      />
    </>
  );
};

export default CustomCursor;
