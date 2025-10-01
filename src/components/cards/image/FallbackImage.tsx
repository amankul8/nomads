import React, { useState } from "react";
import Image, { ImageProps } from "next/image";
import { DEFAULT_IMAGE_URL } from "@/config";

interface FallbackImageProps extends Omit<ImageProps, "src"> {
  src: string;
  fallbackSrc?: string;
}

export const FallbackImage: React.FC<FallbackImageProps> = ({
  src,
  fallbackSrc = DEFAULT_IMAGE_URL,
  ...props
}) => {
  const [imgSrc, setImgSrc] = useState(src);

  return (
    <Image
      src={imgSrc}
      onError={() => setImgSrc(fallbackSrc)}
      {...props}
    />
  );
};
