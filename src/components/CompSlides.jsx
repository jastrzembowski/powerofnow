import React from "react";
import Slider from "react-slick";


import logo4 from "../images/comp/logo4.png";
import logo5 from "../images/comp/logo5.png";
import logo6 from "../images/comp/logo6.png";
import logo7 from "../images/comp/logo7.png";
import logo8 from "../images/comp/logo8.png";
import logo9 from "../images/comp/logo9.png";

function CompSlides() {
  const settings = {
    slidesToShow: 6,
    slidesToScroll: 1,
    autoplay: true,
    dots: false,
    arrows: false,
    autoplaySpeed: 0,
    speed: 3000,
    cssEase: "linear",
    infinite: true,
    responsive: [
      {
        breakpoint: 700,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
        },
      },
    ],
  };

  return (
    <div className="comp-slides-container">
      <h1>We are trusted by:</h1>
      <Slider {...settings}>
        <img src={logo4} alt="comp-logo" className="comp-logo"></img>
        <img src={logo5} alt="comp-logo" className="comp-logo"></img>
        <img src={logo6} alt="comp-logo" className="comp-logo"></img>
        <img src={logo7} alt="comp-logo" className="comp-logo"></img>
        <img src={logo8} alt="comp-logo" className="comp-logo"></img>
        <img src={logo9} alt="comp-logo" className="comp-logo"></img>
        <img src={logo4} alt="comp-logo" className="comp-logo"></img>
        <img src={logo5} alt="comp-logo" className="comp-logo"></img>
        <img src={logo6} alt="comp-logo" className="comp-logo"></img>
        <img src={logo7} alt="comp-logo" className="comp-logo"></img>
        <img src={logo8} alt="comp-logo" className="comp-logo"></img>
        <img src={logo9} alt="comp-logo" className="comp-logo"></img>
      </Slider>
    </div>
  );
}

export default CompSlides;
