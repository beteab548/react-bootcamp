import { useState } from "react";
import Questions from "../../questions.js";
import quizComplete from "../assets/quiz-complete.png";
import ProgressBar from "./progress-bar.jsx";
export default function Quiz() {
  const [userAnswer, setUserAnswer] = useState([]);
  const activeQuestionIndex = userAnswer.length;
  function handleButton(answer) {
    setUserAnswer((prevValue) => {
      return [...prevValue, answer];
    });
  }
  const quizIsComplete = Questions.length === userAnswer.length;
  if (quizIsComplete) {
    return (
      <div id="summary">
        <img src={quizComplete} alt="quiz complete image" />
        <h2>quiz completed!</h2>
      </div>
    );
  }
  const suffledAnswers = Questions[activeQuestionIndex].answers.sort(() => {
    return Math.random() - 0.5;
  });
  return (
    <div id="quiz">
      <div id="questions">
        <ProgressBar
          timeout={10000}
          onTimeOut={() => {
            handleButton(null);
          }}
        />
        <h2>{Questions[activeQuestionIndex].text}</h2>
        <ul id="answers">
          {suffledAnswers.map((answers) => {
            return (
              <li key={answers} className="answer">
                <button
                  onClick={() => {
                    handleButton(answers);
                  }}
                >
                  {answers}
                </button>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}
