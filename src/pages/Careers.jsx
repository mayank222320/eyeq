
import { motion } from "framer-motion";
import {
  MapPin, Clock,Users,Target,Heart,Lightbulb,ArrowRight,Code,Zap,Award,
} from "lucide-react";
import { Link } from "react-router-dom";
import CaptchaModal from '../components/CaptchaModal';
import React, { useState } from "react"; // ✅
import OpenRolesSection from "../components/OpenRolesSection";
import SEOHead from "../components/SEO/SEOHead";
import { seoConfig } from "../utils/seo";



const openRoles = [
  {
    title: "Flutter Developer",
    type: "Full-time",
    location: "Remote/Hybrid",
    experience: "2-4 years",
    description:
      "Craft seamless cross-platform mobile experiences for real-time field operations.",
    link: "https://docs.google.com/forms/d/e/1FAIpQLScBqmB5cw1VZlupEMXJUtwq-IjBNACRp2QXc3JlvV9eMvKGeQ/viewform?usp=header",
    requirements: [
      "Flutter/Dart expertise",
      "State management (Provider/Bloc)",
      "REST API integration",
      "Git workflow",
    ],
  },
  {
    title: "Spring Boot Backend Developer",
    type: "Full-time",
    location: "Remote/Hybrid",
    experience: "3-5 years",
    description: "Build scalable, modular APIs powering core public systems.",
    link: "https://docs.google.com/forms/d/e/1FAIpQLSeDVPrboI44Y_docPAgvB81XNthP14V3q4LygJEaaFmv0IqZQ/viewform",
    requirements: [
      "Spring Boot",
      "RESTful APIs",
      "Database design",
      "Cloud platforms (GCP/AWS)",
    ],
  },
  {
    title: "DevOps & Infrastructure Engineer",
    type: "Full-time",
    location: "Remote/Hybrid",
    experience: "4-6 years",
    description:
      "Architect cloud-native systems with CI/CD, Docker, and observability stacks.",
    link: "https://docs.google.com/forms/d/e/1FAIpQLSeokRzP7PIQ8gBcUYeDu8KsA_u8mYxDThvYPBKzHoe12fQWAw/viewform",
    requirements: [
      "Docker",
      "Kubernetes",
      "CI/CD pipelines",
      "Cloud infrastructure",
    ],
  },
  {
    title: "GovTech Project Manager",
    type: "Full-time",
    location: "On-site",
    experience: "5+ years",
    description:
      "Drive product deployments across police forces, healthcare teams, and civic departments.",
    link: "https://docs.google.com/forms/d/e/1FAIpQLScVK2bmFjQMSti5-wBZ0aBXs6xcGKvz6vJkqLvfifJZfZaWvQ/viewform?usp=header",
    requirements: [
      "Project management",
      "Government sector experience",
      "Stakeholder management",
      "Agile methodologies",
    ],
  },
];

const benefits = [
  {
    title: "Meaningful Impact",
    description:
      "Work on projects that directly transform public services and improve citizens' lives.",
    icon: Heart,
    color: "red",
  },
  {
    title: "Innovation Leadership",
    description:
      "Be at the forefront of GovTech innovation and emerging technologies in India.",
    icon: Lightbulb,
    color: "yellow",
  },
  {
    title: "Career Growth",
    description:
      "Continuous learning opportunities and clear career advancement paths.",
    icon: Target,
    color: "green",
  },
  {
    title: "Collaborative Culture",
    description:
      "Work with passionate professionals who value teamwork and creativity.",
    icon: Users,
    color: "blue",
  },
];

const perks = [
  {
    icon: Code,
    title: "Latest Technology",
    description: "Work with cutting-edge tools and frameworks",
  },
  {
    icon: Zap,
    title: "Flexible Work",
    description: "Remote and hybrid work options available",
  },
  {
    icon: Award,
    title: "Recognition",
    description: "Performance-based rewards and recognition programs",
  },
  {
    icon: Target,
    title: "Learning Budget",
    description: "Annual budget for courses, conferences, and certifications",
  },
];


