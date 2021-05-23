import React from 'react';
import contactImg from '../img/contact-image.jpg';


const Contact  = () => {
   return (
      <section className="contact__container">
         <div className="form__wrapper flex">
            <h2>Get in <br></br>
            <span>touch.</span>
            </h2>
            <form>
               <div>
                  <label htmlFor="emailUser">Your Email</label>
                  <input type="email" id="emailUser" required/>
               </div>
               <button type="submit">Submit</button>
            </form>
         </div>
         <div className="contact--image">
            <img src={contactImg} alt=""/>
         </div>

      </section>
   );
}


export default Contact;