import React from "react";
import { Link } from "react-router-dom";
import "./Main.css";

const topics = [
  { path: "/presentsimpleinfo", label: "Present Simple" },
  { path: "/presentcontinuousinfo", label: "Present Continuous" },
  { path: "/quizzes/AudiosPresentContinuosSimple", label: "Audio Quiz" },
];

const MainPage: React.FC = () => {
  return (
    <div className="main-container">
    <h1 className="main-title">English Learning Hub</h1>
    <p className="main-subtitle">Select a topic to start learning or practicing:</p>
    <ul className="topic-grid">
        {topics.map((topic) => (
        <li key={topic.path}>
            <Link to={topic.path} className="topic-card">
            {topic.label}
            </Link>
        </li>
        ))}
    </ul>
    </div>
  );
};

export default MainPage;
