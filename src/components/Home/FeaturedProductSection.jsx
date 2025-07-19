import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink } from 'lucide-react';

export default function FeaturedProductSection() {
  return (
    <section className="py-20 bg-white">
      <div className="w-full px-4 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Text */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Modern Policing, Redefined by CopMap
            </h2>
            <p className="text-xl text-gray-600 mb-8 leading-relaxed text-justify">
              CopMap is EyeQlytics' flagship law enforcement platform built
              for real-time officer tracking, strategic bandobast planning,
              and command center operations. Already being adopted by police
              departments across India, CopMap represents our philosophy: one
              powerful solution, deeply integrated, highly scalable.
            </p>

            <div className="space-y-4 mb-8">
              <div className="flex items-center">
                <div className="w-2 h-2 bg-blue-600 rounded-full mr-3"></div>
                <span className="text-gray-700">
                  <strong>Real-time officer tracking</strong> and deployment
                  management
                </span>
              </div>
              <div className="flex items-center">
                <div className="w-2 h-2 bg-green-600 rounded-full mr-3"></div>
                <span className="text-gray-700">
                  <strong>Strategic bandobast planning</strong> and
                  coordination
                </span>
              </div>
              <div className="flex items-center">
                <div className="w-2 h-2 bg-orange-600 rounded-full mr-3"></div>
                <span className="text-gray-700">
                  <strong>Command center operations</strong> with live
                  dashboards
                </span>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="https://copmap.in"
                className="inline-flex items-center justify-center px-8 py-4 text-white font-semibold rounded-lg transition-colors duration-200 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
                style={{
                  background: "linear-gradient(to right, #0039a6, #04327b)",
                }}
              >
                Visit CopMap
                <ExternalLink className="ml-2 h-5 w-5" />
              </a>
            </div>
          </motion.div>

          {/* Right Column - Updated Image */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="w-full h-[480px] flex items-center justify-center"
          >
            <img
              src="/Petrol Route1.png"
              alt="CopMap police command center dashboard interface"
              className="h-full w-full object-contain"
              loading="lazy"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}