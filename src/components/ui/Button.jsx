import styles from "./Button.module.css";

export const Button = ({ children, onClick }) => {
  return (
    <button onClick={onClick} className={styles["custom-btn"]}>
      {children}
    </button>
  );
};
