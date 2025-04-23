import questions from "../../data/presentContinuousQuestions";
import QuizPage from "../QuizModel/QuizModel";

export default function PresentContinuousQuiz() {
  return (
    <QuizPage
      title="Present Continuous Quiz"
      questions={questions}
      backTo="/presentcontinuousinfo"
    />
  );
}