import React from 'react';
import aboutImage from '../img/about-image.png';
import '../index.css';
import './Main.css';

const About = () => {
   return (
      <section className="about">
         <div className="about-image">
            <h5>MINIMAL</h5>
            <img className="aboutImg" src={aboutImage} alt=""/>
         </div>
         <div className="about-text">
            <h2>Elena Joy</h2>
            <div className="about-life">
               <h3>My Life</h3>
               <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Deleniti, laudantium sunt ab tempore dolore atque tenetur hic debitis autem doloribus?</p>
            </div>
            <div className="about-work">
               <h3>My work</h3>
               <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Deleniti, laudantium sunt ab tempore dolore atque tenetur hic debitis autem doloribus?</p>
            </div>
            <div className="about-contact">
               <h3>Get intouch</h3>
               <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Deleniti, laudantium sunt ab tempore dolore atque tenetur hic debitis autem doloribus?</p>
            </div>
         </div>
      </section>
   );
}

export default About;