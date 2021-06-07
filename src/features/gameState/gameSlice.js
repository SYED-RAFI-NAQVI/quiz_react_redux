import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  gameState: "userName",
};

const gameSlice = createSlice({
  name: "gameState",
  initialState,
  reducers: {},
});

export const { gameState } = gameSlice.actions;
export default gameSlice.reducer;
