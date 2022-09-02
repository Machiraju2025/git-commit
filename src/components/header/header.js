import styles from "./header.module.css";

export default function Header({ url }) {
  return (
    <header className={styles["header"]}>
      <h1 className={styles["h1"]}>git commit history</h1>
      <a className={styles["a"]} href={url} target="__blank">
        {url}
      </a>
    </header>
  );
}
