import { motion, useScroll, useTransform, useInView } from 'framer-motion';
import { useRef } from 'react';

const steps = [
  {
    number: '01',
    title: 'Discover & Direction',
    description: 'We start by mapping your goals, users, and KPIs. Strategy shapes the structure; ideas come after we understand the problem.',
  },
  {
    number: '02',
    title: 'Structure & Flow',
    description: 'We create layout systems and flows that drive users toward outcomes — clear hierarchies, predictable patterns, no noise.',
  },
  {
    number: '03',
    title: 'Design & Iterate',
    description: 'Design works best with feedback loops. I iterate in short cycles, test assumptions, and refine until interactions feel obvious.',
  },
  {
    number: '04',
    title: 'Ship & Support',
    description: 'Final assets and production build — handoff with documentation or direct Framer deliverables. The result is maintained and measurable.',
  },
];

const ProcessSection = () => {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: '-100px' });
  
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start end', 'end start'],
  });

  // Scale down the central statement as user scrolls
  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [1.06, 1, 0.7]);
  const opacity = useTransform(scrollYProgress, [0, 0.3, 1], [0.6, 1, 0.8]);

  return (
    <section ref={sectionRef} className="relative py-32 px-6 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        {/* Small Title */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-xs font-mono tracking-widest text-[hsl(var(--lime))] uppercase">
            Process
          </span>
        </motion.div>

        {/* Central Large Statement - Scales on Scroll */}
        <motion.div
          style={{ scale, opacity }}
          className="text-center mb-32 sticky top-1/3 z-0"
        >
          <h2 
            className="text-5xl md:text-7xl font-bold leading-tight text-[hsl(var(--text))]"
            style={{ fontFamily: 'Satoshi, sans-serif' }}
          >
            Every project follows a{' '}
            <span className="text-[hsl(var(--lime))] text-glow">thoughtful process</span>.
          </h2>
        </motion.div>

        {/* Steps - Enter from Right */}
        <div className="relative z-10 space-y-24">
          {steps.map((step, index) => (
            <motion.div
              key={step.number}
              initial={{ opacity: 0, x: 120 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ 
                duration: 0.6, 
                delay: 0.4 + index * 0.15,
                ease: [0.22, 0.9, 0.3, 1],
              }}
              className="relative group"
            >
              <div className="flex items-start gap-8 max-w-4xl mx-auto">
                {/* Number Badge */}
                <div className="flex-shrink-0">
                  <motion.div
                    whileInView={{ 
                      translateY: [-6, 0],
                      boxShadow: [
                        '0 0 0px hsl(var(--lime) / 0)',
                        '0 0 20px hsl(var(--lime) / 0.3)',
                      ],
                    }}
                    transition={{ duration: 0.42 }}
                    className="w-16 h-16 rounded-2xl border-2 border-[hsl(var(--lime)/0.3)] bg-[hsl(var(--card))] flex items-center justify-center"
                  >
                    <span className="text-2xl font-bold font-mono text-[hsl(var(--lime))]">
                      {step.number}
                    </span>
                  </motion.div>
                </div>

                {/* Content Card */}
                <motion.div
                  whileInView={{ translateY: -6 }}
                  transition={{ duration: 0.42 }}
                  className="flex-1 p-8 rounded-2xl border border-[hsl(var(--lime)/0.15)] bg-[hsl(var(--card)/0.5)] backdrop-blur-sm group-hover:border-[hsl(var(--lime)/0.4)] transition-all duration-420 shine-sweep cursor-hover"
                >
                  <h3 className="text-2xl font-semibold mb-3 text-[hsl(var(--text))] group-hover:text-[hsl(var(--lime))] transition-colors duration-320">
                    {step.title}
                  </h3>
                  <p className="text-[hsl(var(--muted))] leading-relaxed">
                    {step.description}
                  </p>
                </motion.div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProcessSection;
