import React from "react";
import { Helmet } from "react-helmet-async";
import HeroSection from "../components/Home/HeroSection";
import VisionMissionSection from "../components/Home/VisionMissionSection";
import FeaturedProductSection from "../components/Home/FeaturedProductSection";
import IndustriesSection from "../components/Home/IndustriesSection";
import TestimonialsSection from "../components/Home/TestimonialsSection";
import CTASection from "../components/Home/CTASection";

export default function Home() {
  return (
    <>
      <Helmet>
        <title>EyeQlytics Technologies</title>
        <meta
          name="description"
          content="EyeQlytics Tech Pvt. Ltd. - Indian GovTech and B2B product innovation company. From Code to Capital. Empowering government agencies, businesses, and communities with scalable, impact-driven technology solutions including CopMap for police departments."
        />
        <meta
          name="keywords"
          content="GovTech India, Public Systems, Custom Software Development, CopMap, Government Technology, B2B Solutions, Police Technology, Maharashtra, Chhatrapati Sambhaji Nagar,Law Enforcement operational excellence, data-driven SaaS"
        />
        <meta name="author" content="EyeQlytics Tech Pvt. Ltd." />
        <link rel="canonical" href="https://eyeqlytics.in/" />

        {/* Open Graph */}
        <meta
          property="og:title"
          content="EyeQlytics - Engineering operational excellence in government and enterprise"
        />
        <meta
          property="og:description"
          content="Indian GovTech company empowering government agencies with scalable technology solutions. CopMap for police departments now live in Maharashtra."
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://eyeqlytics.in/" />

        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="EyeQlytics - GovTech Solutions India"
        />
        <meta
          name="twitter:description"
          content="Custom technology solutions for government and enterprise. CopMap live in Maharashtra police departments."
        />

        {/* Structured Data */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Organization",
            name: "EyeQlytics Tech Pvt. Ltd.",
            url: "https://eyeqlytics.in",
            logo: "https://eyeqlytics.in/logo.png",
            description:
              "Indian GovTech and B2B product innovation company focused on building tailored digital solutions for underserved sectors",
            address: {
              "@type": "PostalAddress",
              streetAddress: "10/81, Near SJP Petrol Pump, Bidkin",
              addressLocality: "Chhatrapati Sambhaji Nagar",
              addressRegion: "Maharashtra",
              postalCode: "431015",
              addressCountry: "IN",
            },
            contactPoint: {
              "@type": "ContactPoint",
              telephone: "+91-9970283329",
              contactType: "customer service",
            },
          })}
        </script>
      </Helmet>

      <HeroSection />
      <VisionMissionSection />
      <FeaturedProductSection />
      <IndustriesSection />
      <TestimonialsSection />
      <CTASection />
    </>
  );
}