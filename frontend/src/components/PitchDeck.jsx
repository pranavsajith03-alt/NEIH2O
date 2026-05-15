import React from 'react';
import { motion } from 'framer-motion';
import { Download } from 'lucide-react';

const PitchDeck = () => {
  return (
    <section id="pitch" className="py-24 relative z-10">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Our <span className="text-gradient">Pitch Deck</span></h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Discover our vision, market opportunity, and the problem we are solving.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="glass-card mb-8 aspect-video w-full overflow-hidden"
        >
          {/* Iframe for PDF. Assuming pitch.pdf is in the public folder */}
          <iframe
            src="/pitch.pdf#toolbar=0&navpanes=0&scrollbar=0"
            className="w-full h-full rounded-xl"
            title="Pitch Deck PDF"
            loading="lazy"
          >
            <p>Your browser does not support PDFs. <a href="/pitch.pdf">Download the PDF</a>.</p>
          </iframe>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="flex justify-center"
        >
          <a
            href="/pitch.pdf"
            download="Startup_Pitch_Deck.pdf"
            className="group flex items-center gap-3 bg-blue-600 hover:bg-blue-500 text-white px-8 py-4 rounded-full font-semibold transition-all shadow-lg shadow-blue-500/25"
          >
            <Download size={20} className="group-hover:-translate-y-1 transition-transform" />
            Download Pitch Deck
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default PitchDeck;
