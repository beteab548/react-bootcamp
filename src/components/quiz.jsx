import { useCallback, useState } from "react";
import Questions from "../../questions.js";
import quizComplete from "../assets/quiz-complete.png";
import ProgressBar from "./progress-bar.jsx";
export default function Quiz() {
  const [clickedAnswer, setClickedAnswer] = useState("");
  const [userAnswer, setUserAnswer] = useState([]);
  const activeQuestionIndex =
    clickedAnswer === "" ? userAnswer.length : userAnswer.length - 1;
  const handleButton = useCallback(
    function handleButton(answer) {
      setClickedAnswer("answered");
      setUserAnswer((prevValue) => {
        return [...prevValue, answer];
      });
      setTimeout(() => {
        if (answer == Questions[activeQuestionIndex].answers[0]) {
          setClickedAnswer("correct");
        } else {
          setClickedAnswer("wrong");
        }
        setTimeout(() => {
          setClickedAnswer("");
        }, 2000);
      }, 1000);
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
    ...Questions[activeQuestionIndex].answers.map((answer) => {
      return answer;
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
            let selectedButtonStyle = "";
            const isSelected = userAnswer[userAnswer.length - 1] == answers;
            if (clickedAnswer === "answered" && isSelected) {
              selectedButtonStyle = "selected";
            }
            if (
              (clickedAnswer === "correct" || clickedAnswer === "wrong") &&
              isSelected
            ) {
              selectedButtonStyle = clickedAnswer;
            }
            return (
              <li key={answers} className="answer">
                <button
                  className={selectedButtonStyle}
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
