import styles from "./Card.module.css";

function Card({
  image,
  title,
  count,
  countLabel,
  data,
  type,
}) {
  // Support both Albums and Songs
  const card = data || {};

  const imageSrc = image || card.image;
  const cardTitle = title || card.title;

  const subtitle =
    type === "song"
      ? card.likes
        ? `${card.likes} Likes`
        : card.description
      : `${count} ${countLabel}`;

  return (
    <div className={styles.card}>
      <div className={styles.imageContainer}>
        <img
          className={styles.image}
          src={imageSrc}
          alt={cardTitle}
        />
      </div>

      <div className={styles.banner}>
        <p>{subtitle}</p>
      </div>

      <h3 className={styles.title}>{cardTitle}</h3>
    </div>
  );
}

export default Card;