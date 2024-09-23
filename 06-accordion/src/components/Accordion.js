import React, { useState } from "react";
import AccordionItem from "./AccordionItem";

const accordion = [
  {
    title: "Where are these chairs assembled?",
    text: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Accusantium, quaerat temporibus quas dolore provident nisi ut aliquid ratione beatae sequi aspernatur veniam repellendus.",
  },
  {
    title: "How long do I have to return my chair?",
    text: "Pariatur recusandae dignissimos fuga voluptas unde optio nesciunt commodi beatae, explicabo natus.",
  },
  {
    title: "Do you ship to countries outside the EU?",
    text: "Excepturi velit laborum, perspiciatis nemo perferendis reiciendis aliquam possimus dolor sed! Dolore laborum ducimus veritatis facere molestias!",
  },
];

export default function Accordion() {
  const [openID, setOpenID] = useState(null);

  function handleToggle(crtID) {
    if (crtID === openID) setOpenID(null);
    else setOpenID(crtID);
  }

  return accordion.map((faq, index) => {
    return (
      <AccordionItem
        faq={faq}
        id={index}
        handleToggle={handleToggle}
        openID={openID}
      />
    );
  });
}
