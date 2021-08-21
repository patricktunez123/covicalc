import React from "react";
import "./Continents.scss";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import Continent from "./Continent";

export default function ContinentCard() {
  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
      paritialVisibilityGutter: 60,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
      paritialVisibilityGutter: 50,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
      paritialVisibilityGutter: 0,
    },
  };
  const games = [];
  for (var i = 1; i < 14; i++) {
    games.push(<Continent number={i} key={i} />);
  }
  return (
    <Carousel
      partialVisible={true}
      centerMode={false}
      arrows
      slidesToSlide={1}
      itemClass="image-item"
      responsive={responsive}
    >
      {games.map((item) => item)}
    </Carousel>
  );
}
