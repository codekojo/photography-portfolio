import React from "react";
import elena from "../img/elena-joy.png";
import plant1 from "../img/plant1.png";
import plant2 from "../img/plant2.png";
import "./Main.css";

export default function Hero() {
  return (
    <section className="hero">
      <div className="hero-introduction flex">
        <h2>
          Elena Joy <br />
          Photography
        </h2>
        <p>
          Welcome to Elena Joy Photography, where every moment is captured with
          artistry and passion. From intimate portraits to breathtaking
          landscapes, my photography tells stories that last a lifetime. Join me
          in exploring the beauty of the world through my lens.
        </p>
        <a href="#gallery">Gallery</a>
      </div>

      <div className="hero-images">
        <img
          className="hero-elena"
          src={elena}
          alt="Elena posing and holding some flowers"
        />
        <img className="plant plant1" src={plant1} alt="Decorative plant" />
        <img className="plant plant2" src={plant2} alt="Decorative plant" />
      </div>
    </section>
  );
}
