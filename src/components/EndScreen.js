import React from "react";
import { useSelector, useDispatch } from "react-redux";

import { getData, updateGameState } from "../features/dataState/dataSlice";

function EndScreen() {
  const dispatch = useDispatch();
  const setData = useSelector(getData);

  return (
    <div>
      <h1 className="mt-3">Game Over</h1>
      <br />
      <h4>
        Score : {setData.score} / {setData.questionNumber}
      </h4>
      <br />
      <button
        className="btn_option"
        onClick={() => dispatch(updateGameState({ gameState: "userName" }))}
      >
        Play Again
      </button>
    </div>
  );
}

export default EndScreen;
