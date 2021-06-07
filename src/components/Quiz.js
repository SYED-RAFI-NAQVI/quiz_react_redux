import React, { useState, useEffect } from "react";
import axios from "axios";

import "../styles/quiz.css";

import { useSelector, useDispatch } from "react-redux";

import {
  apiData,
  getData,
  updateGameState,
  updateScore,
} from "../features/dataState/dataSlice";

function Quiz() {
  const dispatch = useDispatch();
  const setData = useSelector(getData);
  const time = 30;
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [int, setInt] = useState(time);
  const [score, setScore] = useState(0);

  const nextQuestion = () => {
    setCurrentQuestion(currentQuestion + 1);
  };

  const handleSetQuesAns = (e) => {
    if (setData.dataArr[currentQuestion].correct_answer == e) {
      setScore((pre) => pre + 1);
    }
    nextQuestion();
    setInt(time);
  };

  useEffect(() => {
    axios
      .get(
        `https://quizapi.io/api/v1/questions?limit=${setData.questionNumber}`,
        {
          headers: {
            "x-api-key": "IP3xyVzVneKTOySEnmj2kUsZL6EVRVmugTlKx9lk",
          },
        }
      )
      .then((data) => dispatch(apiData({ dataArr: data.data })))
      .catch((err) => console.log(err));
  }, []);

  useEffect(() => {
    let timer;
    if (setData.dataArr && setData.dataArr.length == currentQuestion) {
      setInt(null);
      dispatch(updateScore({ score }));
      dispatch(updateGameState({ gameState: "finished" }));
      return;
    }
    if (int >= 0) {
      timer = setInterval(() => setInt(int - 1), 1000);
    } else {
      nextQuestion();
      setData.dataArr && setData.dataArr.length > currentQuestion
        ? setInt(time)
        : setInt(null);
    }
    return () => clearInterval(timer);
  }, [int]);

  return (
    <div>
      <div className="mt-4" style={{ fontSize: "22px" }}>
        {int !== null ? <p>{int} Seconds</p> : null}
      </div>
      {setData.dataArr && setData.dataArr.length > currentQuestion ? (
        <div>
          <h3 className="mb-3">{setData.dataArr[currentQuestion].question}</h3>
          {Object.keys(setData.dataArr[currentQuestion].answers).map((item) => (
            <div>
              {setData.dataArr[currentQuestion].answers[item] !== null ? (
                <button
                  className="mt-2 p-2 btn_option"
                  key={item}
                  onClick={() => handleSetQuesAns(item)}
                >
                  {setData.dataArr[currentQuestion].answers[item]}
                </button>
              ) : null}
            </div>
          ))}
        </div>
      ) : null}
    </div>
  );
}

export default Quiz;
