import styles from "./TextDisplay.module.css";

export const TextDisplay = ({ text, userInput }) => {
  return (
    <div>
      {text.split("").map((char, index) => {
        let color;
        if (index < userInput.length) {
          color = char === userInput[index] ? "#40a9ff" : "red";
        }
        return (
          <span
            className={styles["text-display"]}
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
