import React from 'react';
import { motion } from 'framer-motion';
import { Shield, Target, Building, Cog, Database, Users } from 'lucide-react';

const domainServices = [
  {
    title: "GovTech & Public Operations",
    description:
      "Digital command centers, smart dashboards, deployment automation, and citizen engagement systems.",
    icon: Shield,
    color: "blue",
  },
  {
    title: "Healthcare Systems",
    description:
      "Task digitization for doctors, real-time data for rural health ops, compliance-ready health record systems.",
    icon: Target,
    color: "red",
  },
  {
    title: "Smart Logistics & Urban Transport",
    description:
      "Vehicle tracking, route optimization, fleet analytics, and smart dispatch powered by AI/ML.",
    icon: Building,
    color: "green",
  },
  {
    title: "Manufacturing & Industrial Automation",
    description:
      "Sensor data integration, process digitization, and production visibility with machine learning insights.",
    icon: Cog,
    color: "purple",
  },
  {
    title: "ERP Integrations & Legacy System Modernization",
    description:
      "Bridging old systems (SAP, Oracle, local ERPs) with new platforms, automating data flow and workflows.",
    icon: Database,
    color: "orange",
  },
  {
    title: "AgriTech & Rural Intelligence",
    description:
      "Field-force tools, supply chain tracking, subsidy & scheme digitization, precision farming modules.",
    icon: Users,
    color: "teal",
  },
];

export default function DomainServicesSection() {
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
            Domain-Specific Services
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We go beyond software by bringing domain-driven innovation to each
            project. Whether you're running a government department, scaling a
            manufacturing line, or managing multi-location operations,
            EyeQlytics delivers tailored digital transformation.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {domainServices.map((service, index) => (
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
              <p className="text-gray-600 leading-relaxed">
                {service.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}