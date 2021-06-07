import React, { useState } from "react";
import { useDispatch } from "react-redux";
import "../styles/menu.css";

import { saveData } from "../features/dataState/dataSlice";

function Menu() {
  const [userName, setUserName] = useState("");
  const [questionNumber, setQuestionNumber] = useState(0);

  const dispatch = useDispatch();
  const handleSubmit = () => {
    if (userName === "") {
      alert("Input Not Valid");
      return;
    }
    dispatch(saveData({ userName, questionNumber, gameState: "playing" }));
  };

  return (
    <div>
      <input
        className="p-2 mt-3 m-2 username_input"
        placeholder="username"
        type="text"
        onChange={(e) => setUserName(e.target.value)}
      />
      <div>
        <button
          className="btn_ques btn btn-secondary m-3 p-2"
          style={{ width: "80px" }}
          onClick={(e) => setQuestionNumber(10)}
        >
          10
        </button>
        <button
          className="btn_ques btn btn-secondary m-3 p-2"
          style={{ width: "80px" }}
          onClick={(e) => setQuestionNumber(15)}
        >
          15
        </button>
        <button
          className="btn_ques btn btn-secondary m-3 p-2"
          style={{ width: "80px" }}
          onClick={(e) => setQuestionNumber(20)}
        >
          20
        </button>
      </div>
      <button
        className="btn_start m-2 p-2 btn btn-primary"
        style={{ width: "100px" }}
        onClick={handleSubmit}
      >
        Start
      </button>
    </div>
  );
}

export default Menu;
