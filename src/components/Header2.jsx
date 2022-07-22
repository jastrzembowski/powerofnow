import React from "react";
import Slider from "react-slick";

import lana from "../images/slider/lana.png";
import wojt from "../images/slider/wojt.png";
import sliderImg from "../images/slider/slider-img.png";
import bgslid from "../images/bg-slid.png";

function Header2() {
  const settings = {
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    dots: true,
    arrows: false,
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
                <img src={bgslid} alt="bg slider" className="bg-slid"></img>
                <h1>Power of Now makes empoloyees happy</h1>
                <p>
                  Our online courses provide proven, holistic and simple daily
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
                <img src={bgslid} alt="bg slider" className="bg-slid"></img>

                <h1 className="short">How does it work?</h1>
                <p>
                  Our online platform provides diverse ways of <br />& learning
                  (video, audio & written content){" "}
                </p>
                <div className="contact-button-box">
                  <a href="/contact">Contact us</a>
                </div>
              </div>
              <img
                src={lana}
                alt="man smiling"
                className="slider-img slid-lana"
              ></img>
            </div>
          </div>
          <div>
            <div className="slider-box" style={{ display: "flex" }}>
              <div className="slider-text">
                <img src={bgslid} alt="bg slider" className="bg-slid"></img>

                <h1 className="short">What do we offer?</h1>
                <p>
                  Our specialist’s help to self-connect, relax, and prevent
                  stress and burnout
                </p>
                <div className="contact-button-box">
                  <a href="/contact">Contact us</a>
                </div>
              </div>
              <img
                src={wojt}
                alt="man smiling"
                className="slider-img slid-wojt"
              ></img>
            </div>
          </div>
        </Slider>
      </div>
    </>
  );
}

export default Header2;
