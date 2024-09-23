import ContentBox from "./ContentBox";

export default function AccordionItem({ faq, id, handleToggle, openID }) {
  return (
    <div
      className={`item ${openID === id ? "open" : ""}`}
      onClick={() => handleToggle(id)}
    >
      <p className={"number"}>{id < 10 ? "0" + id.toString() : id}</p>
      <h2 className={"text"}>{faq.title}</h2>
      <p className={"icon"}>{openID === id ? "-" : "+"}</p>
      {openID === id ? <ContentBox faq={faq} /> : null}
    </div>
  );
}
