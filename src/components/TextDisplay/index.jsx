import styles from "./TextDisplay.module.css";

export const TextDisplay = ({ text, userInput }) => {
  return (
    <div className={styles["text-display"]}>
      {text.split("").map((char, index) => {
        let color;
        if (index < userInput.length) {
          color = char === userInput[index] ? "#40a9ff" : "red";
        }
        return (
          <span
            key={index}
            style={{
              color: color,
              textDecoration: color === "red" ? "underline" : "",
            }}
          >
            {char}
          </span>
        );
      })}
    </div>
  );
};
