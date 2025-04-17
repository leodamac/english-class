import React from "react";
import { AudioQuestionType } from "../../types";

type Props = {
  question: AudioQuestionType;
  onAnswer: (answer: string) => void;
};

const AudioQuestion: React.FC<Props> = ({ question, onAnswer }) => {
  const playAudio = () => {
    const audio = new Audio(question.audioSrc);
    audio.play();
  };

  return (
    <section className="question">
      <button onClick={playAudio}>Play Audio</button>
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
};

export default AudioQuestion;