import React from "react";
import logowhite from "../images/logowhite.png";
export default function Footer() {
  return (
    <footer>
      <div className="icons-holder">
      <i class="fa-brands fa-facebook"></i>{" "}
      <i class="fa-brands fa-instagram" ></i>{" "}
      <i class="fa-brands fa-linkedin" ></i>{" "}


      </div>

      <img src={logowhite} className="logowhite" alt="logowhite"></img>
    </footer>
  );
}
