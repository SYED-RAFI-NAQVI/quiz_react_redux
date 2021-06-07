import React from "react";
import { useSelector } from "react-redux";
import "./App.css";

import Menu from "./components/Menu";
import Quiz from "./components/Quiz";
import EndScreen from "./components/EndScreen";

import { getData } from "./features/dataState/dataSlice";

function App() {
  const setData = useSelector(getData);

  return (
    <div className="App p-4 col-sm-12 col-lg-12 container">
      <div class="row align-items-center">
        <div class="col">
          <h1>Quiz</h1>
          {setData.gameState === "userName" && <Menu />}
          {setData.gameState === "playing" && <Quiz />}
          {setData.gameState === "finished" && <EndScreen />}
        </div>
      </div>
    </div>
  );
}

export default App;
