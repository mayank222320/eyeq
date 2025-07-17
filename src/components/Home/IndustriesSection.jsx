import React from 'react';
import { motion } from 'framer-motion';
import {
  Shield,
  Truck,
  Heart,
  Building,
  Zap,
  Users,
  Target,
  Globe,
  Lightbulb,
} from 'lucide-react';

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

export default function IndustriesSection() {
  return (
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
  );
}