import React, { useState } from "react";
import ReactDOM from "react-dom/client";

function Step({ step, setStep }) {
  function handleInputChange(e) {
    const n = e.target.value;
    setStep(n);
  }

  return (
    <div style={{ textAlign: "center" }}>
      <input
        type={"range"}
        min={"1"}
        max={"10"}
        value={step}
        onChange={(e) => handleInputChange(e)}
      />
      <span style={{ margin: 10 }}>Step: {step}</span>
    </div>
  );
}

function Count({ count, setCount }) {
  function handleInputChange(e) {
    const t = e.target.value;
    setCount(t);
  }

  return (
    <div style={{ textAlign: "center" }}>
      <button onClick={() => setCount((c) => Number(c) - 1)}>-</button>
      <input
        type={"text"}
        value={count}
        onChange={(e) => handleInputChange(e)}
      />
      <button onClick={() => setCount((c) => Number(c) + 1)}>+</button>
    </div>
  );
}

function DateP({ step, count }) {
  let input = step * count;
  let date = new Date();
  let temp = date.getDate() + input;
  date.setDate(temp);
  date = date.toDateString();

  return (
    <p style={{ margin: 10, textAlign: "center" }}>
      {input !== 0 ? Math.abs(input) + " " : ""}
      {input !== 0 ? (input > 0 ? "Days from today " : "Days ago ") : "Today "}
      {input >= 0 ? "is" : "was"} {date}
    </p>
  );
}

function App() {
  const [step, setStep] = useState(0);
  const [count, setCount] = useState(0);
  return (
    <>
      <Step step={step} setStep={setStep} />
      <Count count={count} setCount={setCount} />
      <DateP step={step} count={count} />
    </>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);
