import Quiz from "../../components/Quiz";
import "../../App.css";
import { useNavigate } from "react-router-dom";

function SimplePresentQuiz() {
  const navigate = useNavigate();
  return (
    <main>
      <h1>Simple Present Quiz</h1>
      <Quiz />
      <p></p>
      <p></p>
      <button onClick={() => navigate("/simplepresentinfo")}>
        {"<- Back to Simple Present Information"}
      </button>
    </main>
  );
}

export default SimplePresentQuiz;