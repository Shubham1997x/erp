"use client";

import { useState } from "react";
import Image, { ImageProps } from "next/image";
import { ImageOff } from "lucide-react";

interface ImageWithFallbackProps extends Omit<ImageProps, "onError"> {
  fallbackSrc?: string;
  fallbackText?: string;
}

export function ImageWithFallback({
  src,
  alt,
  fallbackSrc,
  fallbackText = "Image not available",
  ...props
}: ImageWithFallbackProps) {
  const [imgError, setImgError] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  const handleError = () => {
    setImgError(true);
    setIsLoading(false);
  };

  const handleLoad = () => {
    setIsLoading(false);
  };

  if (imgError) {
    if (fallbackSrc) {
      return (
        <Image
          src={fallbackSrc}
          alt={alt}
          onError={handleError}
          onLoad={handleLoad}
          {...props}
        />
      );
    }

    return (
      <div
        className="flex items-center justify-center bg-muted text-muted-foreground"
        style={{
          width: props.width || "100%",
          height: props.height || "100%",
          minHeight: typeof props.height === "number" ? `${props.height}px` : "200px",
        }}
      >
        <div className="text-center p-4">
          <ImageOff className="h-8 w-8 mx-auto mb-2 opacity-50" />
          <p className="text-xs">{fallbackText}</p>
        </div>
      </div>
    );
  }

  return (
    <Image
      src={src}
      alt={alt}
      onError={handleError}
      onLoad={handleLoad}
      {...props}
    />
  );
}

