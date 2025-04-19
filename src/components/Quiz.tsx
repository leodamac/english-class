import React, { useState, useEffect } from "react";
import questions from "../data/questions";
import MultipleChoice from "./questions/MultipleChoice";
import FillInTheBlank from "./questions/FillInTheBlank";
import AudioQuestion from "./questions/AudioQuestion";
import Result from "./Result";
import { Question, AnswerMap } from "../types";


const shuffleArray = <T,>(array: T[]): T[] => {
  const shuffled = [...array];
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }
  return shuffled;
};

const Quiz: React.FC = () => {
  const [quizQuestions, setQuizQuestions] = useState<Question[]>([]);
  const [current, setCurrent] = useState<number>(0);
  const [answers, setAnswers] = useState<AnswerMap>({});
  const [finished, setFinished] = useState<boolean>(false);

  useEffect(() => {
    const selected = shuffleArray(questions).slice(0, 10);
    setQuizQuestions(selected);
  }, []);

  const handleAnswer = (answer: string) => {
    setAnswers((prev) => ({ ...prev, [current]: answer }));
    if (current + 1 < quizQuestions.length) {
      setCurrent(current + 1);
    } else {
      setFinished(true);
    }
  };

  const resetQuiz = () => {
    const selected = shuffleArray(questions).slice(0, 10);
    setQuizQuestions(selected);
    setCurrent(0);
    setAnswers({});
    setFinished(false);
  };

  if (quizQuestions.length === 0) return <p>Loading...</p>;

  if (finished) {
    return <Result questions={quizQuestions} answers={answers} onReset={resetQuiz} />;
  }

  const question: Question = quizQuestions[current];

  switch (question.type) {
    case "multiple-choice":
      return <MultipleChoice question={question} onAnswer={handleAnswer} />;
    case "fill-in-the-blank":
      return <FillInTheBlank question={question} onAnswer={handleAnswer} />;
    case "audio":
      return <AudioQuestion question={question} onAnswer={handleAnswer} />;
    default:
      return null;
  }
};

export default Quiz;