import React from "react";

export default function ContentBox({ faq }) {
  return (
    <div className={"content-box"}>
      <p>{faq.text}</p>
    </div>
  );
}
