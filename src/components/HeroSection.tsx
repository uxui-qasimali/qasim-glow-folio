import { useState } from 'react';
import { motion } from 'framer-motion';
import { ChevronDown } from 'lucide-react';
import profileHero from '@/assets/profile-hero.jpg';
import { Button } from './ui/button';

const HeroSection = () => {
  const [showBackground, setShowBackground] = useState(false);

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden noise-texture">
      {/* Base Background */}
      <div className="absolute inset-0 bg-[hsl(var(--bg-1))] z-0" />
      
      {/* Radial Lime Glow */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.2, repeat: Infinity, repeatType: 'reverse' }}
        className="absolute top-1/4 right-1/4 w-[600px] h-[600px] rounded-full z-0"
        style={{
          background: 'radial-gradient(circle, hsl(var(--lime) / 0.08) 0%, transparent 70%)',
          filter: 'blur(80px)',
        }}
      />

      {/* Faint Background Text */}
      <div className="absolute inset-0 flex items-center justify-center z-0 overflow-hidden">
        <div 
          className="text-[20vw] font-bold text-[hsl(var(--text)/0.02)] select-none pointer-events-none"
          style={{ fontFamily: 'Satoshi, sans-serif' }}
        >
          UX/UI DESIGNER
        </div>
      </div>

      {/* Portrait Image Reveal Layer */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: showBackground ? 0.35 : 0 }}
        transition={{ duration: 0.8 }}
        className="absolute inset-0 z-[1]"
        style={{
          backgroundImage: `url(${profileHero})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          filter: showBackground ? 'blur(6px)' : 'blur(20px)',
          transform: showBackground ? 'scale(1.02)' : 'scale(1)',
        }}
      />
      
      {/* Dark overlay when image is visible */}
      {showBackground && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.12 }}
          transition={{ duration: 0.8 }}
          className="absolute inset-0 bg-black z-[2]"
        />
      )}

      {/* Content Grid */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 w-full grid md:grid-cols-2 gap-12 items-center">
        {/* Left: Giant Display Name */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.32, delay: 0.2 }}
          onMouseEnter={() => setShowBackground(true)}
          onMouseLeave={() => setShowBackground(false)}
          className="cursor-hover"
        >
          <motion.h1
            className="font-bold leading-[0.85] tracking-tight text-[hsl(var(--text))]"
            style={{ 
              fontSize: 'clamp(3rem, 12vw, 10rem)',
              fontFamily: 'Satoshi, sans-serif',
              fontWeight: 700,
            }}
            animate={{
              scale: showBackground ? 1.02 : 1,
            }}
            transition={{ duration: 0.22 }}
          >
            QASIM
            {showBackground && (
              <motion.span
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="absolute inset-0 pointer-events-none"
                style={{
                  textShadow: '0 0 2px hsl(var(--lime) / 0.4), inset 0 0 20px hsl(var(--lime) / 0.2)',
                }}
              />
            )}
          </motion.h1>
        </motion.div>

        {/* Right: Intro Content */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.42, delay: 0.3 }}
          className="space-y-6"
        >
          {/* Availability Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.42, delay: 0.4 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-[hsl(var(--lime)/0.2)] bg-[hsl(var(--lime)/0.06)] backdrop-blur-sm"
          >
            <motion.div
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="w-2 h-2 rounded-full bg-[hsl(var(--lime))]"
              style={{
                boxShadow: '0 0 8px hsl(var(--lime) / 0.8)',
              }}
            />
            <span className="text-sm font-mono text-[hsl(var(--text))]">Available for projects</span>
          </motion.div>

          {/* Headline */}
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.42, delay: 0.5 }}
            className="text-4xl md:text-5xl font-semibold leading-tight text-[hsl(var(--text))]"
            style={{ fontFamily: 'Satoshi, sans-serif' }}
          >
            I design clear,{' '}
            <span className="text-[hsl(var(--lime))] text-glow">
              conversion-minded
            </span>{' '}
            interfaces.
          </motion.h2>

          {/* Subheading */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.42, delay: 0.6 }}
            className="text-lg text-[hsl(var(--muted))] leading-relaxed"
          >
            Product and landing page design — strategy first, visuals second.
          </motion.p>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.42, delay: 0.7 }}
            className="flex flex-wrap gap-4 pt-4"
          >
            <Button
              variant="default"
              size="lg"
              onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
              onMouseEnter={() => setShowBackground(true)}
              onMouseLeave={() => setShowBackground(false)}
              className="cursor-hover shine-sweep"
            >
              View Work
            </Button>
            <Button
              variant="outline"
              size="lg"
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              onMouseEnter={() => setShowBackground(true)}
              onMouseLeave={() => setShowBackground(false)}
              className="cursor-hover"
            >
              Let's Talk
            </Button>
          </motion.div>
        </motion.div>
      </div>

      {/* Small Laptop Preview - Bottom Left */}
      <motion.div
        initial={{ opacity: 0, y: 40, rotate: 0 }}
        animate={{ opacity: 1, y: 0, rotate: -8 }}
        transition={{ duration: 0.8, delay: 1 }}
        className="absolute bottom-12 left-12 w-64 h-40 rounded-xl border border-[hsl(var(--lime)/0.2)] bg-[hsl(var(--card))] overflow-hidden cursor-hover hidden lg:block"
        style={{
          boxShadow: '0 18px 44px rgba(0,0,0,0.6), 0 0 18px hsl(var(--lime) / 0.1)',
        }}
        whileHover={{ scale: 1.05, translateY: -6 }}
      >
        <div className="w-full h-full bg-gradient-to-br from-[hsl(var(--bg-2))] to-[hsl(var(--card))] flex items-center justify-center">
          <span className="text-xs text-[hsl(var(--muted))] font-mono">Project Preview</span>
        </div>
      </motion.div>

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
          <span className="text-[hsl(var(--muted))] text-xs font-mono">Scroll</span>
          <ChevronDown className="w-5 h-5 text-[hsl(var(--lime))]" />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default HeroSection;
