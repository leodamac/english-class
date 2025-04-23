import React, { useState } from "react";
import { AnswerType, Question } from "../../types";

type Props = {
  question: Question;
  onAnswer: (answer: AnswerType) => void;
};

const TextQuestion: React.FC<Props> = ({ question, onAnswer }) => {
  const [input, setInput] = useState("");

  const handleSubmit = () => {
    const normalizedInput = input.trim().toLowerCase();
    const correctAnswers = question.answer.map((ans) => ans.toLowerCase());
    const isCorrect = correctAnswers.includes(normalizedInput);

    onAnswer({
      value: [input],
      isCorrect,
    });
    setInput("");
  };

  const handleAudio = () => {
    if (question.audioSrc) new Audio(question.audioSrc).play();
  };

  return (
    <div className="question text-question">
      {question.audioSrc && <button onClick={handleAudio}>🔊 Play Audio</button>}
      <p>{question.prompt}</p>
      {question.instructions && <p>{question.instructions}</p>}

      <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="Type your answer"
      />
      <button onClick={handleSubmit} disabled={input.trim() === ""}>Submit</button>
    </div>
  );
};

export default TextQuestion;
