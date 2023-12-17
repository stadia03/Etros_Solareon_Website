// ImageCarousel.js

import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import {carousel_img} from "../constants/index"


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
       {carousel_img.map((img,index)=>{
       
        return (
          <div>
          <img src={img.img} alt= {`slide ${index}`} />
        </div>
        )
       })}
       
      </Slider>
    </div>
  );
};

export default ImageCarousel;
