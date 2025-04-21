import Quiz from "../../components/Quiz";
import "../../App.css";
import { useNavigate } from "react-router-dom";

function PresentContinuousQuiz() {
  const navigate = useNavigate();
  return (
    <main>
      <h1>Present Continuous Quiz</h1>
      <Quiz />
      <p></p>
      <button onClick={() => navigate("/presentcontinuousinfo")}>
        {"<- Back to Present Continuous Information"}
      </button>
    </main>
  );
}

export default PresentContinuousQuiz;