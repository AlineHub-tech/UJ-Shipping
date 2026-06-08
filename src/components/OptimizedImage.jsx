import React, { useState } from 'react';

const OptimizedImage = ({
  src,
  alt,
  className,
  webpFileName,
  eager = false,
  width,
  height,
  style,
  ...props
}) => {
  const [useFallback, setUseFallback] = useState(false);

  const handleError = (event) => {
    if (!useFallback) {
      setUseFallback(true);
      event.target.src = src;
    }
  };

  return (
    <picture>
      {webpFileName && !useFallback ? (
        <source
          type="image/webp"
          srcSet={`/optimized-images/${webpFileName}`}
        />
      ) : null}
      <img
        src={src}
        alt={alt}
        className={className}
        loading={eager ? 'eager' : 'lazy'}
        decoding="async"
        width={width}
        height={height}
        style={style}
        onError={handleError}
        {...props}
      />
    </picture>
  );
};

export default OptimizedImage;
