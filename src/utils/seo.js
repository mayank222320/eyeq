// SEO Utility Functions

export const generatePageTitle = (pageTitle, includeCompany = true) => {
  const companyName = "EyeQlytics";
  return includeCompany ? `${pageTitle} | ${companyName}` : pageTitle;
};

export const truncateDescription = (description, maxLength = 160) => {
  if (description.length <= maxLength) return description;
  return description.substring(0, maxLength - 3) + '...';
};

export const generateKeywords = (baseKeywords, pageSpecificKeywords = []) => {
  const defaultKeywords = [
    'EyeQlytics',
    'GovTech India',
    'Government Technology',
    'Custom Software Development',
    'Maharashtra',
    'Chhatrapati Sambhaji Nagar'
  ];
  
  return [...defaultKeywords, ...baseKeywords, ...pageSpecificKeywords].join(', ');
};

export const generateCanonicalUrl = (path) => {
  const baseUrl = 'https://eyeqlytics.com';
  return `${baseUrl}${path}`;
};

export const generateOGImage = (title, description) => {
  // This would typically generate a dynamic OG image
  // For now, return the default image
  return 'https://eyeqlytics.com/og-image.jpg';
};

// Page-specific SEO configurations
export const seoConfig = {
  home: {
    title: "EyeQlytics - Engineering Operational Excellence in Government & Enterprise",
    description: "Indian GovTech company empowering government agencies with scalable technology solutions. CopMap for police departments now live in Maharashtra.",
    keywords: "GovTech India, Public Systems, Custom Software Development, CopMap, Government Technology, B2B Solutions, Police Technology, Maharashtra, Law Enforcement operational excellence",
    path: "/"
  },
  about: {
    title: "Who We Are – The Team Behind India's Most Scalable Public Sector Tech Tools",
    description: "Founded by engineers and entrepreneurs passionate about public innovation, EyeQlytics began with CopMap to digitize India's police deployment workflows.",
    keywords: "EyeQlytics team, GovTech company India, police technology, CopMap founders, Maharashtra startup, public sector innovation",
    path: "/about"
  },
  services: {
    title: "Custom Software Development, GovTech Solutions & Digital Transformation Services",
    description: "End-to-End Digital Transformation Across Government, Enterprise & Complex Domains. Professional software development services for government and enterprise.",
    keywords: "custom software development, GovTech solutions, enterprise software, mobile app development, cloud services, system integration, digital transformation",
    path: "/services"
  },
  products: {
    title: "Intelligent Software Products for Real-World Problems",
    description: "CopMap - Revolutionary police command and control solution featuring live officer tracking, bandobast coordination, and real-time deployment management.",
    keywords: "CopMap, police technology, command control system, officer tracking, bandobast management, Maharashtra police, law enforcement software",
    path: "/products"
  },
  copmap: {
    title: "CopMap - Modern Police Command & Control System",
    description: "Revolutionary police command and control solution featuring live officer tracking, bandobast coordination, and real-time deployment management. Trusted by Maharashtra Police.",
    keywords: "CopMap, police technology, command control system, officer tracking, bandobast management, Maharashtra police, law enforcement software",
    path: "/products/copmap"
  },
  clients: {
    title: "Organizations and Institutions Backed by EyeQlytics Technology",
    description: "EyeQlytics is proud to collaborate with forward-thinking organizations across the public, private, and academic sectors.",
    keywords: "EyeQlytics clients, Maharashtra State Police, CopMap users, healthcare technology, educational partnerships, startup collaboration",
    path: "/clients"
  },
  careers: {
    title: "Join EyeQlytics — Where Impact Meets Engineering",
    description: "Open positions for Flutter Developer, Spring Boot Developer, DevOps Engineer, GovTech Project Manager, and internships.",
    keywords: "EyeQlytics careers, GovTech jobs India, Flutter developer jobs, Spring Boot developer, government technology careers, Maharashtra tech jobs",
    path: "/careers"
  },
  blog: {
    title: "Insights, Engineering, and Field Stories from the EyeQlytics Team",
    description: "At EyeQlytics, we share what we're building, learning, and reimagining — across sectors, stacks, and stories.",
    keywords: "EyeQlytics blog, GovTech insights, engineering stories, CopMap development, public innovation, system design",
    path: "/blog"
  },
  contact: {
    title: "Let's Build Something That Matters | Contact EyeQlytics",
    description: "Get in touch with EyeQlytics Tech Pvt. Ltd. Located at 10/81, Near SJP Petrol Pump, Bidkin, Chhatrapati Sambhaji Nagar 431105.",
    keywords: "contact EyeQlytics, software development company Maharashtra, GovTech solutions India, Chhatrapati Sambhaji Nagar tech company",
    path: "/contact"
  },
  legal: {
    title: "Legal - Terms of Use & Privacy Policy | EyeQlytics",
    description: "Terms of Use and Privacy Policy for EyeQlytics Tech Pvt. Ltd. Learn about our data protection practices and user rights.",
    keywords: "EyeQlytics privacy policy, terms of use, data protection, user rights, cookies policy",
    path: "/legal"
  }
};