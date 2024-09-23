import Bill from "./Bill";
import Rating from "./Rating";
import Total from "./Total";
import { useState } from "react";

export default function App() {
  const [bill, setBill] = useState(0);
  const [tip, setTip] = useState([]);

  function handleCalcTip(id, percentage) {
    setTip((t) => {
      let tmp = t.slice();
      tmp[id] = percentage;
      return tmp;
    });
  }

  let totalTip = 0;
  for (var i = 0; i < tip.length; i++) {
    totalTip += parseFloat(tip[i]) / 2;
  }
  totalTip *= bill;

  let totalBill = Number(bill) + Number(totalTip);

  return (
    <>
      <Bill bill={bill} setBill={setBill} />
      <Rating id={0} onCalcTip={handleCalcTip}>
        <span>How did you like the service?</span>
      </Rating>
      <Rating id={1} onCalcTip={handleCalcTip}>
        <span>How did your friend like the service?</span>
      </Rating>
      <Total>
        <h2>{`You pay $${totalBill} ($${bill} + $${Number(totalTip).toPrecision(2)} tip)`}</h2>
      </Total>
      <button
        onClick={() => {
          setTip([]);
          setBill(0);
        }}
      >
        Reset
      </button>
    </>
  );
}
