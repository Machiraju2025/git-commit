import styles from "./commit.module.css";

export default function Commit({ message, author, date, url }) {
  return (
    <div className={styles.container}>
      <a className={styles.a} href={url} target="__blank">
        <h2 className={styles.h2}>{message}</h2>
        <p data-testid="author" className={styles.p}>
          {new Date(date).toLocaleString()}{" "}
          <span className={styles.bold}>by {author}</span>
        </p>
      </a>
    </div>
  );
}