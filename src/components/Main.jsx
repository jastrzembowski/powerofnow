import React from "react";
import bg3 from "../images/bg3.jpg"
export default function Main() {


  return (
      <><div className="main-box">
      <div className="main-box-icons__holder">
        <i class="fa-solid fa-seedling" style={{ fontSize: "150px" }}></i>
        <p>Lorem ipsum dolor sit amet consectetur.</p>
      </div>
      <div className="main-box-icons__holder">
        <i class="fa-solid fa-coins" style={{ fontSize: "150px" }}></i>{" "}
        <p>Lorem ipsum dolor sit amet consectetur.</p>
      </div>
      <div className="main-box-icons__holder">
        <i class="fa-solid fa-star-of-life" style={{ fontSize: "150px" }}></i>{" "}
        <p>Lorem ipsum dolor sit amet consectetur.</p>
      </div>
    </div>
    <div className="about-box">
        <h3>Lorem ipsum dolor sit amet consectetur adipisicing.</h3>
        <h1>We do a great job</h1>
        <img src={bg3} alt="bg3" className="bg3"></img>

    </div>
    </>
    
  );
}
