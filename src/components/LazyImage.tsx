import { useState } from 'react';

type LazyImageProps = {
  src: string;
  alt: string;
  className?: string;
  loading?: 'lazy' | 'eager';
};

export default function LazyImage({ src, alt, className = '', loading = 'lazy' }: LazyImageProps) {
  const [loaded, setLoaded] = useState(false);
  return (
    <img
      src={src}
      alt={alt}
      loading={loading}
      className={`lazy-fade ${loaded ? 'loaded' : ''} ${className}`}
      onLoad={() => setLoaded(true)}
    />
  );
}
