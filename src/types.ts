export type QuestionType = "multiple-choice" | "fill-in-the-blank" | "audio" | "reading";

export interface BaseQuestion {
  type: QuestionType;
  prompt?: string; // <- hacerlo opcional
  answer?: string; // <- también opcional para tipos que no lo usen directamente
}

export interface MultipleChoiceQuestion extends BaseQuestion {
  type: "multiple-choice";
  prompt: string;
  options: string[];
  answer: string;
}

export interface FillInTheBlankQuestion extends BaseQuestion {
  type: "fill-in-the-blank";
  prompt: string;
  answer: string;
}

export interface AudioQuestionType extends BaseQuestion {
  type: "audio";
  prompt: string;
  audioSrc: string;
  options: string[];
  answer: string;
}


export type Question =
  | MultipleChoiceQuestion
  | FillInTheBlankQuestion
  | AudioQuestionType;

  export type AnswerMap = Record<string, string>;
