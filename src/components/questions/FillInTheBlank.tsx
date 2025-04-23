import React, { useState } from "react";
import { AnswerType, Question } from "../../types";

type Props = {
  question: Question;
  onAnswer: (answer: AnswerType) => void;
};

const FillInTheBlank: React.FC<Props> = ({ question, onAnswer }) => {
  const [input, setInput] = useState<string>("");

  const handleSubmit = () => {
    const normalizedInput = input.trim().toLowerCase();
    const correctAnswers = question.answer.map((ans) => ans.toLowerCase());
    const isCorrect = correctAnswers.includes(normalizedInput);

    onAnswer({
      value: [input],  // Enviamos como array para que sea compatible con AnswerType
      isCorrect,
    });
    setInput("");
  };

  return (
    <div className="question fill-in-the-blank">
      <p>{question.prompt}</p>
      {question.instructions && <p className="instructions">{question.instructions}</p>}
      {question.audioSrc && (
        <button onClick={() => new Audio(question.audioSrc!).play()}>Play Audio</button>
      )}

      <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="Write your answer"
      />
      <button onClick={handleSubmit}>Submit</button>
    </div>
  );
};

export default FillInTheBlank;
