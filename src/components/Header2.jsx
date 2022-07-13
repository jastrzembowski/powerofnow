import React from "react";
import Slider from "react-slick";

import sliderMan from "../images/slider/slider-man-1.png";
import sliderWoman1 from "../images/slider/slider-woman-1.png";
function Header2() {
  const settings = {
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    dots: false,
    arrows: true,
    autoplaySpeed: 5000,
    infinite: true,
    responsive: [
      {
        breakpoint: 700,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
        },
      },
    ],
  };
  return (
    <>
      <div className="slider-container">
        <Slider {...settings}>
            <div>
          <div className="slider-box" style={{display: "flex"}}>
            <div className="slider-text">
                <h1>Lorem ipsum dolor sit amet.</h1>
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae consequatur dolores corporis incidunt illum eveniet magnam animi fugit dolorum. Sed adipisci dolores voluptas consectetur recusandae saepe ullam, exercitationem deleniti minus?
                </p>
                <div className="contact-button-box">
                    <a href="/contact">Contact us</a>
                </div>
            </div>
            <img src={sliderMan} alt="man smiling" className="slider-img"></img>
          </div></div><div>
          <div className="slider-box" style={{display: "flex"}}>
          <div className="slider-text">
                <h1>Lorem ipsum dolor sit amet.</h1>
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae consequatur dolores corporis incidunt illum eveniet magnam animi fugit dolorum. Sed adipisci dolores voluptas consectetur recusandae saepe ullam, exercitationem deleniti minus?
                </p>
                <div className="contact-button-box">
                    <a href="/contact">Contact us</a>
                </div>
            </div>
            <img
              src={sliderWoman1}
              alt="man smiling"
              className="slider-img"
            ></img>
          </div></div>
        </Slider>
      </div>
    </>
  );
}

export default Header2;
