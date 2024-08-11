import { createSlice } from "@reduxjs/toolkit";

const texts = [
  "This is a typing speed test.",
  "The quick brown fox jumps over the lazy dog.",
  "Pack my box with five dozen liquor jugs.",
  "How razorback-jumping frogs can level six piqued gymnasts!",
  "Crazy Fredrick bought many very exquisite opal jewels.",
];
const randomText = () => {
  const index = Math.floor(Math.random() * texts.length);
  return texts[index];
};

const initialState = {
  text: randomText(),
  userInput: "",
  startTime: null,
  errors: 0,
  wpm: 0,
  timeLimit: 15,
  timeRemaining: 15,
  isGameOver: false,
  isStarted: false,
};

const typingSlice = createSlice({
  name: "typing",
  initialState,
  reducers: {
    setUserInput: (state, action) => {
      if (state.isStarted && !state.isGameOver) {
        state.userInput = action.payload;

        if (state.userInput === state.text) {
          state.isGameOver = true;
        }

        // Count errors
        state.errors = action.payload
          .split("")
          .filter((char, index) => char !== state.text[index]).length;

        // Start the timer on the first input
        if (!state.startTime && action.payload.length === 1) {
          state.startTime = new Date().getTime();
        }

        // Calculate WPM
        if (state.startTime) {
          const timeElapsed = (new Date().getTime() - state.startTime) / 60000; // Time in minutes
          state.wpm = Math.round(action.payload.length / 5 / timeElapsed);
        }
      }
    },
    resetTest: (state) => {
      state.text = randomText();
      state.userInput = "";
      state.startTime = null;
      state.errors = 0;
      state.wpm = 0;
      state.timeRemaining = state.timeLimit;
      state.isGameOver = false;
      state.isStarted = false;
    },
    setTimeLimit: (state, action) => {
      state.timeLimit = action.payload;
      state.timeRemaining = action.payload;
    },
    decrementTime: (state) => {
      if (state.timeRemaining > 1) {
        state.timeRemaining -= 1;
      } else {
        state.isGameOver = true; // Stop the game
        state.isStarted = false; // Stop the game when time is up
      }
    },
    startTest: (state) => {
      state.isStarted = true;
    },
  },
});

export const {
  setUserInput,
  resetTest,
  setTimeLimit,
  decrementTime,
  startTest,
} = typingSlice.actions;
export default typingSlice.reducer;
