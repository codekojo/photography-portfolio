import React from 'react';
import gallery1 from '../img/gallery-1.jpg';
import gallery2 from '../img/gallery-2.jpg';
import gallery3 from '../img/gallery-3.jpg';
import gallery4 from '../img/gallery-4.jpg';
import './Main.css';


const Gallery = () => {
   return (
      <section className="gallery">
         <header className="gallery__header">
            <h2>Quality Photography</h2>
            <p>Portfolio Display</p>
         </header>
         <img src={gallery1} alt="" className="gallery1"/>
         <img src={gallery2} alt="" className="gallery2"/>
         <img src={gallery3} alt="" className="gallery3"/>
         <img src={gallery4} alt="" className="gallery4"/>
      </section>
   )
}

export default Gallery;