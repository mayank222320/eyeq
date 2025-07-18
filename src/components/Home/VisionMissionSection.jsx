import React from 'react';
import { motion } from 'framer-motion';
import { Eye, Lightbulb } from 'lucide-react';

export default function VisionMissionSection() {
  return (
    <section className="py-20 section-gradient-1 pattern-grid">
      <div className="w-full px-4 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16 relative z-10"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Empowering Public Infrastructure Through Intelligent Systems
          </h2>
          <p className="text-xl text-white/90 max-w-3xl mx-auto">
            Transforming how governments and organizations leverage technology
            for better public service delivery
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="glass-card p-8 overflow-hidden group card-hover"
          >
            <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-white to-blue-200 rounded-full -translate-y-16 translate-x-16 opacity-20 group-hover:opacity-30 transition-opacity"></div>
            <div className="relative z-10">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-white/30 backdrop-blur-lg rounded-xl mb-6 animate-pulse-glow">
                <Eye className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">
                Our Vision
              </h3>
              <p className="text-white/90 leading-relaxed text-justify">
                To transform lives by solving overlooked challenges with
                technology, creating a world where governments and
                organizations work smarter, faster, and more transparently for
                the people they serve.
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="glass-card p-8 overflow-hidden group card-hover"
          >
            <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-white to-purple-200 rounded-full -translate-y-16 translate-x-16 opacity-20 group-hover:opacity-30 transition-opacity"></div>
            <div className="relative z-10">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-white/30 backdrop-blur-lg rounded-xl mb-6 animate-pulse-glow">
                <Lightbulb className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">
                Our Mission
              </h3>
              <p className="text-white/90 leading-relaxed text-justify">
                To build solutions that bring real change. By addressing
                inefficiencies and empowering communities, we aim to make
                technology accessible and impactful for everyone.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}