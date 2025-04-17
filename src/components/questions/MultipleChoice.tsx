import React from "react";
import { MultipleChoiceQuestion } from "../../types";

type Props = {
  question: MultipleChoiceQuestion;
  onAnswer: (answer: string) => void;
};

const MultipleChoice: React.FC<Props> = ({ question, onAnswer }) => (
  <section className="question">
    <p>{question.prompt}</p>
    <ul>
      {question.options.map((option, i) => (
        <li key={i}>
          <button onClick={() => onAnswer(option)}>{option}</button>
        </li>
      ))}
    </ul>
  </section>
);

export default MultipleChoice;