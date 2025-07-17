import React from "react";
import { motion } from "framer-motion";
import {
  Award,
  Target,
  Users,
  Lightbulb,
  Code,
  Zap,
  Building,
  Shield,
} from "lucide-react";
import SEOHead from "../components/SEO/SEOHead";
import { seoConfig } from "../utils/seo";
import { organizationSchema } from "../components/SEO/StructuredData";

const values = [
  {
    title: "Innovation with Impact",
    description:
      "We build technology that creates meaningful change in real-world scenarios.",
    icon: Lightbulb,
  },
  {
    title: "Ethical & Responsible Technology",
    description:
      "Our solutions prioritize user privacy, security, and ethical considerations.",
    icon: Shield,
  },
  {
    title: "Scalable Architecture",
    description:
      "We design systems that grow with your needs and handle increasing demands.",
    icon: Target,
  },
  {
    title: "Human-Centric Design",
    description:
      "Every solution we create puts the end user at the center of our design process.",
    icon: Users,
  },
];

const achievements = [
  {
    name: "DPIIT Registered Startup",
    logo: "/logos/DPIT.png",
  },
  {
    name: "Udyam Registration",
    logo: "/logos/Udyam.png",
  },
  {
    name: "Startup India Recognition",
    logo: "/logos/startup-india-logo.png",
  },
  {
    name: "Active Government Partnerships",
    logo: "/logos/GOVT.png",
  },
];

const teamStats = [
  { icon: Code, label: "Years of Experience", value: "5+" },
  { icon: Building, label: "Projects Delivered", value: "20+" },
  { icon: Shield, label: "Government Clients", value: "3+" },
  { icon: Zap, label: "Technologies Mastered", value: "15+" },
];

export default function About() {
  const seo = seoConfig.about;
  
  return (
    <>
      <SEOHead
        title={seo.title}
        description={seo.description}
        keywords={seo.keywords}
        canonicalUrl={`https://eyeqlytics.com${seo.path}`}
        structuredData={organizationSchema}
      />

      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-blue-50 via-white to-orange-50">
        <div className="w-full max-w-screen-2xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <div className="text-sm md:text-base font-semibold text-blue-700 uppercase tracking-wide mb-4">
              <span className="text-sm font-semibold text-blue-600">
                Who We Are
              </span>
            </div>

            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
              The Team Behind India's Most{" "}
              <span
                className="block text-4xl md:text-5xl text-transparent bg-clip-text"
                style={{
                  backgroundImage:
                    "linear-gradient(to right, #0039a6, #04327b, #33daf0)",
                }}
              >
                Scalable Public Sector Tech Tools
              </span>
            </h1>

            {/* <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              Founded by engineers and entrepreneurs passionate about public
              innovation, EyeQlytics began with CopMap to digitize India's
              police deployment workflows. Since then, our mission has expanded
              to solving overlooked challenges across sectors through scalable,
              secure, and user-focused software systems.
            </p> */}
          </motion.div>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-20 bg-white">
        <div className="w-full px-4 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Our Story: From Idea to Impact
              </h2>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed text-justify">
                Founded by engineers and entrepreneurs passionate about public
                innovation, EyeQlytics began with CopMap to digitize India's
                police deployment workflows. What started as a solution for
                police deployment tracking has grown into a comprehensive
                platform for public sector digital transformation.
              </p>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed text-justify">
                Our founders, driven by a passion for public service and
                technology innovation, recognized the gap between cutting-edge
                technology and its application in government operations. Today,
                we bridge that gap with solutions that are both technologically
                advanced and practically applicable.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed text-justify">
                Since then, our mission has expanded to solving overlooked
                challenges across sectors through scalable, secure, and
                user-focused software systems. We believe that technology should
                serve people, not the other way around.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              viewport={{ once: true }}
            >
              <img
                src="impact1.png"
                alt="Team working on innovative government technology solutions"
                style={{
                  width: "100%",
                  height: "auto",
                  display: "block",
                  maxHeight: "500px", // Adjust as needed
                  objectFit: "contain",
                }}
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Team Stats
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
              Our Impact in Numbers
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Measurable results that demonstrate our commitment to excellence and innovation.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {teamStats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300"
              >
                <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-100 rounded-xl mb-4">
                  <stat.icon className="h-8 w-8 text-blue-600" />
                </div>
                <div className="text-3xl font-bold text-gray-900 mb-2">{stat.value}</div>
                <div className="text-gray-600 font-medium">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section> */}

      {/* Values */}
      <section className="py-20 bg-white">
        <div className="w-full px-4 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Our Core Values
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              These fundamental principles guide everything we do, from product
              development to client relationships.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 hover:border-blue-200 group"
              >
                <div className="inline-flex items-center justify-center w-14 h-14 rounded-xl bg-blue-100 mb-6 group-hover:scale-110 transition-transform duration-300">
                  <value.icon className="h-7 w-7 text-blue-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors">
                  {value.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {value.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Recognition */}
      <section className="py-20 bg-gradient-to-br from-white to-blue-50">
        <div className="w-full px-4 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Recognition & Achievements
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our work has been recognized by industry leaders and government
              organizations across India.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {achievements.map((achievement, index) => (
              <motion.div
                key={achievement.name}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white rounded-xl p-6 text-center border border-gray-200 hover:shadow-lg transition-all duration-300"
              >
                <div className="inline-flex items-center justify-center w-24 h-24 mb-6 mx-auto">
                  <img
                    src={achievement.logo}
                    alt={achievement.name}
                    className="h-16 w-auto object-contain"
                    loading="lazy"
                  />
                </div>
                <h3 className="text-base md:text-lg font-semibold text-gray-900">
                  {achievement.name}
                </h3>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
