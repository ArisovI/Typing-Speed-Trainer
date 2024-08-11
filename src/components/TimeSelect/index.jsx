import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { setTimeLimit } from "../../store/typingSlice.js";
import styles from "./TimeSelect.module.css";

export const TimeSelect = () => {
  const dispatch = useDispatch();
  const timeLimit = useSelector((state) => state.typing.timeLimit);

  const handleChange = (event) => {
    dispatch(setTimeLimit(Number(event.target.value)));
  };

  return (
    <div className={styles["time-select"]}>
      <label className={styles.label} htmlFor="time-select">
        Выберите лимит:
      </label>
      <select
        className={styles.select}
        id="time-select"
        value={timeLimit}
        onChange={handleChange}
      >
        <option value={15}>15</option>
        <option value={30}>30</option>
        <option value={45}>45</option>
        <option value={60}>60</option>
      </select>
    </div>
  );
};
