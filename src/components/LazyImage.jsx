import { useState, useEffect, useRef } from 'react';
import { loadAndCacheImage } from '../utils/imageCache';

export default function LazyImage({ src, alt, className, style, placeholderType = 'blur' }) {
  const [imageBase64, setImageBase64] = useState(null);
  const [isVisible, setIsVisible] = useState(false);
  const imgRef = useRef(null);

  // 1. Intersection Observer to detect when image enters viewport
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect(); // Stop observing once it enters
        }
      },
      {
        rootMargin: '100px 0px', // Start loading 100px before it scrolls into view
        threshold: 0.01
      }
    );

    if (imgRef.current) {
      observer.observe(imgRef.current);
    }

    return () => observer.disconnect();
  }, []);

  // 2. Fetch Base64 from IndexedDB cache / Network when visible
  useEffect(() => {
    if (!isVisible || !src) return;

    let isMounted = true;
    
    // Check IndexedDB
    loadAndCacheImage(src).then((cachedB64) => {
      if (isMounted) {
        setImageBase64(cachedB64);
      }
    }).catch(err => {
      console.warn('LazyImage Error: ', err);
      // fallback to direct src
      if (isMounted) setImageBase64(src);
    });

    return () => { isMounted = false; };
  }, [isVisible, src]);

  // Loading skeleton state
  if (!imageBase64) {
    return (
      <div 
        ref={imgRef} 
        className={`bg-slate-200 dark:bg-slate-700 animate-pulse ${className}`} 
        style={style}
      />
    );
  }

  // Loaded state (instant via base64 or network fallback)
  return (
    <img 
      ref={imgRef}
      src={imageBase64} 
      alt={alt} 
      className={`transition-opacity duration-500 ease-in-out ${className}`} 
      style={style}
      loading="lazy"
    />
  );
}
