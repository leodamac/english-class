import React from "react";
import { Question, AnswerMap } from "../types";

type Props = {
  questions: Question[];
  answers: AnswerMap;
  onReset: () => void;
};

const Result: React.FC<Props> = ({ questions, answers, onReset }) => {
  const score = questions.reduce(
    (sum, q, i) => (answers[i] === q.answer ? sum + 1 : sum),
    0
  );

  const incorrectQuestions = questions.filter((q, i) => answers[i] !== q.answer);

  return (
    <section className="result">
      <h2>Your Score</h2>
      <p>
        {score} / {questions.length}
      </p>

      <h3>Review Incorrect Answers</h3>
      {incorrectQuestions.length > 0 ? (
        <ul>
          {incorrectQuestions.map((q, idx) => {
            idx
            const index = questions.indexOf(q);
            return (
              <li key={index}>
                <p className="question">
                  <strong>Q:</strong> {q.prompt}
                </p>
                <p className="user-answer">
                  <strong>Your answer:</strong> {answers[index] || "No answer"}
                </p>
                <p className="correct-answer">
                  <strong>Correct answer:</strong> {q.answer}
                </p>
              </li>
            );
          })}
        </ul>
      ) : (
        <p>Perfect! All answers were correct.</p>
      )}

      <button onClick={onReset}>Restart Quiz</button>
    </section>
  );
};

export default Result;