export default function Careers() {
  const seo = seoConfig.careers;

  const [showCaptcha, setShowCaptcha] = useState(false);
  const [selectedLink, setSelectedLink] = useState(null);

  const handleClickWithCaptcha = (link) => {
    setSelectedLink(link);
    setShowCaptcha(true);
  };

  const handleCaptchaSuccess = () => {
    if (selectedLink?.startsWith("http")) {
      window.location.href = selectedLink;
    } else {
      window.location.assign(selectedLink || "/contact");
    }
  };

  
  return (
    <>
      <SEOHead
        title={seo.title}
        description={seo.description}
        keywords={seo.keywords}
        canonicalUrl={`https://eyeqlytics.com${seo.path}`}
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
                Join Our Mission
              </span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Let&apos;s Build Something That{" "}
              <span
                className="block text-4xl md:text-5xl text-transparent bg-clip-text"
                style={{
                  backgroundImage:
                    "linear-gradient(to right, #0039a6, #04327b, #33daf0)",
                }}
              >
                Matters
              </span>
            </h1>

            {/* <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              At EyeQlytics, we're not hiring for job titles we're building a
              team of problem solvers, system thinkers, and domain experts who
              care about making technology work in the real world. Whether
              you're a student building your first scalable app, an engineer
              with battle-tested backend skills, or a retired professional with
              deep field insight if you bring value, we want to work with you.
            </p> */}
          </motion.div>
        </div>
      </section>

      {/* Why Join Us */}
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
              Why Choose EyeQlytics?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Be part of a team that's revolutionizing how governments and
              organizations use technology to serve citizens better.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            {benefits.map((benefit, index) => (
              <motion.div
                key={benefit.title}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="text-center group"
              >
                <div
                  className={`inline-flex items-center justify-center w-16 h-16 rounded-xl bg-${benefit.color}-100 mb-4 group-hover:scale-110 transition-transform duration-300`}
                >
                  <benefit.icon
                    className={`h-8 w-8 text-${benefit.color}-600`}
                  />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors">
                  {benefit.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {benefit.description}
                </p>
              </motion.div>
            ))}
          </div>

          {/* Additional Perks */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {perks.map((perk, index) => (
              <motion.div
                key={perk.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-gray-50 rounded-xl p-4 text-center hover:bg-blue-50 transition-colors duration-300"
              >
                <perk.icon className="h-8 w-8 text-blue-600 mx-auto mb-2" />
                <h4 className="font-semibold text-gray-900 mb-1">
                  {perk.title}
                </h4>
                <p className="text-sm text-gray-600">{perk.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Open Technical Roles */}
      <OpenRolesSection roles={openRoles} onSecureApply={handleClickWithCaptcha} />


      {/* Domain Expert & Internship Programs */}
  {/* Domain Expert & Internship Programs */}
<section className="py-20 bg-white">
  <div className="w-full px-4 lg:px-8">
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">

      {/* Domain Expert Track */}
      <motion.div
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-xl p-8"
      >
        <h3 className="text-2xl font-bold text-gray-900 mb-6">
          Domain Expert – General Track (Tech or Non-Tech)
        </h3>
        <p className="text-gray-700 mb-6 leading-relaxed">
          Are you someone who's spent 10–30 years inside a system, be it
          healthcare, law enforcement, education, supply chains, or public
          operations?
        </p>
        <p className="text-gray-700 mb-6 leading-relaxed">
          We invite doctors, ex-bureaucrats, retired officers, field
          practitioners, and senior industry professionals to join us as
          Domain Experts. Your real-world experience helps us build
          products that actually solve the problem.
        </p>
        <p className="text-blue-600 font-semibold mb-6">
          Let's build your insights into software.
        </p>

        <button
          onClick={() =>
            handleClickWithCaptcha(
              "https://docs.google.com/forms/d/e/1FAIpQLSdDGMr1nnD6SQw-IcjEXftSyXgBxft_fPT0zN3DLmiuh3phcg/viewform?usp=header"
            )
          }
          className="inline-flex items-center justify-center px-8 py-4 text-white font-semibold rounded-lg transition-colors duration-200 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
          style={{
            background: "linear-gradient(to right, #0039a6, #04327b)",
          }}
        >
          Join as Domain Expert
          <ArrowRight className="ml-2 h-4 w-4" />
        </button>
      </motion.div>

      {/* Internship Program */}
      <motion.div
        initial={{ opacity: 0, x: 50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="bg-gradient-to-br from-orange-50 to-orange-100 rounded-xl p-8"
      >
        <h3 className="text-2xl font-bold text-gray-900 mb-6">
          Internship & Early Talent Program
        </h3>
        <p className="text-gray-700 mb-6 leading-relaxed">
          We offer immersive internships and part-time roles for
          engineering students and recent grads who want hands-on exposure
          to building for impact.
        </p>
        <p className="text-gray-700 mb-6 leading-relaxed">
          Interns at EyeQlytics work on real products like CopMap — not just
          dummy tasks. Expect to ship code, solve real issues, and learn
          from domain experts and senior devs.
        </p>

        <div className="flex flex-col sm:flex-row gap-4">
          <button
            onClick={() =>
              handleClickWithCaptcha(
                "https://docs.google.com/forms/d/e/1FAIpQLSe2EeKxj4FTe5Jti-HLhrcIJcIMWpij7TytwsH26NgUhIufPA/viewform?usp=header"
              )
            }
             className="inline-flex items-center justify-center text-center px-6 py-3 bg-orange-600 hover:bg-orange-700 text-white font-semibold rounded-lg transition-all duration-200"
          >
            Apply Now
            <ArrowRight className="ml-2 h-4 w-4" />
          </button>

          <a
            href="#open-roles"
            className="inline-flex items-center justify-center text-center px-6 py-3 bg-white border-2 border-orange-600 text-orange-600 hover:bg-orange-50 font-semibold rounded-lg transition-all duration-200"
          >
            See All Openings
          </a>
        </div>
      </motion.div>
    </div>
  </div>

</section>

     {/* ✅ CAPTCHA modal - must be inside return */}
     {showCaptcha && (
      <CaptchaModal
        onClose={() => setShowCaptcha(false)}
        onSuccess={handleCaptchaSuccess}
      />
    )}

    </>
    
    
  );
}
