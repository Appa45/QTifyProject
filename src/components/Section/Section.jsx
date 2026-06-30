import { useState } from "react";
import Carousel from "../Carousel/Carousel";
import styles from "./Section.module.css";

export default function Section({
  title,
  data = [],
  renderItem,
  showToggle = true,
  defaultCollapsed = false,
}) {
  const [showAll, setShowAll] = useState(defaultCollapsed);

  const handleToggle = () => {
    setShowAll((prev) => !prev);
  };

  return (
    <section className={styles.section}>
      <div className={styles.header}>
        <h2 className={styles.title}>{title}</h2>

        {showToggle && (
          <button className={styles.toggleBtn} onClick={handleToggle}>
            {showAll ? "Collapse" : "Show All"}
          </button>
        )}
      </div>

      <div className={styles.content}>
        {showAll ? (
          <div className={styles.grid}>
            {data.map((item) => renderItem(item))}
          </div>
        ) : (
          <Carousel data={data} renderItem={renderItem} />
        )}
      </div>
    </section>
  );
}