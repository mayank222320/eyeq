// Image optimization utilities

export const generateWebPSources = (imagePath, sizes = [320, 640, 768, 1024, 1280]) => {
  const basePath = imagePath.split('.')[0];
  const extension = imagePath.split('.').pop();
  
  return {
    webp: sizes.map(size => `${basePath}-${size}w.webp ${size}w`).join(', '),
    fallback: sizes.map(size => `${basePath}-${size}w.${extension} ${size}w`).join(', ')
  };
};

export const getOptimizedImageProps = (src, alt, sizes = '100vw') => {
  const sources = generateWebPSources(src);
  
  return {
    src,
    alt,
    sizes,
    loading: 'lazy',
    decoding: 'async',
    sources
  };
};

// Lazy loading intersection observer
export const createImageObserver = () => {
  if ('IntersectionObserver' in window) {
    return new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const img = entry.target;
          if (img.dataset.src) {
            img.src = img.dataset.src;
            img.removeAttribute('data-src');
          }
          if (img.dataset.srcset) {
            img.srcset = img.dataset.srcset;
            img.removeAttribute('data-srcset');
          }
          img.classList.remove('lazy');
          img.classList.add('loaded');
        }
      });
    }, {
      rootMargin: '50px 0px',
      threshold: 0.01
    });
  }
  return null;
};

// Email obfuscation
export const obfuscateEmail = (email) => {
  return email.split('').reverse().join('');
};

export const deobfuscateEmail = (obfuscatedEmail) => {
  return obfuscatedEmail.split('').reverse().join('');
};