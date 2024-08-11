import styles from "./TextInput.module.css";

export const TextInput = ({ userInput, handleChange }) => {
  return (
    <input
      type="text"
      value={userInput}
      onChange={(e) => handleChange(e.target.value)}
      placeholder="Текст текст..."
      className={styles["text-input"]}
    />
  );
};
