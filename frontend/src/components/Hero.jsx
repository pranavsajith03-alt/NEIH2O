import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

const Hero = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden">
      {/* Background Gradients */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500/20 rounded-full blur-[120px] -z-10" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-emerald-500/20 rounded-full blur-[120px] -z-10" />

      <div className="max-w-7xl mx-auto px-6 flex flex-col items-center text-center z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass border border-white/10 mb-8"
        >
          <span className="w-2 h-2 rounded-full bg-blue-400 animate-pulse" />
          <span className="text-sm text-gray-300 font-medium">Revolutionizing the Industry</span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="text-5xl md:text-7xl font-extrabold tracking-tight mb-6"
        >
          The Future of <br className="hidden md:block" />
          <span className="text-gradient">Innovative Solutions</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-xl md:text-2xl text-gray-400 max-w-2xl mb-10"
        >
          We are building the next generation platform to streamline workflows, enhance productivity, and scale your business globally.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="flex flex-col sm:flex-row gap-4 w-full justify-center"
        >
          <a
            href="#pitch"
            className="group flex items-center justify-center gap-2 bg-white text-black px-8 py-4 rounded-full font-semibold text-lg hover:bg-gray-200 transition-colors"
          >
            Explore Pitch Deck
            <ArrowRight className="group-hover:translate-x-1 transition-transform" size={20} />
          </a>
          <a
            href="#collaborations"
            className="flex items-center justify-center px-8 py-4 rounded-full font-semibold text-lg glass hover:bg-white/10 transition-colors"
          >
            Our Partners
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
