import React, {useState} from 'react';
import logo from "../images/logo.png";
import { Link } from 'react-router-dom';

function Rodo(props) {

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
       <>
       <nav className={nav ? "active" : " "}>
      <img src={logo} alt="logo" className="logo"></img>
      <ul>
        <li><Link to ="/">Return to main</Link></li>
      </ul>
    </nav>
       </>
    );
}

export default Rodo;