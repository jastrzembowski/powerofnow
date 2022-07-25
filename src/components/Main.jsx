import React from "react";

import bg3 from "../images/bg3.jpg";
import mockup from "../images/mockup.jpg";
export default function Main() {
  return (
    <>
      <div className="main-box" id="about">
        <h1 className="main-box-header">
          Power of now- simplified, holistic and practical knowledge
          <br />
          for employees well-big in one place{" "}
        </h1>
        <div className="main-wrapper">
          <div className="main-box-icons__holder">
            <div className="main-box-top">
              <i class="fa-solid fa-seedling"></i>
              <p className="main-box-title">Holistic approach</p>
            </div>
            <ul className="main-box-list">
              <p>Combined knowledge from:</p>
              <li>psychology</li>
              <li>mindfullness</li>
              <li>business</li>
              <li>meditation</li>
              <li>breathing</li>
            </ul>
          </div>
          <div className="main-box-icons__holder">
            <div className="main-box-top">
              <i class="fa-solid fa-earth-europe"></i>
              <p className="main-box-title">International specialists </p>
            </div>
            <ul className="main-box-list">
              <li>
                content is created by experienced and practical mental health
                professionals
              </li>
              <li>
                our proven and practical knowledge reached 8 000 employees
              </li>
            </ul>
          </div>
          <div className="main-box-icons__holder">
            <div className="main-box-top">
              <i class="fa-solid fa-laptop-file"></i>{" "}
              <p className="main-box-title">Opportunity to blended learning </p>
            </div>
            <ul className="main-box-list">
              <li>audio content</li>
              <li>video content</li>
              <li>written content</li>
              <li>weekly addidtions</li>
            </ul>
          </div>
          <div className="main-box-icons__holder">
            <div className="main-box-top">
              <i class="fa-solid fa-graduation-cap"></i>{" "}
              <p className="main-box-title">
                Self-help & easy to learn courses{" "}
              </p>
            </div>
            <ul className="main-box-list">
              <li>well structured courses with practical exercises</li>
            </ul>
          </div>

          <div className="main-box-icons__holder">
            <div className="main-box-top">
              <i class="fa-solid fa-chart-simple"></i>{" "}
              <p className="main-box-title">Platform measurement features </p>
            </div>
            <ul className="main-box-list">
              <li>you can track and analyze your personal results</li>
            </ul>
          </div>
          <div className="main-box-icons__holder">
            <div className="main-box-top">
              <i class="fa-solid fa-shuttle-space"></i>{" "}
              <p className="main-box-title">No experience needed to start </p>
            </div>
            <ul className="main-box-list">
              {" "}
              <li> you can start implementing knowledge right away</li>
            </ul>{" "}
          </div>
        </div>
        <div className="mockup-img-holder">
          <img src={mockup} alt="mockup" className="mockup-img"></img>
        </div>
      </div>
      <div className="about-box">
        <h3>Find it out all by yourself.</h3>
        <h1>How can you use the platform:</h1>
        <img src={bg3} alt="bg3" className="bg3"></img>
        <h1 className="vid-text">
          Try to test our platform
          <br />
          and its features for free!
        </h1>
        <div className="vid-button">
          <a href="https://powerofnow.ec3l.com/log">Test our platform</a>
        </div>
      </div>
    </>
  );
}
