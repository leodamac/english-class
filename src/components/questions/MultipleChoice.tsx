import React, { useState } from "react";
import { AnswerType, Question } from "../../types";

type Props = {
  question: Question;
  onAnswer: (answer: AnswerType) => void;
};

const MultiSelectQuestion: React.FC<Props> = ({ question, onAnswer }) => {
  const [selected, setSelected] = useState<string[]>([]);

  const toggleOption = (option: string) => {
    setSelected((prev) =>
      prev.includes(option) ? prev.filter((o) => o !== option) : [...prev, option]
    );
  };

  const handleAudio = () => {
    if (question.audioSrc) new Audio(question.audioSrc).play();
  };

  const handleSubmit = () => {
    const isCorrect =
      question.answer.length === selected.length &&
      question.answer.every((ans) => selected.includes(ans));

    onAnswer({
      value: selected,
      isCorrect,
    });
  };

  return (
    <div>
      {question.audioSrc && <button onClick={handleAudio}>🔊 Play Audio</button>}
      <p>{question.prompt}</p>
      {question.instructions && <p>{question.instructions}</p>}
      <ul>
        {question.options?.map((opt) => (
          <li key={opt}>
            <label>
              <input
                type="checkbox"
                checked={selected.includes(opt)}
                onChange={() => toggleOption(opt)}
              />
              {opt}
            </label>
          </li>
        ))}
      </ul>
      <button onClick={handleSubmit} disabled={selected.length === 0}>Submit</button>
    </div>
  );
};

export default MultiSelectQuestion;
