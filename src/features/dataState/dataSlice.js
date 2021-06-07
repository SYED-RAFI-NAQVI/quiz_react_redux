import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  userName: "",
  dataArr: null,
  questionNumber: 20,
  gameState: "userName",
  score: 0,
};

const dataSlice = createSlice({
  name: "data",
  initialState,
  reducers: {
    saveData: (state, action) => {
      state.userName = action.payload.userName;
      state.questionNumber = action.payload.questionNumber;
      state.gameState = action.payload.gameState;
      state.dataArr = action.payload.dataArr;
    },
    apiData: (state, action) => {
      state.dataArr = action.payload.dataArr;
    },
    updateGameState: (state, action) => {
      state.gameState = action.payload.gameState;
    },
    updateScore: (state, action) => {
      state.score = action.payload.score;
    },
  },
});

export const getData = (state) => state.data;
export const { saveData, apiData, updateGameState, updateScore } =
  dataSlice.actions;
export default dataSlice.reducer;
