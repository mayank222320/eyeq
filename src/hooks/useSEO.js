import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

export const useSEO = (seoData) => {
  const location = useLocation();

  useEffect(() => {
    // Update page title
    if (seoData.title) {
      document.title = seoData.title;
    }

    // Update meta description
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription && seoData.description) {
      metaDescription.setAttribute('content', seoData.description);
    }

    // Update canonical URL
    let canonicalLink = document.querySelector('link[rel="canonical"]');
    if (seoData.canonicalUrl) {
      if (!canonicalLink) {
        canonicalLink = document.createElement('link');
        canonicalLink.rel = 'canonical';
        document.head.appendChild(canonicalLink);
      }
      canonicalLink.href = seoData.canonicalUrl;
    }

    // Update Open Graph tags
    const updateOGTag = (property, content) => {
      let ogTag = document.querySelector(`meta[property="${property}"]`);
      if (!ogTag) {
        ogTag = document.createElement('meta');
        ogTag.setAttribute('property', property);
        document.head.appendChild(ogTag);
      }
      ogTag.setAttribute('content', content);
    };

    if (seoData.ogTitle) updateOGTag('og:title', seoData.ogTitle);
    if (seoData.ogDescription) updateOGTag('og:description', seoData.ogDescription);
    if (seoData.ogImage) updateOGTag('og:image', seoData.ogImage);
    if (seoData.ogUrl) updateOGTag('og:url', seoData.ogUrl);

  }, [seoData, location]);
};

export const usePageTracking = () => {
  const location = useLocation();

  useEffect(() => {
    // Google Analytics page tracking
    if (typeof gtag !== 'undefined') {
      gtag('config', 'GA_MEASUREMENT_ID', {
        page_path: location.pathname + location.search,
      });
    }

    // Other analytics tracking can be added here
  }, [location]);
};