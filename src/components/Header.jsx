import React from "react";
import potrait from "../images/potrait.png";

export default function Header() {
  return (
    <header id="header">
      <img src={potrait} alt="main-img" className="main-img"></img>
      <div className="header-bg">
        <h1>Let us help.</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolorum
          temporibus illum tempora error, amet culpa repellat tenetur deserunt
          adipisci dolore?
        </p>
        <div className="button"><a>Book now</a></div>
      </div>
      <div className="subtitles-holder">
      <h2>300+ Happy customers</h2>
      <h2>Lorem, ipsum dolor.</h2>
      <h2>Lorem, ipsum.</h2>
      </div>
    </header>
  );
}
