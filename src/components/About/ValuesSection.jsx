import React from 'react';
import { motion } from 'framer-motion';
import { Lightbulb, Shield, Target, Users } from 'lucide-react';

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

export default function ValuesSection() {
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
  );
}