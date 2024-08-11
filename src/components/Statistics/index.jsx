import { Button } from "../ui/Button";
import styles from "./Statistics.module.css";

export const Statistics = ({ wpm, errors, onClick }) => {
  return (
    <div className={styles.statistics}>
      <p>WPM: {wpm}</p>
      <p>Errors: {errors}</p>
      <Button onClick={onClick}>Попробовать снова</Button>
    </div>
  );
};
