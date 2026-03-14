import styles from "./Divider.module.css";

export default function Divider() {
  return (
    <div className={styles.divider}>
      <div className={styles.dividerLine} />
      <div className={styles.dividerSymbol}>✦</div>
      <div className={styles.dividerLine} />
    </div>
  );
}
