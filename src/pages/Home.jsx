import React from "react";
import { Star} from "lucide-react";
import { motion } from "framer-motion";
import {
  Shield,
  Truck,
  Heart,
  Building,
  Zap,
  Users,
  Target,
  Globe,
  Eye,
  Lightbulb,
  ExternalLink,
  ArrowRight,
} from "lucide-react";
import { Link } from "react-router-dom";
import Hero from "../components/Hero/Hero";
import SEOHead from "../components/SEO/SEOHead";
import { seoConfig } from "../utils/seo";
import { organizationSchema, websiteSchema } from "../components/SEO/StructuredData";

const industries = [
  {
    name: "Government & Public Safety",
    icon: Shield,
    color: "blue",
    description:
      "Digital command centers and smart dashboards for law enforcement",
  },
  {
    name: "Logistics & Supply Chain",
    icon: Truck,
    color: "green",
    description: "Real-time tracking and optimization systems",
  },
  {
    name: "Healthcare IT",
    icon: Heart,
    color: "red",
    description: "Task digitization for doctors and health record systems",
  },
  {
    name: "Smart Cities",
    icon: Building,
    color: "purple",
    description: "Urban infrastructure and civic technology solutions",
  },
  {
    name: "Disaster Management",
    icon: Zap,
    color: "yellow",
    description: "Response systems and real-time crisis dashboards",
  },
  {
    name: "Civic Administration",
    icon: Users,
    color: "indigo",
    description: "Citizen engagement and government workflow automation",
  },
  {
    name: "EdTech Solutions",
    icon: Target,
    color: "pink",
    description: "Educational technology and learning management systems",
  },
  {
    name: "Urban Transport",
    icon: Globe,
    color: "teal",
    description: "Vehicle tracking and smart dispatch systems",
  },
  {
    name: "AgriTech & Supply Chains",
    icon: Lightbulb,
    color: "orange",
    description: "Field-force tools and precision farming modules",
  },
];


const testimonials = [
  {
    quote:
      "EyeQlytics has revolutionized how we manage our police operations. CopMap has significantly improved our coordination and response times.",
    author: "Senior Police Officer",
    organization: "Maharashtra State Police",
    rating: 5,
  },
  {
    quote:
      "The team's deep understanding of government processes and technical expertise made them the perfect partner for our digital transformation.",
    author: "Project Director",
    organization: "Government Partner",
    rating: 5,
  },
  {
    quote:
      "Working with EyeQlytics has been exceptional. Their solutions are not just technically sound but also user-friendly and practical.",
    author: "Technology Head",
    organization: "Educational Institution",
    rating: 5,
  },
];

export default function Home() {
  const seo = seoConfig.home;
  
  return (
    <>
      <SEOHead
        title={seo.title}
        description={seo.description}
        keywords={seo.keywords}
        canonicalUrl={`https://eyeqlytics.com${seo.path}`}
        structuredData={[organizationSchema, websiteSchema]}
      />

      <Hero />

      {/* Vision & Mission */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
        <div className="w-full px-4 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Empowering Public Infrastructure Through Intelligent Systems
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
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
              className="relative bg-white rounded-2xl p-8 shadow-xl border border-blue-100 overflow-hidden group hover:shadow-2xl transition-all duration-300"
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-blue-500 to-blue-600 rounded-full -translate-y-16 translate-x-16 opacity-10 group-hover:opacity-20 transition-opacity"></div>
              <div className="relative z-10">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-100 rounded-xl mb-6">
                  <Eye className="h-8 w-8 text-blue-600" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  Our Vision
                </h3>
                <p className="text-gray-600 leading-relaxed text-justify">
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
              className="relative bg-white rounded-2xl p-8 shadow-xl border border-orange-100 overflow-hidden group hover:shadow-2xl transition-all duration-300"
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-orange-500 to-orange-600 rounded-full -translate-y-16 translate-x-16 opacity-10 group-hover:opacity-20 transition-opacity"></div>
              <div className="relative z-10">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-orange-100 rounded-xl mb-6">
                  <Lightbulb className="h-8 w-8 text-orange-600" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  Our Mission
                </h3>
                <p className="text-gray-600 leading-relaxed text-justify">
                  To build solutions that bring real change. By addressing
                  inefficiencies and empowering communities, we aim to make
                  technology accessible and impactful for everyone.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Featured Product – CopMap */}
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

      {/* Industries We Serve */}
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
              Industries We Serve
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              From government agencies to private enterprises, we deliver
              technology solutions that make a real difference across various
              sectors.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {industries.map((industry, index) => (
              <motion.div
                key={industry.name}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 hover:border-blue-200 cursor-pointer"
              >
                <div
                  className={`inline-flex items-center justify-center w-14 h-14 rounded-xl mb-4 group-hover:scale-110 transition-transform duration-300 ${
                    industry.color === "blue"
                      ? "bg-blue-100"
                      : industry.color === "green"
                      ? "bg-green-100"
                      : industry.color === "red"
                      ? "bg-red-100"
                      : industry.color === "purple"
                      ? "bg-purple-100"
                      : industry.color === "yellow"
                      ? "bg-yellow-100"
                      : industry.color === "indigo"
                      ? "bg-indigo-100"
                      : industry.color === "pink"
                      ? "bg-pink-100"
                      : industry.color === "teal"
                      ? "bg-teal-100"
                      : "bg-orange-100"
                  }`}
                >
                  <industry.icon
                    className={`h-7 w-7 ${
                      industry.color === "blue"
                        ? "text-blue-600"
                        : industry.color === "green"
                        ? "text-green-600"
                        : industry.color === "red"
                        ? "text-red-600"
                        : industry.color === "purple"
                        ? "text-purple-600"
                        : industry.color === "yellow"
                        ? "text-yellow-600"
                        : industry.color === "indigo"
                        ? "text-indigo-600"
                        : industry.color === "pink"
                        ? "text-pink-600"
                        : industry.color === "teal"
                        ? "text-teal-600"
                        : "text-orange-600"
                    }`}
                  />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors">
                  {industry.name}
                </h3>
                <p className="text-sm text-gray-600 leading-relaxed">
                  {industry.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

       {/* Testimonials */}
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
              What Our Clients Say
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Don't just take our word for it. Here's what our clients have to
              say about working with us.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="bg-white rounded-xl p-6 shadow-lg"
              >
                <div className="flex items-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star
                      key={i}
                      className="h-5 w-5 text-yellow-400 fill-current"
                    />
                  ))}
                </div>
                <blockquote className="text-gray-700 mb-4">
                  "{testimonial.quote}"
                </blockquote>
                <div className="border-t border-gray-200 pt-4">
                  <div className="font-semibold text-gray-900">
                    {testimonial.author}
                  </div>
                  <div className="text-sm text-gray-500">
                    {testimonial.organization}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
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
    </>
  );
}
