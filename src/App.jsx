import { TextDisplay } from "./components/TextDisplay";
import { TextInput } from "./components/TextInput";
import { Statistics } from "./components/Statistics";
import { useDispatch, useSelector } from "react-redux";
import { setUserInput, resetTest, startTest } from "./store/typingSlice.js";
import { TimeSelect } from "./components/TimeSelect";
import { Timer } from "./components/Timer";
import { Button } from "./components/ui/Button";
import styles from "./App.module.css";

export const App = () => {
  const dispatch = useDispatch();
  const { text, userInput, wpm, errors, isGameOver, isStarted } = useSelector(
    (state) => state.typing
  );

  const handleChange = (str) => {
    if (isStarted) {
      dispatch(setUserInput(str));
    }
  };

  const handleReset = () => {
    dispatch(resetTest());
  };

  const handleStart = () => {
    dispatch(startTest());
  };

  return (
    <div className={styles.app}>
      <h1 className={styles["app-title"]}>Typing Speed Trainer</h1>
      {isStarted ? (
        ""
      ) : (
        <>
          <TimeSelect />
          <Button onClick={handleStart}>Начать игру</Button>
        </>
      )}

      {isStarted ? (
        <>
          <Timer />
          <TextDisplay text={text} userInput={userInput} />
          <TextInput userInput={userInput} handleChange={handleChange} />
          <Button onClick={handleReset}>Попробовать снова</Button>
        </>
      ) : (
        ""
      )}
      {isGameOver ? (
        <Statistics onClick={handleReset} wpm={wpm} errors={errors} />
      ) : (
        ""
      )}
    </div>
  );
};
