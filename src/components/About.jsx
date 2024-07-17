import React from "react";
import aboutImage from "../img/about-image.png";
import "../index.css";
import "./Main.css";

const About = () => {
  return (
    <section className="about">
      <div className="about-image">
        <h5>MINIMAL</h5>
        <img className="aboutImg" src={aboutImage} alt="Elena Joy" />
      </div>
      <div className="about-text">
        <h2>Elena Joy</h2>
        <div className="about-life">
          <h3>My Life</h3>
          <p>
            Photography has always been my passion. Capturing the beauty in
            everyday moments and turning them into lasting memories is what
            drives me. From spontaneous street photography to carefully planned
            shoots, I find joy in every aspect of this art.
          </p>
        </div>
        <div className="about-work">
          <h3>My Work</h3>
          <p>
            My portfolio includes a diverse range of projects, from wedding and
            portrait photography to nature and urban landscapes. Each photograph
            tells a unique story, and my goal is to bring out the essence and
            emotion in every shot. My style is minimalistic, focusing on natural
            light and genuine expressions.
          </p>
        </div>
        <div className="about-contact">
          <h3>Get in Touch</h3>
          <p>
            If you're interested in collaborating or would like to book a
            session, feel free to reach out. I'm always excited to work with new
            clients and explore creative ideas together. Let's create something
            beautiful!
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
