// ImageCarousel.js

import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const ImageCarousel = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,       // Auto play the carousel
    autoplaySpeed: 1500
  };

  return (
    <div className="carousel-container">
      <Slider {...settings}>
        <div>
          <img src="src/assets/Carousel_img/1.jpg" alt="Slide 1" />
        </div>
        <div>
          <img src="src/assets/Carousel_img/2.jpg" alt="Slide 2" />
        </div>
        <div>
          <img src="src/assets/Carousel_img/3.jpg" alt="Slide 3" />
        </div>
        <div>
          <img src="src/assets/Carousel_img/4.jpg" alt="Slide 4" />
        </div>
        <div>
          <img src="src/assets/Carousel_img/5.jpg" alt="Slide 5" />
        </div>
        <div>
          <img src="src/assets/Carousel_img/6.jpg" alt="Slide 6" />
        </div>
        <div>
          <img src="src/assets/Carousel_img/7.jpg" alt="Slide 7" />
        </div>
        <div>
          <img src="src/assets/Carousel_img/8.jpg" alt="Slide 8" />
        </div>
        <div>
          <img src="src/assets/Carousel_img/9.jpg" alt="Slide 9" />
        </div>
        <div>
          <img src="src/assets/Carousel_img/10.jpg" alt="Slide 10" />
        </div>
        <div>
          <img src="src/assets/Carousel_img/11.jpg" alt="Slide 11" />
        </div>
        
        <div>
          <img src="src/assets/Carousel_img/12.jpg" alt="Slide 12" />
        </div>
        <div>
          <img src="src/assets/Carousel_img/13.jpg" alt="Slide 13" />
        </div>
        <div>
          <img src="src/assets/Carousel_img/14.jpg" alt="Slide 14" />
        </div>
        <div>
          <img src="src/assets/Carousel_img/15.jpg" alt="Slide 15" />
        </div>
        <div>
          <img src="src/assets/Carousel_img/16.jpg" alt="Slide 16" />
        </div>
        <div>
          <img src="src/assets/Carousel_img/17.jpg" alt="Slide 17" />
        </div>
        <div>
          <img src="src/assets/Carousel_img/18.jpg" alt="Slide 18" />
        </div>
        <div>
          <img src="src/assets/Carousel_img/19.jpg" alt="Slide 19" />
        </div>
        <div>
          <img src="src/assets/Carousel_img/20.jpg" alt="Slide 20" />
        </div>
        {/* Add more slides as needed */}
      </Slider>
    </div>
  );
};

export default ImageCarousel;
