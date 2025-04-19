// src/types.ts
export type QuestionType = "multiple-choice" | "fill-in-the-blank" | "audio" | "reading";

export interface BaseQuestion {
  type: QuestionType;
  prompt: string;
}

export interface MultipleChoiceQuestion extends BaseQuestion {
  type: "multiple-choice";
  options: string[];
  answer: string; // Respuesta para una pregunta de opción múltiple
}

export interface FillInTheBlankQuestion extends BaseQuestion {
  type: "fill-in-the-blank";
  answer: string; // Respuesta para una pregunta de completar el espacio en blanco
}

export interface AudioQuestionType extends BaseQuestion {
  type: "audio";
  audioSrc: string;
  options: string[];
  answer: string; // Respuesta para una pregunta de audio
}

export interface ReadingSubQuestion extends BaseQuestion {
  options: string[];
  answer: string; // Respuesta para las sub-preguntas de lectura
}

export interface ReadingQuestionType extends BaseQuestion {
  type: "reading";
  passage: string;
  questions: ReadingSubQuestion[]; // Lista de sub-preguntas dentro de la pregunta de lectura
}

export type Question =
  | MultipleChoiceQuestion
  | FillInTheBlankQuestion
  | AudioQuestionType
  | ReadingQuestionType; // Añadir el tipo de pregunta de lectura

export type AnswerMap = Record<number, string>;
