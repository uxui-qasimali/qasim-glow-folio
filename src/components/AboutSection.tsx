import { motion, useInView } from 'framer-motion';
import { useRef, useEffect } from 'react';
import profileAbout from '@/assets/profile-about.jpg';
import VanillaTilt from 'vanilla-tilt';

const skills = [
  { name: 'Figma', icon: '🎨' },
  { name: 'Adobe XD', icon: '✨' },
  { name: 'Webflow', icon: '⚡' },
  { name: 'HTML/CSS', icon: '💻' },
  { name: 'JavaScript', icon: '🚀' },
  { name: 'React', icon: '⚛️' },
];

const AboutSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  const skillCardsRef = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    skillCardsRef.current.forEach((card) => {
      if (card) {
        VanillaTilt.init(card, {
          max: 15,
          speed: 400,
          glare: true,
          'max-glare': 0.3,
        });
      }
    });

    return () => {
      skillCardsRef.current.forEach((card) => {
        if (card && (card as any).vanillaTilt) {
          (card as any).vanillaTilt.destroy();
        }
      });
    };
  }, [isInView]);

  return (
    <section id="about" ref={ref} className="min-h-screen py-20 px-6">
      <div className="max-w-7xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-5xl md:text-6xl font-poppins font-bold text-center mb-4"
        >
          About <span className="text-accent">Me</span>
        </motion.h2>

        <motion.div
          initial={{ opacity: 0, scaleX: 0 }}
          animate={isInView ? { opacity: 1, scaleX: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="w-24 h-1 bg-accent mx-auto mb-16"
        />

        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Image with Parallax */}
          <motion.div
            initial={{ opacity: 0, x: -100 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <motion.div
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
              className="relative rounded-2xl overflow-hidden glow-effect cursor-hover"
            >
              <img
                src={profileAbout}
                alt="Qasim Ali"
                className="w-full h-auto rounded-2xl"
              />
            </motion.div>
          </motion.div>

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: 100 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="space-y-6"
          >
            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed font-inter">
              With <span className="text-accent font-semibold">1.5 years of experience</span> in UX/UI design,
              I focus on crafting interfaces that feel effortless and meaningful.
            </p>
            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed font-inter">
              My approach combines aesthetic beauty with functional design,
              ensuring every pixel serves a purpose and every interaction delights the user.
            </p>

            {/* Skills Grid */}
            <div className="pt-8">
              <h3 className="text-2xl font-poppins font-semibold mb-6 text-accent">Tools & Skills</h3>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                {skills.map((skill, index) => (
                  <motion.div
                    key={skill.name}
                    ref={(el) => (skillCardsRef.current[index] = el)}
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.5, delay: 0.8 + index * 0.1 }}
                    className="bg-secondary/50 backdrop-blur-sm p-4 rounded-xl border border-border cursor-hover shine-effect group hover:border-accent transition-all duration-300"
                  >
                    <div className="text-3xl mb-2">{skill.icon}</div>
                    <p className="font-poppins font-medium text-foreground group-hover:text-accent transition-colors">
                      {skill.name}
                    </p>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>

        {/* Experience Counter */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 1 }}
          className="mt-20 text-center"
        >
          <motion.div
            initial={{ scale: 0 }}
            animate={isInView ? { scale: 1 } : {}}
            transition={{ duration: 0.8, delay: 1.2, type: 'spring' }}
            className="inline-block"
          >
            <div className="text-6xl md:text-8xl font-poppins font-bold text-accent text-glow mb-4">
              1.5+
            </div>
            <p className="text-xl md:text-2xl font-inter text-muted-foreground">
              Years of Experience
            </p>
            <p className="text-lg font-inter text-foreground mt-2">
              Designing intuitive interfaces and delightful user experiences
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;
