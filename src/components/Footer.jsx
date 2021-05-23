import React from 'react';
import twitter from '../img/twitter 1.svg';
import utube from '../img/youtube-symbol 1.svg';
import ig from '../img/instagram 1.svg'


const Footer = () => {
   return (
      <div className="footer__container">
      <footer className="footer">
      <h4 className="footer__heading">Helena Joyu 2021</h4>
      <nav>
         <ul>
            <li><a href="##"><img src={utube} alt=""/></a></li>
            <li><a href="##"><img src={ig} alt=""/></a></li>
            <li><a href="##"><img src={twitter} alt=""/></a></li>
         </ul>
      </nav>
      </footer>
      </div>
   );
}



export default Footer;