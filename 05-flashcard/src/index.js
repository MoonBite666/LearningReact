import React, { useState } from "react";
import ReactDOM from "react-dom/client";

import "./styles.css";

const questions = [
  {
    id: 3457,
    question: "What language is React based on?",
    answer: "JavaScript",
  },
  {
    id: 7336,
    question: "What are ththee building blocks of React apps?",
    answer: "Components",
  },
  {
    id: 8832,
    question: "What's the name of the syntax we use to describe a UI in React?",
    answer: "JSX",
  },
  {
    id: 1297,
    question: "How to pass data from parent to child components?",
    answer: "Props",
  },
  {
    id: 9103,
    question: "How to give components memory?",
    answer: "useState hook",
  },
  {
    id: 2002,
    question:
      "What do we call an input element that is completely synchronised with state?",
    answer: "Controlled element",
  },
];

function FlashCards() {
  const [crtID, setCrtID] = useState(2002);
  function handleClick(q) {
    if (q.id === crtID) setCrtID(null);
    else setCrtID(q.id);
  }
  return (
    <div className="flashcards">
      {questions.map((q) => (
        <div
          onClick={() => handleClick(q)}
          className={q.id === crtID ? "selected" : ""}
        >
          <p>{q.id === crtID ? q.answer : q.question}</p>
        </div>
      ))}
    </div>
  );
}

function App() {
  return (
    <>
      <FlashCards />
    </>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
