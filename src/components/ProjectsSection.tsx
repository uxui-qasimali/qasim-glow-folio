import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { ExternalLink } from 'lucide-react';

const projects = [
  {
    title: 'E-Commerce Platform',
    description: 'Modern shopping experience with seamless checkout flow',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&q=80',
  },
  {
    title: 'Banking Dashboard',
    description: 'Intuitive financial management interface',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80',
  },
  {
    title: 'Healthcare App',
    description: 'Patient-centered medical appointment system',
    image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=800&q=80',
  },
  {
    title: 'Travel Booking',
    description: 'Simplified vacation planning experience',
    image: 'https://images.unsplash.com/photo-1488085061387-422e29b40080?w=800&q=80',
  },
  {
    title: 'Food Delivery',
    description: 'Quick and easy meal ordering interface',
    image: 'https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=800&q=80',
  },
  {
    title: 'Fitness Tracker',
    description: 'Motivating health and wellness dashboard',
    image: 'https://images.unsplash.com/photo-1517836357463-d25dfeac3438?w=800&q=80',
  },
];

const ProjectsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="projects" ref={ref} className="min-h-screen py-20 px-6">
      <div className="max-w-7xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-5xl md:text-6xl font-poppins font-bold text-center mb-4"
        >
          Featured <span className="text-accent">Projects</span>
        </motion.h2>

        <motion.div
          initial={{ opacity: 0, scaleX: 0 }}
          animate={isInView ? { opacity: 1, scaleX: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="w-24 h-1 bg-accent mx-auto mb-16"
        />

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.4 + index * 0.1 }}
              whileHover={{
                y: -10,
                rotateX: 5,
                rotateY: 5,
              }}
              className="group relative bg-secondary/30 backdrop-blur-sm rounded-2xl overflow-hidden border border-border cursor-hover shine-effect hover:border-accent transition-all duration-500"
            >
              {/* Project Image */}
              <div className="relative h-64 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/90 to-transparent" />
              </div>

              {/* Content */}
              <div className="p-6 relative">
                <h3 className="text-2xl font-poppins font-semibold text-foreground mb-2 group-hover:text-accent transition-colors">
                  {project.title}
                </h3>
                <p className="text-muted-foreground font-inter mb-4">
                  {project.description}
                </p>

                {/* View Case Study Button */}
                <button className="flex items-center gap-2 text-accent font-poppins font-medium group/btn cursor-hover">
                  View Case Study
                  <ExternalLink className="w-4 h-4 transition-transform group-hover/btn:translate-x-1 group-hover/btn:-translate-y-1" />
                </button>
              </div>

              {/* Glow Effect on Hover */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none">
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-accent/10 to-transparent" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
