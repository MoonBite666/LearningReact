import React, { useState } from "react";
import ReactDOM from "react-dom/client";

function Step({ step, setStep }) {
  return (
    <div style={{ textAlign: "center" }}>
      <button onClick={() => setStep(step > 0 ? step - 1 : 0)}>-</button>
      <span style={{ margin: 10 }}>Step: {step}</span>
      <button onClick={() => setStep(step + 1)}>+</button>
    </div>
  );
}

function Count({ count, setCount }) {
  return (
    <div style={{ textAlign: "center" }}>
      <button onClick={() => setCount(count - 1)}>-</button>
      <span style={{ margin: 10 }}>Count: {count}</span>
      <button onClick={() => setCount(count + 1)}>+</button>
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
