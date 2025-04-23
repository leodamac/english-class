import React, { useState, useEffect } from "react";
import Result from "./Result";
import { Question, AnswerMap, AnswerType } from "../types";
import { getQuestionComponent } from "../utils/questionComponentRegistry";
import "../components/questions";

interface QuizProps {
  questions: Question[];
}

const shuffleArray = <T,>(array: T[]): T[] => {
  const shuffled = [...array];
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }
  return shuffled;
};

const Quiz: React.FC<QuizProps> = ({ questions }) => {
  const [quizQuestions, setQuizQuestions] = useState<Question[]>([]);
  const [current, setCurrent] = useState<number>(0);
  const [answers, setAnswers] = useState<AnswerMap>({});
  const [finished, setFinished] = useState<boolean>(false);

  useEffect(() => {
    const selected = shuffleArray(questions).slice(0, 10);
    setQuizQuestions(selected);
  }, [questions]);

  const handleAnswer = (answer: AnswerType) => {
    setAnswers((prev) => ({
      ...prev,
      [current]: Array.isArray(answer.value) ? answer.value : [answer.value],
    }));
  
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
  
  const question = quizQuestions[current];
  const QuestionComponent = getQuestionComponent(question.type);
  
  if (!QuestionComponent) {
    return <p>Error: No renderer for question type "{question.type}"</p>;
  }
  
  return <QuestionComponent question={question} onAnswer={handleAnswer} />;
};

export default Quiz;
