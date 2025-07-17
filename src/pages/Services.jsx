import React from "react";
import { motion } from "framer-motion";
import { ArrowRight, CheckCircle, Users, Clock, Target } from "lucide-react";
import { Link } from "react-router-dom";
import CoreServicesSection from "../components/Services/CoreServicesSection";
import DomainServicesSection from "../components/Services/DomainServicesSection";
import SEOHead from "../components/SEO/SEOHead";
import { seoConfig } from "../utils/seo";
import { serviceSchema } from "../components/SEO/StructuredData";


const processSteps = [
  {
    step: "01",
    title: "Discovery & Analysis",
    description:
      "Deep dive into your requirements, challenges, and business objectives",
    icon: Target,
    details: [
      "Stakeholder interviews",
      "Technical assessment",
      "Requirements gathering",
      "Feasibility analysis",
    ],
  },
  {
    step: "02",
    title: "Design & Planning",
    description:
      "Creating comprehensive wireframes, prototypes, and project roadmaps",
    icon: Palette,
    details: [
      "UI/UX design",
      "System architecture",
      "Project timeline",
      "Resource allocation",
    ],
  },
  {
    step: "03",
    title: "Development & Testing",
    description:
      "Agile development with continuous testing and quality assurance",
    icon: Code,
    details: [
      "Agile sprints",
      "Code reviews",
      "Automated testing",
      "Performance optimization",
    ],
  },
  {
    step: "04",
    title: "Deployment & Support",
    description:
      "Seamless launch with ongoing maintenance and technical support",
    icon: CheckCircle,
    details: [
      "Production deployment",
      "User training",
      "Monitoring setup",
      "24/7 support",
    ],
  },
];

export default function Services() {
  const seo = seoConfig.services;
  
  const servicesStructuredData = [
    serviceSchema("Custom Software Development", "Complete web and mobile applications with robust architecture, clean code, and scalability in mind."),
    serviceSchema("GovTech Solutions", "Digital command centers and smart dashboards for law enforcement and government operations."),
    serviceSchema("Mobile App Development", "High-performance apps for Android and iOS using Flutter and Kotlin, optimized for real-time use cases.")
  ];
  
  return (
    <>
      <SEOHead
        title={seo.title}
        description={seo.description}
        keywords={seo.keywords}
        canonicalUrl={`https://eyeqlytics.com${seo.path}`}
        structuredData={servicesStructuredData}
      />

      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-blue-50 via-white to-orange-50">
        <div className="w-full px-4 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <div className="text-sm md:text-base font-semibold text-blue-700 uppercase tracking-wide mb-4">
              <span className="text-sm font-semibold text-blue-600">
                Professional Services
              </span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              End-to-End Digital Transformation Across{" "}
              <span
                className="block text-4xl md:text-5xl text-transparent bg-clip-text"
                style={{
                  backgroundImage:
                    "linear-gradient(to right, #0039a6, #04327b, #33daf0)",
                }}
              >
                Government, Enterprise & Complex Domains
              </span>
            </h1>

            {/* <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              At EyeQlytics, we don't just write software, we solve deep
              operational challenges using technology, product design, and
              domain expertise. Our service model combines full-stack
              engineering, AI/ML integration, and industry-specific
              problem-solving to modernize critical systems and unlock
              efficiency at scale.
            </p> */}
          </motion.div>
        </div>
      </section>

      <CoreServicesSection />
      <DomainServicesSection />

      {/* Enhanced Process Section */}
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
              System Integration & Process Automation
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We connect the dots across teams, tools, and data silos, be it
              third-party APIs, homegrown CRMs, or government data portals. Our
              automation flows eliminate manual redundancy, unlock real-time
              visibility, and improve decision quality across departments and
              functions.
            </p>
          </motion.div>

          <div className="space-y-12">
            {processSteps.map((step, index) => (
              <motion.div
                key={step.title}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                viewport={{ once: true }}
                className={`flex flex-col lg:flex-row items-center gap-8 ${
                  index % 2 === 1 ? "lg:flex-row-reverse" : ""
                }`}
              >
                <div className="flex-1">
                  <div className="bg-white rounded-2xl p-8 shadow-xl border border-gray-100">
                    <div className="flex items-center mb-6">
                      <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-600 text-white font-bold text-xl rounded-full mr-4">
                        {step.step}
                      </div>
                      <div>
                        <h3 className="text-2xl font-bold text-gray-900">
                          {step.title}
                        </h3>
                        <p className="text-gray-600">{step.description}</p>
                      </div>
                    </div>
                    <div className="grid grid-cols-2 gap-3">
                      {step.details.map((detail, i) => (
                        <div key={i} className="flex items-center">
                          <CheckCircle className="h-4 w-4 text-green-500 mr-2 flex-shrink-0" />
                          <span className="text-sm text-gray-700">
                            {detail}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
                <div className="flex-shrink-0">
                  <div className="inline-flex items-center justify-center w-24 h-24 bg-blue-100 rounded-full">
                    <step.icon className="h-12 w-12 text-blue-600" />
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
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
              Why Choose EyeQlytics?
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: Users,
                title: "Expert Team",
                description:
                  "Experienced developers and consultants with deep domain knowledge in GovTech and enterprise solutions.",
              },
              {
                icon: Clock,
                title: "Proven Track Record",
                description:
                  "Successfully delivered projects for government agencies and private organizations across India.",
              },
              {
                icon: Target,
                title: "Results-Driven",
                description:
                  "Focus on measurable outcomes and long-term value creation for our clients and their stakeholders.",
              },
            ].map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-100 rounded-xl mb-4">
                  <item.icon className="h-8 w-8 text-blue-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  {item.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {item.description}
                </p>
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
              Ready to Start Your Digital Transformation?
            </h2>
            <p className="text-xl mb-8 max-w-3xl mx-auto text-gray-600">
              Let's discuss how we can help you build the perfect solution for
              your needs and create lasting impact through intelligent systems
              and data-driven technology.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="inline-flex items-center justify-center px-8 py-4 text-white font-semibold rounded-lg transition-colors duration-200 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
                style={{
                  background: "linear-gradient(to right, #0039a6, #04327b)",
                }}
              >
                Get Started Today
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
              <Link
                to="/about"
                className="inline-flex items-center justify-center px-8 py-4 border-2 border-blue-600 text-blue-600 hover:bg-blue-50 font-semibold rounded-lg transition-all duration-200"
              >
                Learn More About Us
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
}
