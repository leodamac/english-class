import { JSX } from "react";
import { Question } from "../types";

export type QuestionComponentProps<Q extends Question> = {
  question: Q;
  onAnswer: (answer: string) => void;
};

const registry = new Map<Question["type"], React.ComponentType<any>>();

export const registerQuestionComponent = <
  Q extends Question,
  T extends Q["type"]
>(
  type: T,
  component: React.ComponentType<QuestionComponentProps<Extract<Question, { type: T }>>>
) => {
  registry.set(type, component);
};

export const getQuestionComponent = (
  question: Question,
  onAnswer: (a: string) => void
): JSX.Element => {
  const Component = registry.get(question.type);
  if (!Component) {
    throw new Error(`No component registered for type ${question.type}`);
  }

  return <Component question={question as any} onAnswer={onAnswer} />;
};
