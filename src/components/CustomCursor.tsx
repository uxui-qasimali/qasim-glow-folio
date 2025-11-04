import { useEffect, useState, useRef } from 'react';
import { motion } from 'framer-motion';

const CustomCursor = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [targetPosition, setTargetPosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);
  const [isClicking, setIsClicking] = useState(false);
  const [isTouch, setIsTouch] = useState(false);
  const animationFrameId = useRef<number>();

  // Lerp smoothing
  useEffect(() => {
    const lerp = (start: number, end: number, factor: number) => {
      return start + (end - start) * factor;
    };

    const animate = () => {
      setPosition((prev) => ({
        x: lerp(prev.x, targetPosition.x, 0.12),
        y: lerp(prev.y, targetPosition.y, 0.12),
      }));
      animationFrameId.current = requestAnimationFrame(animate);
    };

    animationFrameId.current = requestAnimationFrame(animate);

    return () => {
      if (animationFrameId.current) {
        cancelAnimationFrame(animationFrameId.current);
      }
    };
  }, [targetPosition]);

  useEffect(() => {
    // Check for touch device
    const checkTouch = () => {
      setIsTouch('ontouchstart' in window || navigator.maxTouchPoints > 0);
    };
    checkTouch();

    const updatePosition = (e: MouseEvent) => {
      setTargetPosition({ x: e.clientX, y: e.clientY });
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

  // Hide on touch devices or reduced motion
  if (isTouch) return null;

  return (
    <>
      {/* Capsule Cursor */}
      <motion.div
        className="fixed top-0 left-0 pointer-events-none z-[9999] mix-blend-difference"
        animate={{
          x: position.x - (isHovering ? 35 : 14),
          y: position.y - (isHovering ? 14 : 8),
          width: isHovering ? 70 : 28,
          height: isHovering ? 28 : 16,
          rotate: isHovering ? 0 : 6,
          scale: isClicking ? 0.85 : 1,
        }}
        transition={{
          type: 'spring',
          stiffness: 400,
          damping: 28,
          mass: 0.5,
        }}
      >
        <div 
          className={`w-full h-full rounded-full border transition-all duration-200 ${
            isHovering 
              ? 'border-[hsl(var(--lime))] bg-[hsl(var(--lime)/0.12)]' 
              : 'border-[hsl(var(--lime))] bg-[hsl(var(--lime)/0.06)]'
          }`}
          style={{
            boxShadow: isHovering 
              ? '0 0 18px hsl(var(--lime) / 0.4), 0 0 40px hsl(var(--lime) / 0.2)' 
              : '0 0 10px hsl(var(--lime) / 0.2)',
          }}
        >
          {/* Inner highlight dot */}
          <div 
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-1 h-1 bg-white rounded-full"
            style={{
              boxShadow: '0 0 4px hsl(var(--lime))',
            }}
          />
        </div>
      </motion.div>
    </>
  );
};

export default CustomCursor;
