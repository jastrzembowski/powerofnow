import React, {useState} from 'react';
import { Link } from 'react-router-dom';
import logo from "../images/logo.png";

function Imprissum(props) {
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
    <div className='impriss-box'>
      <h3>Nota prawna</h3>
      <p>Dane identyfikacyjne firmy:</p>
      <p>
        Tricity Solution Spółka z o.o. z siedzibą w Gdańsku przy ul. Lęborskiej 3B 
        (80-386), zarejestrowana w rejestrze stowarzyszeń, innych organizacji 
        społecznych i zawodowych, fundacji oraz samodzielnych publicznych zakładów
         opieki zdrowotnej Krajowego Rejestru Sądowego prowadzonym przez Sąd 
         Rejonowy Gdańsk Północ w Gdańsku, VII Wydział Gospodarczy Krajowego 
         Rejestru Sądowego, pod numerem 0000951189, numer NIP: 5842813640, numer
          REGON: 521207574.
      </p>
    </div>
       </>
    );
}
export default Imprissum;