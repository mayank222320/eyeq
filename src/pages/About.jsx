import React from "react";
import { motion } from "framer-motion";
import StorySection from "../components/About/StorySection";
import ValuesSection from "../components/About/ValuesSection";
import RecognitionSection from "../components/About/RecognitionSection";
import SEOHead from "../components/SEO/SEOHead";
import { seoConfig } from "../utils/seo";
import { organizationSchema } from "../components/SEO/StructuredData";


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

      <StorySection />
      <ValuesSection />
      <RecognitionSection />
    </>
  );
}
