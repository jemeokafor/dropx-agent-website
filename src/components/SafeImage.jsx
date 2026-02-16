import { useState } from 'react';

export default function SafeImage({ src, alt, className }) {
  const [failed, setFailed] = useState(false);

  if (failed) {
    return (
      <div className={`image-fallback ${className || ''}`} role="img" aria-label={`${alt} placeholder`}>
        <span>Image preview unavailable</span>
      </div>
    );
  }

  return <img src={src} alt={alt} className={className} onError={() => setFailed(true)} loading="lazy" />;
}
