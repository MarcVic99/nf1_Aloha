import "./Carousel.css"

import Carousel from "./Carousel";
import React from "react";

const slides = [
  {
    title: "Property photo 1",
    color: "#56777A",
      src:"https://res.cloudinary.com/dkfwkusnd/image/upload/v1581070767/Alohaimages/ue201lqxqypokccb8kof.jpg"
  },
  {
    title: "Property photo 2",
    color: "#84ACAC",
      src:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRgeeTmhqRAOsP7wZ5zPj0PpJ0Myxf0CbGDjUyvPhe7HMqeca5baw&s"
  },
  {
    title: "Property photo 3",
    color: "#FBA434",
      src: "https://res.cloudinary.com/dkfwkusnd/image/upload/v1581073476/Alohaimages/lgvsgfqg21nohiolqrth.jpg"
  },
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
                <img src={slide.src} className="photo1" alt="Photo1"/>
            </div>
          ))}
        </div>
      </div>

  );
}