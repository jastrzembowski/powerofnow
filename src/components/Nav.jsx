import React, { useState } from "react";
import logo from "../images/logo.png";
export default function Nav() {
  const [nav, setNav] = useState(false);

  const changeBg = () => {
    if (window.scrollY >= 50) {
      setNav(true);
    } else {
      setNav(false);
    }
  };
  window.addEventListener("scroll", changeBg)
  return (
    <nav className={nav ? "active" : " "}>
      <img src={logo} alt="logo" className="logo"></img>
      <ul>
        <li><a href="#header">Main</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>
    </nav>
  );
}
