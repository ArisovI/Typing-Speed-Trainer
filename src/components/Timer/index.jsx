import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { decrementTime } from "../../store/typingSlice.js";
import styles from "./Timer.module.css";

export const Timer = () => {
  const dispatch = useDispatch();
  const { timeRemaining, isGameOver, isStarted } = useSelector(
    (state) => state.typing
  );

  useEffect(() => {
    if (isStarted && !isGameOver && timeRemaining > 0) {
      const timerId = setInterval(() => {
        dispatch(decrementTime());
      }, 1000);

      return () => clearInterval(timerId);
    }
  }, [dispatch, timeRemaining, isGameOver, isStarted]);

  console.log(isGameOver);

  return (
    <div>
      {isStarted && !isGameOver ? (
        <p className={styles.timer}>{timeRemaining}</p>
      ) : isGameOver ? (
        <p className={styles["time-up"]}>Время закончено!</p>
      ) : null}
    </div>
  );
};
