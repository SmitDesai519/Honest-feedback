"use client";

import React from "react";
import { Carousel } from "./ui/carousel";
import Autoplay from "embla-carousel-autoplay";

interface MessageCarouselProps {
  children: React.ReactNode;
}

const MessageCarousel = ({ children }: MessageCarouselProps) => {
  return (
    <Carousel
      plugins={[Autoplay({ delay: 2000 })]}
      className="w-full max-w-lg md:max-w-xl"
    >
      {children}
    </Carousel>
  );
};

export default MessageCarousel;
