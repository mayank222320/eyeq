import React from 'react';
import { motion } from 'framer-motion';
import { Code, Smartphone, Database, Palette, Cloud, Zap } from 'lucide-react';

const coreServices = [
  {
    title: "Full-Stack Software Development",
    description:
      "Complete web and mobile applications with robust architecture, clean code, and scalability in mind.",
    icon: Code,
    technologies: ["React", "Node.js", "Python", "PostgreSQL"],
    color: "blue",
  },
  {
    title: "Mobile App Development",
    description:
      "High-performance apps for Android and iOS using Flutter and Kotlin, optimized for real-time use cases.",
    icon: Smartphone,
    technologies: ["Flutter", "Kotlin", "iOS", "Android"],
    color: "green",
  },
  {
    title: "Backend APIs & Microservices",
    description:
      "Secure, modular REST APIs and microservices using Spring Boot and Firebase for high concurrency.",
    icon: Database,
    technologies: ["Spring Boot", "Firebase", "REST APIs", "Microservices"],
    color: "purple",
  },
  {
    title: "User Experience (UX) & Interface Design",
    description:
      "Simplifying complex workflows into usable, accessible interfaces designed in Figma and validated with users.",
    icon: Palette,
    technologies: ["Figma", "Design Systems", "User Research", "Prototyping"],
    color: "pink",
  },
  {
    title: "Cloud Infrastructure & DevOps",
    description:
      "Scalable systems using Docker, Kubernetes, Firebase, and CI/CD pipelines for high availability.",
    icon: Cloud,
    technologies: ["Docker", "Kubernetes", "CI/CD", "Firebase"],
    color: "orange",
  },
  {
    title: "AI/ML & Data Intelligence",
    description:
      "Anomaly detection, prediction, and natural language insights using Python, TensorFlow, and LLM APIs.",
    icon: Zap,
    technologies: ["Python", "TensorFlow", "LLM APIs", "Data Analytics"],
    color: "yellow",
  },
];

export default function CoreServicesSection() {
  return (
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
            Core Engineering Capabilities
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We build complete web and mobile applications with robust
            architecture, clean code, and scalability in mind. Our teams
            manage everything, from frontend interfaces to backend services.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {coreServices.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 hover:border-blue-200 cursor-pointer"
            >
              <div
                className={`inline-flex items-center justify-center w-14 h-14 rounded-xl bg-${service.color}-100 mb-4 group-hover:scale-110 transition-transform duration-300`}
              >
                <service.icon
                  className={`h-7 w-7 text-${service.color}-600`}
                />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors">
                {service.title}
              </h3>
              <p className="text-gray-600 mb-4 leading-relaxed">
                {service.description}
              </p>
              <div className="flex flex-wrap gap-2">
                {service.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="px-3 py-1 bg-gray-100 text-gray-700 text-sm rounded-full hover:bg-blue-100 hover:text-blue-700 transition-colors"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}