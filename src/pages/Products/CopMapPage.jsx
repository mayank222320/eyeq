import React from "react";
import { Helmet } from "react-helmet-async";
import { motion } from "framer-motion";
import {
  ExternalLink,
  Shield,
  Users,
  Map,
  Activity,
  Database,
  Smartphone,
  ArrowRight,
} from "lucide-react";
import { Link } from "react-router-dom";

export default function Products() {

  
  return (
    <>
      <Helmet>
        <title>
          Intelligent Software Products for Real-World Problems | EyeQlytics
        </title>
        <meta
          name="description"
          content="CopMap - Revolutionary police command and control solution featuring live officer tracking, bandobast coordination, and real-time deployment management. Trusted by Maharashtra Police."
        />
        <meta
          name="keywords"
          content="CopMap, police technology, command control system, officer tracking, bandobast management, Maharashtra police, law enforcement software"
        />
        <link rel="canonical" href="https://eyeqlytics.in/products" />
      </Helmet>

      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-blue-50 via-white to-orange-50">
        <div className="w-full px-4 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            cop
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <div className="text-sm md:text-base font-semibold text-blue-700 uppercase tracking-wide mb-4">
              <span className="text-sm font-semibold text-blue-600">
                Our Products
              </span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Intelligent Software Products for{" "}
              <span
                className="block text-4xl md:text-5xl text-transparent bg-clip-text"
                style={{
                  backgroundImage:
                    "linear-gradient(to right, #0039a6, #04327b, #33daf0)",
                }}
              >
                Real-World Problems
              </span>
            </h1>

            {/* <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              Our flagship products are designed to solve critical challenges in
              public safety, government operations, and civic management with
              cutting-edge technology.
            </p> */}
          </motion.div>
        </div>
      </section>

      {/* CopMap Product */}
      {/* CopMap Product */}
      <section className="py-24 bg-white">
        <div className="w-full px-8 lg:px-20 xl:px-32 2xl:px-40">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Left: Text Content - Without extra box */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <div className="inline-flex items-center px-4 py-2 bg-blue-100 rounded-full mb-6 animate-pulse">
                <Shield className="h-5 w-5 text-blue-700 mr-2" />
                <span className="text-sm font-medium text-blue-700">
                  Live in Maharashtra Police
                </span>
              </div>

              <h2 className="text-4xl font-extrabold text-gray-900 mb-4 leading-snug">
                CopMap
              </h2>

              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                A live command-and-control solution for police departments
                featuring officer tracking, bandobast assignment, and real-time
                coordination dashboards.
              </p>

              <div className="space-y-3 mb-8">
                <div className="flex items-center gap-3">
                  <span className="h-3 w-3 bg-blue-600 rounded-full"></span>
                  <span className="text-gray-800 text-sm">
                    <strong>Clients:</strong> Police departments and government
                    bodies
                  </span>
                </div>
                <div className="flex items-center gap-3">
                  <span className="h-3 w-3 bg-green-500 rounded-full"></span>
                  <span className="text-gray-800 text-sm">
                    <strong>Status:</strong> Live production system across
                    multiple districts
                  </span>
                </div>
                <div className="flex items-center gap-3">
                  <span className="h-3 w-3 bg-orange-500 rounded-full"></span>
                  <span className="text-gray-800 text-sm">
                    <strong>Impact:</strong> Enhanced operational efficiency &
                    safety
                  </span>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <a
                  href="https://copmap.in"
                  className="inline-flex items-center justify-center px-6 py-3 text-white font-medium rounded-lg transition transform hover:scale-105 shadow-lg"
                  style={{
                    background: "linear-gradient(to right, #0039a6, #04327b)",
                  }}
                >
                  Visit Website
                  <ExternalLink className="ml-2 h-5 w-5" />
                </a>

                <Link
                  to="https://calendly.com/admin-copmap/30min?month=2025-07"
                  className="inline-flex items-center justify-center px-6 py-3 text-white font-medium rounded-lg transition transform hover:scale-105 shadow-lg"
                  style={{
                    background: "linear-gradient(to right, #0039a6, #04327b)",
                  }}
                >
                  Request Demo
                </Link>
              </div>
            </motion.div>

            {/* Right: Image - No container */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="w-full h-[480px] flex items-center justify-center"
            >
              <img
                loading="lazy"
                src="/Petrol Route1.png"
                alt="CopMap police command center dashboard interface"
                className="w-full h-full object-contain"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Success Stories */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
        <div className="w-full px-4 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Real Impact, Real Results
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              See how CopMap is transforming police operations and improving
              public safety across Maharashtra.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                metric: "50%",
                label: "Faster Response Times",
                description:
                  "Reduced emergency response time through real-time coordination",
              },
              {
                metric: "75%",
                label: "Improved Efficiency",
                description:
                  "Enhanced operational efficiency in resource allocation",
              },
              {
                metric: "100%",
                label: "Digital Transformation",
                description: "Complete digitization of deployment workflows",
              },
            ].map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="text-center bg-white rounded-xl p-8 shadow-lg"
              >
                <div className="text-4xl font-bold text-blue-600 mb-2">
                  {stat.metric}
                </div>
                <div className="text-xl font-semibold text-gray-900 mb-2">
                  {stat.label}
                </div>
                <div className="text-gray-600">{stat.description}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-white to-blue-50">
        <div className="w-full px-4 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Ready to Modernize Your Operations?
            </h2>
            <p className="text-xl mb-8 max-w-3xl mx-auto text-gray-600">
              Join the police departments already using CopMap to enhance their
              operational efficiency, improve coordination, and better serve
              their communities.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="https://calendly.com/admin-copmap/30min?month=2025-07"
                className="inline-flex items-center justify-center px-8 py-4 text-white font-semibold rounded-lg transition-colors duration-200 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
                style={{
                  background: "linear-gradient(to right, #0039a6, #04327b)",
                }}
              >
                Schedule a Demo
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
              <Link
                to="/contact"
                className="inline-flex items-center justify-center px-8 py-4 border-2 border-blue-600 text-blue-600 hover:bg-blue-50 font-semibold rounded-lg transition-all duration-200 text-center"
              >
                Get in Touch
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
}
