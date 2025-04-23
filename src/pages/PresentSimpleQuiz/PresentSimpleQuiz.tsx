import QuizPage from "../QuizModel/QuizModel";
import "../../App.css";
import questions from "../../data/simplePresenQuestions";

export default function SimplePresentQuiz() {
  return (
    <QuizPage
      title="Simple Present Quiz"
      questions={questions}
      backTo="/simplepresentinfo"
    />
  );
}