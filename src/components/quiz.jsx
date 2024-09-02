import { useCallback, useState } from "react";
import Questions from "../../questions.js";
import quizComplete from "../assets/quiz-complete.png";
import ProgressBar from "./progress-bar.jsx";
export default function Quiz() {
  const [clickedAnswer, setClickedAnswer] = useState("");
  const [userAnswer, setUserAnswer] = useState([]);
  const activeQuestionIndex = userAnswer.length;
  const handleButton = useCallback(
    function handleButton(answer) {
      if (answer == Questions[activeQuestionIndex].answers[0]) {
        console.log("correct");
        setClickedAnswer("correct");
      } else {
        setClickedAnswer("wrong");
        console.log("wrong");
      }
      setTimeout(() => {
        setUserAnswer((prevValue) => {
          return [...prevValue, answer];
        });
        setClickedAnswer("");
      }, 2000);
    },
    [activeQuestionIndex]
  );
  const handleSkipedAnswer = useCallback(() => {
    handleButton(null);
  }, [handleButton]);
  const quizIsComplete = Questions.length === userAnswer.length;
  if (quizIsComplete) {
    return (
      <div id="summary">
        <img src={quizComplete} alt="quiz complete image" />
        <h2>quiz completed!</h2>
      </div>
    );
  }
  const deepCopiedAnswers = [
    ...Questions[activeQuestionIndex].answers.map((asnwer) => {
      return [asnwer];
    }),
  ];
  const shuffledAnswers = [
    ...deepCopiedAnswers.sort(() => {
      return Math.random() - 0.5;
    }),
  ];
  return (
    <div id="quiz">
      <div id="questions">
        <ProgressBar
          key={activeQuestionIndex}
          timeout={30000}
          onTimeOut={handleSkipedAnswer}
        />
        <h2>{Questions[activeQuestionIndex].text}</h2>
        <ul id="answers">
          {shuffledAnswers.map((answers) => {
            return (
              <li key={answers} className="answer">
                <button
                  id={clickedAnswer}
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
