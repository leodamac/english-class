import { AnswerType, Question } from "../types";
import { ComponentType } from "react";

type QuestionRenderer = ComponentType<{
  question: Question;
  onAnswer: (answer: AnswerType) => void;
}>;

const registry = new Map<string, QuestionRenderer>();

export function registerQuestionComponent(type: string, component: QuestionRenderer) {
  registry.set(type, component);
}

export function getQuestionComponent(type: string): QuestionRenderer | undefined {
  return registry.get(type);
}