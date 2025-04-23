import React from "react";
import { Question, AnswerType } from "../../types";
import { getQuestionComponent } from "../../utils/questionComponentRegistry";

type Props = {
  question: Question;
  onAnswer: (answer: AnswerType) => void;
};

const QuestionRenderer: React.FC<Props> = ({ question, onAnswer }) => {
  const Component = getQuestionComponent(question.type);

  if (!Component) {
    return <p>Unsupported: {question.type}</p>;
  }

  return <Component question={question} onAnswer={onAnswer} />;
};

export default QuestionRenderer;
