import React from "react";
import { Question, AnswerMap } from "../types";

type Props = {
  questions: Question[];
  answers: AnswerMap;
  onReset: () => void;
};

const Result: React.FC<Props> = ({ questions, answers, onReset }) => {
  let totalQuestions = 0;
  let correctAnswers = 0;
  const incorrectEntries: {
    prompt: string;
    userAnswer: string[];
    correctAnswer: string[];
  }[] = [];

  questions.forEach((q, qIndex) => {
    totalQuestions++;
    const userAnswer = answers[qIndex] || [];
    const correctAnswer = q.answer.map((a) => a.toLowerCase());
    const normalizedUserAnswer = userAnswer.map((a) => a.toLowerCase());

    // Verificamos si todas las respuestas del usuario son correctas (sin importar orden)
    const isCorrect =
      normalizedUserAnswer.length === correctAnswer.length &&
      normalizedUserAnswer.every((ans) => correctAnswer.includes(ans));

    if (isCorrect) {
      correctAnswers++;
    } else {
      incorrectEntries.push({
        prompt: q.prompt,
        userAnswer,
        correctAnswer: q.answer,
      });
    }
  });

  return (
    <section className="result">
      <h2>Your Score</h2>
      <p>
        {correctAnswers} / {totalQuestions}
      </p>

      <h3>Review Incorrect Answers</h3>
      {incorrectEntries.length > 0 ? (
        <ul>
          {incorrectEntries.map((entry, idx) => (
            <li key={idx}>
              <p className="question">
                <strong>Q:</strong> {entry.prompt}
              </p>
              <p className="user-answer">
                <strong>Your answer:</strong> {entry.userAnswer.join(", ")}
              </p>
              <p className="correct-answer">
                <strong>Correct answer:</strong>{" "}
                {entry.correctAnswer.join(", ")}
              </p>
            </li>
          ))}
        </ul>
      ) : (
        <p>Perfect! All answers were correct.</p>
      )}

      <button onClick={onReset}>Restart Quiz</button>
    </section>
  );
};

export default Result;
