import React from "react";
import { ReadingQuestionType } from "../../types";

type Props = {
  question: ReadingQuestionType;
  onAnswer: ( answer: string) => void;
};

const ReadingQuestion: React.FC<Props> = ({ question, onAnswer }) => {
  return (
    <section className="question reading-question">
      <div className="reading-passage">
        <h3>Reading Passage</h3>
        <p>{question.passage}</p>
      </div>

      {question.questions.map((subQ, index) => (
        <div key={index} className="reading-sub-question">
          <p>{subQ.prompt}</p>
          <ul>
            {subQ.options.map((option, i) => (
              <li key={i}>
                <button onClick={() => onAnswer(option)}>{option}</button>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </section>
  );
};

export default ReadingQuestion;
