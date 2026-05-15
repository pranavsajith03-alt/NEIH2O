import React from 'react';
import { motion } from 'framer-motion';

const Sponsors = () => {
  // Placeholder array for sponsors
  const sponsors = Array.from({ length: 8 }, (_, i) => `Sponsor ${i + 1}`);

  return (
    <section id="sponsors" className="py-24 relative z-10">
      <div className="max-w-7xl mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Backed By <span className="text-gradient">Visionaries</span></h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Our incredible investors and supporters who believe in our mission.
          </p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {sponsors.map((sponsor, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="glass p-8 rounded-2xl flex items-center justify-center hover:bg-white/10 transition-colors cursor-pointer group"
            >
              <div className="text-xl font-bold text-gray-500 group-hover:text-white transition-colors">
                {sponsor}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Sponsors;
