import React, { useState } from "react";
import { AnswerType, Question } from "../../types";

type Props = {
  question: Question;
  onAnswer: (answer: AnswerType) => void;
};

const SingleSelectQuestion: React.FC<Props> = ({ question, onAnswer }) => {
  const [selected, setSelected] = useState<string>("");

  const handleSubmit = () => {
    const isCorrect = question.answer.includes(selected);
    onAnswer({ value: [selected], isCorrect });
  };

  return (
    <div>
      {question.audioSrc && (
        <button onClick={() => new Audio(question.audioSrc!).play()}>
          🔊 Play Audio
        </button>
      )}
      <p>{question.prompt}</p>
      {question.instructions && <p>{question.instructions}</p>}
      <ul>
        {question.options?.map((opt) => (
          <li key={opt}>
            <label>
              <input
                type="radio"
                name={`question-${question.id}`}
                value={opt}
                checked={selected === opt}
                onChange={() => setSelected(opt)}
              />
              {opt}
            </label>
          </li>
        ))}
      </ul>
      <button onClick={handleSubmit} disabled={!selected}>
        Submit
      </button>
    </div>
  );
};

export default SingleSelectQuestion;
