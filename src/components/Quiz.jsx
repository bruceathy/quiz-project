import { useState } from "react";
import QUESTIONS from "../questions.js";

export default function Quiz() {
  const [userAnswers, setUserAnswers] = useState([]);

  const activeQuestionIndex = userAnswers.length;
  return (
    <div>
      <p>Current Question: {activeQuestionIndex}</p>
    </div>
  );
}
