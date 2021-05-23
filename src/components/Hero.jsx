import React from 'react';
import elena from '../img/elena-joy.png';
import plant1 from '../img/plant1.png';
import plant2 from '../img/plant2.png';
import './Main.css';



export default function Hero() {
   return(
      <section className="hero">
            <div className="hero-introduction flex">
            <h2>
               Elena Joy <br/> 
               Photography 
            </h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam possimus obcaecati deleniti dignissimos at ratione sequi veniam ullam nisi odit.</p>

            <a href="#gallery">Gallery</a>
            </div>

            <div className="hero-images">
            <img className="hero-elena" src={elena} alt="Helena posing and holding some flowers"/>
            <img className="plant plant1" src={plant1} alt=""/>
            <img className="plant plant2" src={plant2} alt=""/>
            </div>
         </section>
   );
}