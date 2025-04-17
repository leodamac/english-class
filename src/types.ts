export type QuestionType = "multiple-choice" | "fill-in-the-blank" | "audio";

export interface BaseQuestion {
  type: QuestionType;
  prompt: string;
  answer: string;
}

export interface MultipleChoiceQuestion extends BaseQuestion {
  type: "multiple-choice";
  options: string[];
}

export interface FillInTheBlankQuestion extends BaseQuestion {
  type: "fill-in-the-blank";
}

export interface AudioQuestionType extends BaseQuestion {
  type: "audio";
  audioSrc: string;
  options: string[];
}

export type Question =
  | MultipleChoiceQuestion
  | FillInTheBlankQuestion
  | AudioQuestionType;

export type AnswerMap = Record<number, string>;
