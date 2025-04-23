import Quiz from "../../components/Quiz";
import "../../App.css";
import { useNavigate } from "react-router-dom";
import { Question } from "../../types";


interface QuizPageProps {
  title: string;
  questions: Question[];
  backTo: string;
}

function QuizPage({ title, questions, backTo }: QuizPageProps) {
  const navigate = useNavigate();

  return (
    <main>
      <h1>{title}</h1>
      <Quiz questions={questions} />
      <p></p>
      <button onClick={() => navigate(backTo)}>
        {"<- Back to Information"}
      </button>
    </main>
  );
}

export default QuizPage;
