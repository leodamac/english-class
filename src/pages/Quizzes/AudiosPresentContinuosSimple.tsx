import QuizPage from "../QuizModel/QuizModel";
import "../../App.css";
import questions from "../../data/audiopresentsimplecontinouos";

export default function SimplePresentQuiz() {
  return (
    <QuizPage
      title="Audio Quiz"
      questions={questions}
      backTo="/"
    />
  );
}