import { useRef } from "react";

export default function Answers({ Questions, onSelect, userAnswer ,clickedAnswer}) {
  const shuffleAnswers = useRef(null);
  const deepCopiedAnswers = [
    ...Questions.map((answer) => {
      return answer;
    }),
  ];
  if (!shuffleAnswers.current) {
    shuffleAnswers.current = [
      ...deepCopiedAnswers.sort(() => {
        return Math.random() - 0.5;
      }),
    ];
  }
  return (
    <ul id="answers">
      {shuffleAnswers.current.map((answers) => {
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
                onSelect(answers);
              }}
            >
              {answers}
            </button>
          </li>
        );
      })}
    </ul>
  );
}
