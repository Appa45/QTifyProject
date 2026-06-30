import styles from "./Search.module.css";

export default function Search() {
  return (
    <div className={styles.wrapper}>
      <input
        type="text"
        placeholder="Search"
        className={styles.input}
      />
      <button className={styles.searchBtn}>
        <img src="/search-icon.svg" alt="Search icon" />
      </button>
    </div>
  );
}