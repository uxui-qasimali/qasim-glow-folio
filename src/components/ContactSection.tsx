import { motion, useInView } from 'framer-motion';
import { useRef, useState } from 'react';
import { Mail, Linkedin, Instagram, Facebook } from 'lucide-react';
import profileAbout from '@/assets/profile-about.jpg';

const ContactSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  const [hoveredCard, setHoveredCard] = useState(false);

  const socialLinks = [
    { icon: Linkedin, url: '#', label: 'LinkedIn' },
    { icon: Instagram, url: '#', label: 'Instagram' },
    { icon: Facebook, url: '#', label: 'Facebook' },
  ];

  return (
    <section id="contact" ref={ref} className="min-h-screen py-20 px-6 relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          animate={{
            background: [
              'radial-gradient(circle at 20% 50%, hsl(189 100% 44% / 0.1) 0%, transparent 50%)',
              'radial-gradient(circle at 80% 50%, hsl(189 100% 44% / 0.1) 0%, transparent 50%)',
              'radial-gradient(circle at 20% 50%, hsl(189 100% 44% / 0.1) 0%, transparent 50%)',
            ],
          }}
          transition={{ duration: 10, repeat: Infinity }}
          className="absolute inset-0"
        />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <motion.h2
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-5xl md:text-6xl font-poppins font-bold text-center mb-4"
        >
          Let's <span className="text-accent">Connect</span>
        </motion.h2>

        <motion.div
          initial={{ opacity: 0, scaleX: 0 }}
          animate={isInView ? { opacity: 1, scaleX: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="w-24 h-1 bg-accent mx-auto mb-16"
        />

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Contact Card */}
          <motion.div
            initial={{ opacity: 0, x: -100 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
            onMouseEnter={() => setHoveredCard(true)}
            onMouseLeave={() => setHoveredCard(false)}
            className="relative"
          >
            <div className="bg-gradient-to-br from-secondary/50 to-background/50 backdrop-blur-xl rounded-3xl p-1 shadow-2xl overflow-hidden cursor-hover group">
              {/* Profile Section */}
              <motion.div
                animate={{
                  height: hoveredCard ? '140px' : '280px',
                }}
                transition={{ duration: 0.5, ease: 'easeInOut' }}
                className="relative overflow-hidden rounded-3xl"
              >
                <img
                  src={profileAbout}
                  alt="Qasim Ali"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-b from-transparent to-background/90" />

                {/* Email Icon */}
                <button className="absolute top-6 right-6 bg-accent/90 backdrop-blur-sm p-3 rounded-full hover:bg-accent transition-colors cursor-hover">
                  <Mail className="w-5 h-5 text-background" />
                </button>
              </motion.div>

              {/* Content Section */}
              <div className="p-8 bg-secondary/50 backdrop-blur-sm">
                <motion.div
                  animate={{
                    height: hoveredCard ? 'auto' : '100px',
                  }}
                  transition={{ duration: 0.5 }}
                  className="overflow-hidden"
                >
                  <h3 className="text-2xl font-poppins font-bold text-foreground mb-2">
                    Qasim Ali
                  </h3>
                  <p className="text-muted-foreground font-inter mb-4">
                    UX/UI Designer passionate about creating beautiful, functional digital experiences
                    that make a difference in people's lives.
                  </p>
                </motion.div>

                {/* Social Links & Contact Button */}
                <div className="flex items-center justify-between mt-6 pt-6 border-t border-border">
                  <div className="flex gap-4">
                    {socialLinks.map((social, index) => (
                      <motion.a
                        key={social.label}
                        href={social.url}
                        initial={{ opacity: 0, scale: 0 }}
                        animate={isInView ? { opacity: 1, scale: 1 } : {}}
                        transition={{ delay: 0.8 + index * 0.1 }}
                        whileHover={{ scale: 1.2, y: -5 }}
                        className="bg-accent/10 p-3 rounded-full hover:bg-accent transition-colors cursor-hover group/icon"
                        aria-label={social.label}
                      >
                        <social.icon className="w-5 h-5 text-accent group-hover/icon:text-background transition-colors" />
                      </motion.a>
                    ))}
                  </div>

                  <button className="px-6 py-3 bg-accent text-background font-poppins font-semibold rounded-lg hover:scale-105 transition-all cursor-hover shine-effect">
                    Contact Me
                  </button>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 100 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="bg-secondary/30 backdrop-blur-sm rounded-3xl p-8 border border-border"
          >
            <form className="space-y-6">
              <div>
                <label className="block text-sm font-poppins font-medium text-foreground mb-2">
                  Name
                </label>
                <input
                  type="text"
                  className="w-full px-4 py-3 bg-background/50 border border-border rounded-lg focus:border-accent focus:outline-none focus:ring-2 focus:ring-accent/20 transition-all cursor-hover text-foreground"
                  placeholder="Your name"
                />
              </div>

              <div>
                <label className="block text-sm font-poppins font-medium text-foreground mb-2">
                  Email
                </label>
                <input
                  type="email"
                  className="w-full px-4 py-3 bg-background/50 border border-border rounded-lg focus:border-accent focus:outline-none focus:ring-2 focus:ring-accent/20 transition-all cursor-hover text-foreground"
                  placeholder="your@email.com"
                />
              </div>

              <div>
                <label className="block text-sm font-poppins font-medium text-foreground mb-2">
                  Message
                </label>
                <textarea
                  rows={5}
                  className="w-full px-4 py-3 bg-background/50 border border-border rounded-lg focus:border-accent focus:outline-none focus:ring-2 focus:ring-accent/20 transition-all cursor-hover resize-none text-foreground"
                  placeholder="Tell me about your project..."
                />
              </div>

              <button
                type="submit"
                className="w-full px-8 py-4 bg-accent text-background font-poppins font-semibold rounded-lg hover:scale-105 transition-all cursor-hover shine-effect"
              >
                Send Message
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
