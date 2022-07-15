import React from "react";
import Slider from "react-slick";

import sliderMan from "../images/slider/slider-man-1.png";
import sliderWoman1 from "../images/slider/slider-woman-1.png";
import sliderImg from "../images/slider/slider-img.png";
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
      <div className="slider-container" id="header">
        <Slider {...settings}>
          <div>
            <div className="slider-box" style={{ display: "flex" }}>
              <div className="slider-text">
                <h1>Power of Now makes empoloyees happy</h1>
                <p>
                  Our online courses show proven, holistic and simple daily
                  practices{" "}
                </p>
                <div className="contact-button-box">
                  <a href="/contact">Contact us</a>
                </div>
              </div>
              <img
                src={sliderImg}
                alt="man smiling"
                className="slider-img-lana"
              ></img>
            </div>
          </div>
          <div>
            <div className="slider-box" style={{ display: "flex" }}>
              <div className="slider-text">
                <h1>How does it work?</h1>
                <p>
                  Our online platform provides diverse ways of content <br />&
                  learning (video, audio & written content){" "}
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
            </div>
          </div>
          <div>
            <div className="slider-box" style={{ display: "flex" }}>
              <div className="slider-text">
                <h1>What do we offer?</h1>
                <p>
                  Our specialist’s help to self-connect, relax, and prevent
                  stress and burnout
                </p>
                <div className="contact-button-box">
                  <a href="/contact">Contact us</a>
                </div>
              </div>
              <img
                src={sliderMan}
                alt="man smiling"
                className="slider-img"
              ></img>
            </div>
          </div>
        </Slider>
      </div>
    </>
  );
}

export default Header2;
