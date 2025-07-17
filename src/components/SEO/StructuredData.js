// Structured Data Templates for SEO

export const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "EyeQlytics Tech Pvt. Ltd.",
  "alternateName": "EyeQlytics",
  "url": "https://eyeqlytics.com",
  "logo": "https://eyeqlytics.com/EyeQlytics_Technologies1.png",
  "description": "Indian GovTech and B2B product innovation company focused on building tailored digital solutions for underserved sectors",
  "foundingDate": "2020",
  "founders": [
    {
      "@type": "Person",
      "name": "EyeQlytics Founders"
    }
  ],
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "10/81, Near SJP Petrol Pump, Bidkin",
    "addressLocality": "Chhatrapati Sambhaji Nagar",
    "addressRegion": "Maharashtra",
    "postalCode": "431105",
    "addressCountry": "IN"
  },
  "contactPoint": [
    {
      "@type": "ContactPoint",
      "telephone": "+91-9970283329",
      "contactType": "customer service",
      "availableLanguage": ["English", "Hindi", "Marathi"]
    },
    {
      "@type": "ContactPoint",
      "email": "contact@eyeqlytics.com",
      "contactType": "customer service"
    }
  ],
  "sameAs": [
    "https://www.linkedin.com/company/eyeqlytics-technologies-pvt-ltd"
  ],
  "areaServed": {
    "@type": "Country",
    "name": "India"
  },
  "knowsAbout": [
    "Government Technology",
    "Custom Software Development",
    "Mobile App Development",
    "Web Development",
    "Police Technology",
    "Healthcare IT",
    "Digital Transformation"
  ]
};

export const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "name": "EyeQlytics",
  "url": "https://eyeqlytics.com",
  "description": "Engineering operational excellence in government and enterprise through intelligent systems",
  "publisher": {
    "@type": "Organization",
    "name": "EyeQlytics Tech Pvt. Ltd."
  },
  "potentialAction": {
    "@type": "SearchAction",
    "target": "https://eyeqlytics.com/search?q={search_term_string}",
    "query-input": "required name=search_term_string"
  }
};

export const softwareApplicationSchema = (productName, description, url) => ({
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  "name": productName,
  "description": description,
  "url": url,
  "applicationCategory": "BusinessApplication",
  "operatingSystem": "Web Browser, Android, iOS",
  "offers": {
    "@type": "Offer",
    "price": "0",
    "priceCurrency": "INR",
    "availability": "https://schema.org/InStock"
  },
  "provider": {
    "@type": "Organization",
    "name": "EyeQlytics Tech Pvt. Ltd."
  },
  "aggregateRating": {
    "@type": "AggregateRating",
    "ratingValue": "4.8",
    "ratingCount": "25",
    "bestRating": "5",
    "worstRating": "1"
  }
});

export const serviceSchema = (serviceName, description) => ({
  "@context": "https://schema.org",
  "@type": "Service",
  "name": serviceName,
  "description": description,
  "provider": {
    "@type": "Organization",
    "name": "EyeQlytics Tech Pvt. Ltd."
  },
  "areaServed": {
    "@type": "Country",
    "name": "India"
  },
  "serviceType": "Technology Services"
});

export const breadcrumbSchema = (items) => ({
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": items.map((item, index) => ({
    "@type": "ListItem",
    "position": index + 1,
    "name": item.name,
    "item": item.url
  }))
});

export const faqSchema = (faqs) => ({
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": faqs.map(faq => ({
    "@type": "Question",
    "name": faq.question,
    "acceptedAnswer": {
      "@type": "Answer",
      "text": faq.answer
    }
  }))
});

export const articleSchema = (title, description, author, datePublished, dateModified, image) => ({
  "@context": "https://schema.org",
  "@type": "Article",
  "headline": title,
  "description": description,
  "author": {
    "@type": "Person",
    "name": author
  },
  "publisher": {
    "@type": "Organization",
    "name": "EyeQlytics Tech Pvt. Ltd.",
    "logo": {
      "@type": "ImageObject",
      "url": "https://eyeqlytics.com/EyeQlytics_Technologies1.png"
    }
  },
  "datePublished": datePublished,
  "dateModified": dateModified,
  "image": image,
  "mainEntityOfPage": {
    "@type": "WebPage",
    "@id": "https://eyeqlytics.com"
  }
});