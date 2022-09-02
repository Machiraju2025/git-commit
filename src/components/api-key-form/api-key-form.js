import styles from "./api-key-form.module.css";
import { useState } from "react";

export default function ApiKeyFrom({ setApiKey }) {
  const [value, setValue] = useState("");
  const handleSave = () => {
    if (!value) return;
    localStorage.setItem("api-key", value);
    setApiKey(value);
  };
  return (
    <form className={styles.form} onSubmit={(e) => e.preventDefault()}>
      <label className={styles.label} htmlFor="input">
        your api key
      </label>
      <div className={styles.container}>
        <input
          id="input"
          className={styles.input}
          value={value}
          onChange={(e) => setValue(e.target.value)}
        />
        <button className={styles.button} onClick={handleSave}>
          Save
        </button>
      </div>
    </form>
  );
}
