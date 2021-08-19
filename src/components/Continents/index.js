import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import ContinentCard from "./ContinentCard";
import { Spin } from "antd";
import "./Continents.scss";

const Continents = ({ loading, continents, countryLoading, country }) => {
  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 2,
      paritialVisibilityGutter: 39,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 1,
      paritialVisibilityGutter: 0,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
      paritialVisibilityGutter: 0,
    },
  };

  return (
    <div className="covicalc--continents">
      <div className="section-title">
        <h1 className="covicalc--title covicalc--mb-large covicalc--text-black">
          Per continent
        </h1>
      </div>
      {loading ? (
        <div className="loading--container">
          <p>
            <Spin />
          </p>
        </div>
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
  );
};

export default Continents;
