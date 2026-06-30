import React from "react";
import styles from "./Card.module.css";

function Card({ title, subtitle, imageSrc }) {
  return (
    <div className={styles.card}>
      <div className={styles.imageContainer}>
        <img className={styles.image} src={imageSrc || "https://placehold.co/200"} alt={title} />
      </div>
      <h3 className={styles.title}>{title || "Album Title"}</h3>
      <p className={styles.subtitle}>{subtitle || "Artist Name"}</p>
    </div>
  );
}

export default Card;