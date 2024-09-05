import Questions from "../../questions.js";
import ProgressBar from "./progress-bar.jsx";
import Answers from "./answers.jsx";
export default function Question({
  timeout,
  clickedAnswer,
  onSelect,
  userAnswer,
  handleSkipedAnswer,
  activeQuestionIndex,
}) {
  return (
    <>
      <ProgressBar timeout={timeout} onTimeOut={handleSkipedAnswer} />
      <h2>{Questions[activeQuestionIndex].text}</h2>
      <Answers
        userAnswer={userAnswer}
        Questions={Questions[activeQuestionIndex].answers}
        onSelect={onSelect}
        clickedAnswer={clickedAnswer}
      />
    </>
  );
}
