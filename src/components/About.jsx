import React from "react";
import who from "../images/stats/who.png";
import bett from "../images/stats/bett.jpg";

export default function About() {
  return (
    <div id="stats">
      <h1>Why mental health in the workplace matters:</h1>
      <div className="stats-container">
        <div className="stats-box">
          <figure class="chart" data-percent="86">
            <figcaption>86%</figcaption>
            <svg width="200" height="200">
              <circle
                class="outer"
                cx="95"
                cy="95"
                r="85"
                transform="rotate(-90, 95, 95)"
              />
            </svg>
          </figure>{" "}
          <p>
            86% of employees using well-being programs declare an increase in
            job satisfaction in their company
          </p>
        </div>
        <div className="stats-box">
          <figure class="chart" data-percent="95">
            <figcaption>95%</figcaption>

            <svg width="200" height="200">
              <circle
                class="outer"
                cx="95"
                cy="95"
                r="85"
                transform="rotate(-90, 95, 95)"
              />
            </svg>
          </figure>{" "}
          <p>
            95% of companies using well-being programs note an increase in the
            involvement of their employees.{" "}
          </p>
        </div>
        <div className="stats-box">
          <figure class="chart" data-percent="75">
            <figcaption>4$</figcaption>
          
            <svg width="200" height="200">
              <circle
                class="outer"
                cx="95"
                cy="95"
                r="85"
                transform="rotate(-90, 95, 95)"
              />
            </svg>
          </figure>
          <p>
            For every $1 companies put into workplace mental health programs,
            they get $4 back in increased productivity and better health
            outcomes{" "}
          </p>
        </div>
        <div className="stats-box">
          <figure class="chart" data-percent="50">
            <figcaption> 50%</figcaption>
           

            <svg width="200" height="200">
              <circle
                class="outer"
                cx="95"
                cy="95"
                r="85"
                transform="rotate(-90, 95, 95)"
              />
            </svg>
          </figure>{" "}
          <p>50% employees absenteeism decrease</p>
        </div>
      </div>
      <div className="bot-img-box">
        <img
          src={who}
          alt="world health organisation"
          className="stats-bot-img"
        ></img>
        <img src={bett} alt="better up" className="stats-bot-img"></img>
      </div>
    </div>
  );
}
