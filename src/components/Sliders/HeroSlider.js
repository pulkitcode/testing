import React from "react";

import Slider from "react-slick";

const HeroSlider = () => {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
  };
  return (
    <Slider {...settings}>
      <div>
        <h3>
          <img
            src="https://demo.ecommercehtml.com/templates/8/assets/images/content-card-5/content-2.jpg"
            alt="altt"
          />
        </h3>
      </div>
      <div>
        <h3>
          <img
            src="https://demo.ecommercehtml.com/templates/8/assets/images/content-card-5/content-2.jpg"
            alt="altt"
          />
        </h3>
      </div>
      <div>
        <h3>
          <img
            src="https://demo.ecommercehtml.com/templates/8/assets/images/content-card-5/content-2.jpg"
            alt="altt"
          />
        </h3>
      </div>
    </Slider>
  );
};

export default HeroSlider;
