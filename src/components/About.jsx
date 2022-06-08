import React from "react";
import bg4 from "../images/bg4.jpg";

export default function About() {
  return (
    <div id="about">
      <div className="about-text">
        <h1>About Us</h1>
        <span className="about-subtitle">Iure ab voluptatem molestias</span>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo harum
          omnis reiciendis hic debitis, dicta eveniet numquam nulla ratione
          voluptates corporis magnam incidunt sapiente! Asperiores, nobis cum?
          Doloribus, iure iste? Lorem ipsum dolor sit amet consectetur
          adipisicing elit. Vel dolores libero quae quod quaerat ad eum rerum
          minima quo tempora, repellat deleniti id eos nam consequatur nisi sed
          necessitatibus. Dolore aliquam accusamus
          quae, voluptates ex sequi.
        </p>
        <a className="button-outlined" href="google.com">Contact us</a>
      </div>
      <img src={bg4} alt="bg4" className="about-img"></img>
    </div>
  );
}
