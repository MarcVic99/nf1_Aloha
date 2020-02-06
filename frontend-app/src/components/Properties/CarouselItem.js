import "./Carousel.css"

import Carousel from "./Carousel";
import React from "react";

const slides = [
  {
    title: "Property photo 1",
    color: "#56777A"
  },
  {
    title: "Property photo 2",
    color: "#84ACAC"
  },
  {
    title: "Property photo 3",
    color: "#FBA434",
      src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRgeeTmhqRAOsP7wZ5zPj0PpJ0Myxf0CbGDjUyvPhe7HMqeca5baw&s"
  }
];

export default function CarouselItem() {
  // use addItem for anything that needs loading confirmation like images or embeds
  const { offset, addItem } = Carousel({
    total: slides.length,
    enabled: true,
    useLoaded: false,
    speed: 2000
  });

  return (


      <div className="container">
        <div
          className="scroller"
          style={{
            transform: `translate3d(-${offset * 300}px,0,0)`,
            width: `${slides.length * 300}px`
          }}
        >
          {slides.map((slide, index) => (
            <div
              key={slide.title}
              className="slide"
              style={{ href: "slide.src"}}
            >
              {slide.title}
            </div>
          ))}
        </div>
      </div>

  );
}