import { useState } from "react";

export default function Quiz() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [userAnswers, setUserAnswers] = useState([]);
  return (
    <div>
      <p>Current Question: {currentQuestion}</p>
    </div>
  );
}
