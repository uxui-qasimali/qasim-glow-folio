import { useState } from 'react';
import { motion } from 'framer-motion';
import { ChevronDown } from 'lucide-react';
import profileHero from '@/assets/profile-hero.jpg';

const HeroSection = () => {
  const [showBackground, setShowBackground] = useState(false);

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Animated Background Image */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: showBackground ? 0.35 : 0 }}
        transition={{ duration: 0.8 }}
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: `url(${profileHero})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          filter: showBackground ? 'blur(5px)' : 'blur(0px)',
        }}
      />

      {/* Floating Particles */}
      <div className="absolute inset-0 z-0">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-accent rounded-full"
            initial={{
              x: Math.random() * window.innerWidth,
              y: Math.random() * window.innerHeight,
            }}
            animate={{
              y: [0, -30, 0],
              opacity: [0.2, 0.8, 0.2],
            }}
            transition={{
              duration: 3 + Math.random() * 2,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
          />
        ))}
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-6 max-w-5xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-xl md:text-2xl font-inter text-muted-foreground mb-4"
        >
          Hi, I'm Qasim Ali
        </motion.h2>

        <motion.h1
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          onMouseEnter={() => setShowBackground(true)}
          onMouseLeave={() => setShowBackground(false)}
          className="text-5xl md:text-7xl lg:text-8xl font-poppins font-bold text-foreground mb-6 cursor-hover transition-all duration-300"
        >
          <span className="text-glow hover:scale-105 inline-block transition-transform">
            UX/UI Designer
          </span>
        </motion.h1>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-xl md:text-2xl font-inter text-muted-foreground mb-12 h-8"
        >
          <span className="inline-block">Crafting modern web experiences</span>
        </motion.div>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="flex flex-col sm:flex-row gap-6 justify-center items-center"
        >
          <button
            onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
            className="relative px-8 py-4 bg-accent text-background font-poppins font-semibold rounded-lg overflow-hidden group cursor-hover shine-effect transition-all duration-300 hover:scale-105 glow-effect"
            onMouseEnter={() => setShowBackground(true)}
            onMouseLeave={() => setShowBackground(false)}
          >
            <span className="relative z-10">View My Work</span>
          </button>

          <button
            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            className="relative px-8 py-4 border-2 border-accent text-accent font-poppins font-semibold rounded-lg overflow-hidden group cursor-hover transition-all duration-500 hover:bg-accent hover:text-background hover:scale-105"
            onMouseEnter={() => setShowBackground(true)}
            onMouseLeave={() => setShowBackground(false)}
          >
            <span className="relative z-10">Get In Touch</span>
          </button>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 cursor-hover"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="flex flex-col items-center gap-2"
        >
          <span className="text-muted-foreground text-sm font-inter">Scroll</span>
          <ChevronDown className="w-6 h-6 text-accent" />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default HeroSection;
