import React, { useState } from "react";
import ContentBox from "./ContentBox";

export default function AccordionItem({ faq, id }) {
  const [isOpen, setIsOpen] = useState(false);

  function handleToggle() {
    setIsOpen(!isOpen);
  }

  return (
    <div className={`item ${isOpen ? "open" : ""}`} onClick={handleToggle}>
      <p className={"number"}>{id < 10 ? "0" + id.toString() : id}</p>
      <h2 className={"text"}>{faq.title}</h2>
      <p className={"icon"}>{isOpen ? "-" : "+"}</p>
      {isOpen ? <ContentBox faq={faq} /> : null}
    </div>
  );
}
