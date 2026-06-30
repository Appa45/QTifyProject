import React from "react";
import styles from "./Hero.module.css";
// Make sure the image path matches where your headphone asset is stored!
import HeroImage from "../../assets/hero_headphones.png"; 

function Hero() {
  return (
    <div className={styles.heroSection}>
      <div>
        <h1>100 Thousand Songs, ad-free</h1>
        <h1>Over thousands podcast episodes</h1>
      </div>
      <img src={HeroImage} alt="headphones" width={212} />
    </div>
  );
}

export default Hero;