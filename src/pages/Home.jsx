import React from "react";
import HeroSection from "../components/Home/HeroSection";
import VisionMissionSection from "../components/Home/VisionMissionSection";
import FeaturedProductSection from "../components/Home/FeaturedProductSection";
import IndustriesSection from "../components/Home/IndustriesSection";
import TestimonialsSection from "../components/Home/TestimonialsSection";
import CTASection from "../components/Home/CTASection";
import SEOHead from "../components/SEO/SEOHead";
import { seoConfig } from "../utils/seo";
import { organizationSchema, websiteSchema } from "../components/SEO/StructuredData";


export default function Home() {
  const seo = seoConfig.home;
  
  return (
    <>
      <SEOHead
        title={seo.title}
        description={seo.description}
        keywords={seo.keywords}
        canonicalUrl={`https://eyeqlytics.com${seo.path}`}
        structuredData={[organizationSchema, websiteSchema]}
      />

      <HeroSection />
      <VisionMissionSection />
      <FeaturedProductSection />
      <IndustriesSection />
      <TestimonialsSection />
      <CTASection />
    </>
  );
}
