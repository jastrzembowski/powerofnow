import React from "react";
import logowhite from "../images/logowhite.png";
import { Link } from "react-router-dom";


export default function Footer() {
  const scrollToTop = () =>{
    window.scrollTo({
    top: 0,
    behavior: 'smooth'

    });
  };

  return (
    <footer>
      <div className="icons-holder">
      <a href="https://www.facebook.com/Power-of-Now-104909688862839"><i class="fa-brands fa-facebook"></i></a>
      <i class="fa-brands fa-instagram" ></i>{" "}
      <a href="https://www.linkedin.com/company/power-of-now-courses/"><i class="fa-brands fa-linkedin" ></i></a>
      </div>
    <Link to="/rodo" className="footer-links">Rodo</Link>
    <Link to="/imprissum" className="footer-links">Imprissum</Link>
      <div  onClick={scrollToTop} style={{cursor: "pointer"}}> <img src={logowhite} className="logowhite" alt="logowhite"></img></div>
    </footer>
  );
}
