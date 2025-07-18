import React, { useState, useRef, useEffect } from 'react';
import { getOptimizedImageProps } from '../../utils/imageOptimization';

const OptimizedImage = ({ 
  src, 
  alt, 
  className = '', 
  sizes = '100vw',
  priority = false,
  ...props 
}) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [hasError, setHasError] = useState(false);
  const imgRef = useRef(null);

  const imageProps = getOptimizedImageProps(src, alt, sizes);

  useEffect(() => {
    if (priority && imgRef.current) {
      // For priority images, load immediately
      const img = imgRef.current;
      if (img.complete) {
        setIsLoaded(true);
      }
    }
  }, [priority]);

  const handleLoad = () => {
    setIsLoaded(true);
  };

  const handleError = () => {
    setHasError(true);
  };

  if (hasError) {
    return (
      <div className={`bg-gray-200 flex items-center justify-center ${className}`}>
        <span className="text-gray-500 text-sm">Image failed to load</span>
      </div>
    );
  }

  return (
    <picture>
      {/* WebP sources for modern browsers */}
      <source 
        srcSet={imageProps.sources.webp} 
        sizes={sizes} 
        type="image/webp" 
      />
      
      {/* Fallback for older browsers */}
      <img
        ref={imgRef}
        src={priority ? src : undefined}
        data-src={priority ? undefined : src}
        srcSet={priority ? imageProps.sources.fallback : undefined}
        data-srcset={priority ? undefined : imageProps.sources.fallback}
        alt={alt}
        sizes={sizes}
        loading={priority ? 'eager' : 'lazy'}
        decoding="async"
        className={`transition-opacity duration-300 ${
          isLoaded ? 'opacity-100' : 'opacity-0'
        } ${priority ? '' : 'lazy'} ${className}`}
        onLoad={handleLoad}
        onError={handleError}
        {...props}
      />
    </picture>
  );
};

export default OptimizedImage;