import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function HeroSection() {
  return (
    <section className="relative pt-12 pb-20 lg:pt-16 lg:pb-24 bg-white">
      <div className="w-full px-4 lg:px-12">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
          
          {/* Left Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="w-full lg:flex-1 text-left"
          >
            <h1 className="text-4xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6 leading-tight">
              <span className="block">
                Engineering operational excellence in
              </span>
              <span
                className="block text-transparent bg-clip-text"
                style={{
                  backgroundImage:
                    'linear-gradient(to right, #0039a6, #04327b, #33daf0)',
                }}
              >
                Government & Enterprise
              </span>
            </h1>

            <p
              className="text-lg font-semibold mb-4 text-transparent bg-clip-text"
              style={{
                backgroundImage: 'linear-gradient(to right, #0039a6, #04327b)',
              }}
            >
              From Code to Capital
            </p>

            <p className="text-xl text-gray-600 mb-8 max-w-2xl leading-relaxed">
              Empowering government agencies, businesses, and communities with scalable, 
              impact-driven technology solutions.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                to="/products/copmap"
                className="inline-flex items-center justify-center px-8 py-4 text-white font-semibold rounded-lg transition-colors duration-200 shadow-lg hover:shadow-xl disabled:opacity-60 transform hover:-translate-y-1"
                style={{
                  background: 'linear-gradient(to right, #0039a6, #04327b)'
                }}
              >
                Explore Our Products
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>

              <Link
                to="/services"
                className="inline-flex items-center justify-center px-8 py-4 text-white font-semibold rounded-lg transition-colors duration-200 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
                style={{
                  background: 'linear-gradient(to right, #0039a6, #04327b)'
                }}
              >
                Build With Us
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </div>
          </motion.div>

          {/* Right Hero Image */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="w-full lg:flex-1 flex justify-end"
          >
            <img
              src="/Home-il.jpg"
              alt="Modern technology solutions"
              className="w-full h-96 object-contain"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}