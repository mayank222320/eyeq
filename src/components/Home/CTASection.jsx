import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function CTASection() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <h2
            className="text-3xl md:text-4xl font-bold mb-6 text-transparent bg-clip-text"
            style={{
              backgroundImage: "linear-gradient(to right, #0039a6, #04327b)",
            }}
          >
            Ready to Engineer Excellence in Your Operations?
          </h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto text-gray-700">
            Join the organizations already using our solutions to improve
            efficiency, transparency, and create positive impact through
            data-driven technology.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              aria-label="Get in touch with EyeQlytics"
              className="inline-flex items-center justify-center px-8 py-4 text-white font-semibold rounded-lg transition-all duration-200 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
              style={{
                background: "linear-gradient(to right, #0039a6, #04327b)",
              }}
            >
              Get Started Today
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
            <Link
              to="/products"
              className="inline-flex items-center justify-center px-8 py-4 border-2 border-blue-600 text-blue-600 hover:bg-blue-50 font-semibold rounded-lg transition-all duration-200 text-center"
            >
              View Our Products
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}