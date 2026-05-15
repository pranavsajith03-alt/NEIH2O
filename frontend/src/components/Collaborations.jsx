import React from 'react';
import { motion } from 'framer-motion';
import { Building2, Globe, Microscope } from 'lucide-react';

const Collaborations = () => {
  const collaborations = [
    {
      id: 1,
      name: "Global Tech University",
      type: "Research Partner",
      description: "Joint research on next-generation AI models and their applications in enterprise environments.",
      icon: <Building2 className="w-8 h-8 text-blue-400" />
    },
    {
      id: 2,
      name: "InnovateX Labs",
      type: "Technology Partner",
      description: "Co-developing hardware solutions that integrate seamlessly with our software ecosystem.",
      icon: <Microscope className="w-8 h-8 text-emerald-400" />
    },
    {
      id: 3,
      name: "Worldwide Enterprise",
      type: "Strategic Partner",
      description: "Expanding our global reach and helping scale operations across multiple continents.",
      icon: <Globe className="w-8 h-8 text-purple-400" />
    }
  ];

  return (
    <section id="collaborations" className="py-24 relative z-10 bg-black/40">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Strategic <span className="text-gradient">Collaborations</span></h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Partnering with industry leaders to accelerate innovation and deliver exceptional value.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {collaborations.map((collab, index) => (
            <motion.div
              key={collab.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="glass-card group hover:-translate-y-2 transition-transform duration-300"
            >
              <div className="bg-white/5 w-16 h-16 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                {collab.icon}
              </div>
              <h3 className="text-2xl font-bold mb-2">{collab.name}</h3>
              <p className="text-sm text-blue-400 font-semibold mb-4">{collab.type}</p>
              <p className="text-gray-400 leading-relaxed">
                {collab.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Collaborations;
