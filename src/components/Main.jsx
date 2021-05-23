import React from 'react';
import '../index.css';
import './Main.css';
import Hero from './Hero';
import About from './About';
import Gallery from './Gallery';
import Contact from './Contact';



const Main = () => {
   return (
      <main className="main__content">
         <article className="hero__container">
         <Hero/>
         </article>
         <article className="about__container">
         <About/>
         </article>
         <article className="gallery__container">
            <Gallery/>
         </article>
         <article className="contact">
            <Contact/>
         </article>
      </main>
   )
}


export default Main;