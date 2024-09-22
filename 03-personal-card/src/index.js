import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

function App() {
  return (
    <div className={"card"}>
      <Avatar />
      <Intro />
      <SkillList />
    </div>
  );
}

const Skills = [
  {
    text: "Catching Fish",
    color: "cyan",
    level: "intermediate",
  },
  {
    text: "Cook",
    color: "orange",
    level: "advanced",
  },
  {
    text: "Sewing",
    color: "gray",
    level: "intermediate",
  },
  {
    text: "Protect",
    color: "green",
    level: "beginner",
  },
];

function Avatar() {
  return (
    <img
      className={"avatar"}
      src={"/absproxy/3000/avatar.jpg"}
      alt={"avatar"}
    />
  );
}

function Intro() {
  return (
    <div className={"data"}>
      <h1>Tanasa</h1>
      <p>A grey hair, different-eyed furry girl.</p>
    </div>
  );
}

function SkillList() {
  return (
    <ul className={"skill-list"}>
      {Skills.map((skill) => (
        <Skill skillObj={skill} />
      ))}
    </ul>
  );
}

function Skill({ skillObj }) {
  let emoji = null;
  if (skillObj.level === "advanced") emoji = "🚗";
  else if (skillObj.level === "intermediate") emoji = "🏍️";
  else if (skillObj.level === "beginner") emoji = "🚲";
  return (
    <li className={"skill"} style={{ backgroundColor: skillObj.color }}>
      <span>{skillObj.text}</span>
      <span>{emoji}</span>
    </li>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
