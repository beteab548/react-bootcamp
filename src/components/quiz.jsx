import { useCallback, useState } from "react";
import Questions from "../../questions.js";
import quizComplete from "../assets/quiz-complete.png";
import Question from "./Quetions.jsx";
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

  return (
    <div id="quiz">
      <div id="questions">
        <Question
          key={activeQuestionIndex}
          activeQuestionIndex={activeQuestionIndex}
          onSelect={handleButton}
          handleSkipedAnswer={handleSkipedAnswer}
          userAnswer={userAnswer}
          clickedAnswer={clickedAnswer}
        />
      </div>
    </div>
  );
}
