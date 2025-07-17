import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  MapPin,
  Phone,
  Mail,
  Globe,
  Send,
  CheckCircle,
  Clock,
  Users,
} from "lucide-react";
import emailjs from "emailjs-com";
import LocationMap from "../components/Map/LocationMap";
import SEOHead from "../components/SEO/SEOHead";
import { seoConfig } from "../utils/seo";

export default function Contact() {
  const seo = seoConfig.contact;
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    organization: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      await emailjs.send(
        "service_jt665d5",
        "template_nrhr0y6",
        formData,
        "mf99pvriDF7lMpXtM"
      );
      setSubmitted(true);
      setFormData({ name: "", email: "", organization: "", message: "" });
    } catch (error) {
      console.error("Error sending email:", error);
    } finally {
      setIsSubmitting(false);
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
                Get In Touch
              </span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Ready to Engineer Excellence in Your{" "}
              <span
                className="block text-4xl md:text-5xl text-transparent bg-clip-text"
                style={{
                  backgroundImage:
                    "linear-gradient(to right, #0039a6, #04327b, #33daf0)",
                }}
              >
                Operations?
              </span>
            </h1>

            {/* <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              Ready to transform your operations with innovative technology?
              We'd love to hear from you and discuss how we can help create
              meaningful impact.
            </p> */}
          </motion.div>
        </div>
      </section>

      {/* Contact Info & Form */}
      <section className="py-20 bg-white">
        <div className="w-full px-4 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="space-y-6 max-w-xl w-full mx-auto"
            >
              <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
                Get in Touch
              </h2>

              {/* Address Card */}
              <div className="flex items-start space-x-4 p-6 rounded-2xl bg-white/80 backdrop-blur-md border border-gray-200 shadow-xl hover:shadow-2xl transition-all">
                <div className="inline-flex items-center justify-center w-14 h-14 rounded-xl bg-blue-100">
                  <MapPin className="h-6 w-6 text-blue-600" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-1">
                    Address
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    10/81, Near SJP Petrol Pump, Bidkin,
                    <br />
                    Chhatrapati Sambhaji Nagar, Maharashtra, India - 431105
                  </p>
                </div>
              </div>

              {/* Phone Card */}
              <div className="flex items-start space-x-4 p-6 rounded-2xl bg-white/80 backdrop-blur-md border border-gray-200 shadow-xl hover:shadow-2xl transition-all">
                <div className="inline-flex items-center justify-center w-14 h-14 rounded-xl bg-green-100">
                  <Phone className="h-6 w-6 text-green-600" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-1">
                    Phone
                  </h3>
                  <a
                    href="tel:+919970283329"
                    className="text-gray-600 hover:text-green-600 transition-colors"
                  >
                    +91-9970283329
                  </a>
                </div>
              </div>

              {/* Email Card */}
              <div className="flex items-start space-x-4 p-6 rounded-2xl bg-white/80 backdrop-blur-md border border-gray-200 shadow-xl hover:shadow-2xl transition-all">
                <div className="inline-flex items-center justify-center w-14 h-14 rounded-xl bg-orange-100">
                  <Mail className="h-6 w-6 text-orange-600" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-1">
                    Email
                  </h3>
                  <a
                    href="mailto:contact@eyeqlytics.com"
                    className="text-gray-600 hover:text-orange-600 transition-colors"
                  >
                    contact@eyeqlytics.com
                  </a>
                </div>
              </div>

              {/* Website Card */}
              <div className="flex items-start space-x-4 p-6 rounded-2xl bg-white/80 backdrop-blur-md border border-gray-200 shadow-xl hover:shadow-2xl transition-all">
                <div className="inline-flex items-center justify-center w-14 h-14 rounded-xl bg-purple-100">
                  <Globe className="h-6 w-6 text-purple-600" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-1">
                    Website
                  </h3>
                  <p className="text-gray-600">www.eyeqlytics.com</p>
                </div>
              </div>
            </motion.div>

            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="bg-white/80 backdrop-blur-md border border-gray-200 shadow-xl rounded-2xl p-6 sm:p-8 max-w-xl w-full mx-auto transition-all duration-300"
            >
              {submitted ? (
                <div className="text-center">
                  <CheckCircle className="h-16 w-16 text-green-600 mx-auto mb-4" />
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">
                    Thank You!
                  </h3>
                  <p className="text-gray-600 mb-6">
                    We've received your message and will get back to you within
                    24 hours.
                  </p>
                  <button
                    onClick={() => setSubmitted(false)}
                    className="text-blue-600 hover:text-blue-700 font-medium"
                  >
                    Send Another Message
                  </button>
                </div>
              ) : (
                <>
                  <h3 className="text-2xl font-bold text-gray-900 mb-6">
                    Contact Form
                  </h3>
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Name
                      </label>
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white text-gray-900 placeholder-gray-500"
                        placeholder="Your full name"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Email
                      </label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white text-gray-900 placeholder-gray-500"
                        placeholder="your@email.com"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Organization
                      </label>
                      <input
                        type="text"
                        name="organization"
                        value={formData.organization}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white text-gray-900 placeholder-gray-500"
                        placeholder="Your organization (optional)"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Message
                      </label>
                      <textarea
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        required
                        rows={6}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white text-gray-900 placeholder-gray-500"
                        placeholder="Tell us about your project or how we can help..."
                      />
                    </div>

                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full flex items-center justify-center px-8 py-4 text-white font-semibold rounded-lg transition-colors duration-200 shadow-lg hover:shadow-xl disabled:opacity-60"
                      style={{
                        background:
                          "linear-gradient(to right, #0039a6, #04327b)",
                      }}
                    >
                      {isSubmitting ? "Sending..." : "Send"}
                      <Send className="ml-2 h-5 w-5" />
                    </button>
                  </form>
                </>
              )}
            </motion.div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
        <div className="w-full px-4 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Visit Our Office
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Located in Chhatrapati Sambhaji Nagar, Maharashtra. We're always
              happy to meet in person to discuss your project requirements and
              explore collaboration opportunities.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <LocationMap />
          </motion.div>
        </div>
      </section>
    </>
  );
}
