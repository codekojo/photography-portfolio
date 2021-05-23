import React from 'react';
import './Header.css';
import '../index.css';


const Header = () => {
   return(
      <header className="main__nav">
         <nav className="container__nav">
         <h1 className="header__name">Elena Joy</h1>
         <ul className="header__nav">
            <li className="flex-item item-1"><a href="##">About</a></li>
            <li className="flex-item item-2"><a href="##">Work</a></li>
            <li className="flex-item item-3"><a href="##">Contact</a></li>
         </ul>
         

         </nav>
         
      </header>
   );
}

export default Header;