export type QuestionType = "text" | "single-select" | "multi-select";

export type Question = {
  id: string;
  type: QuestionType;
  prompt: string;
  instructions?: string;
  audioSrc?: string;
  options?: string[];
  answer: string[];
  allowMultipleSelections?: boolean;
};

export type ResponseType = {
  id: string;
  type: string;
  instructions?: string;
  correctAnswers: string[];
  options?: string[]; 
  value?: string;
  orderMatters?: boolean;
  onAnswer: (answer: string) => void;
};

export type AnswerType = {
  value: string[];
  isCorrect: boolean;
};


export type AnswerMap = {
  [key: number]: string[];
};