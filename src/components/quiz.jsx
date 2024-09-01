import { useState } from "react";
import Questions from "../../questions.js";
export default function Quiz() {
  const [userAnswer, setUserAnswer] = useState([]);
  const activeQuestionIndex = userAnswer.length;
  function handleButton(answer) {
    setUserAnswer((prevValue) => {
      return [...prevValue, answer];
    });
  }
  return (
    <div id="quiz">
      <div id="questions">
        <h2>{Questions[activeQuestionIndex].text}</h2>
        <ul id="answers">
          {Questions[activeQuestionIndex].answers.map((answers) => {
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
