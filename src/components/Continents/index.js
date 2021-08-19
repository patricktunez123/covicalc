import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import ContinentCard from "./ContinentCard";
import "./Continents.scss";

const Continents = ({ loading, continents }) => {
  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
      paritialVisibilityGutter: 50,
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

  return (
    <div className="covicalc--continents">
      <div className="info__bottom">
        <div className="info__bottom--card">
          {[...Array(6)].map((_, index) => (
            <div key={index} className="info">
              <h1>11,234</h1>
              <span className="section-sub-title">Tests</span>
              <span className="text-muted">2,234,234</span>
            </div>
          ))}
        </div>
      </div>
      <div className="continents--container">
        {loading ? (
          <h1>Loading</h1>
        ) : (
          <Carousel
            partialVisible={true}
            centerMode={false}
            arrows
            slidesToSlide={1}
            itemClass="image-item"
            responsive={responsive}
          >
            {continents &&
              continents.map((continent) => (
                <ContinentCard key={continent?.continent} {...continent} />
              ))}
          </Carousel>
        )}
      </div>
    </div>
  );
};

export default Continents;
