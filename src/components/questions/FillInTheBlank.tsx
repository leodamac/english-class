import React, { useState } from "react";
import { FillInTheBlankQuestion } from "../../types";

type Props = {
  question: FillInTheBlankQuestion;
  onAnswer: (answer: string) => void;
};

const FillInTheBlank: React.FC<Props> = ({ question, onAnswer }) => {
  const [input, setInput] = useState<string>("");

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    onAnswer(input.trim());
  };

  return (
    <form className="question" onSubmit={submit}>
      <label>
        {question.prompt}
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          required
        />
      </label>
      <button type="submit">Submit</button>
    </form>
  );
};

export default FillInTheBlank;