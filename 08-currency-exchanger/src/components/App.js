import { useEffect, useState } from "react";

export default function App() {
  const [cur, SetCur] = useState(1);
  const [fromType, SetFromType] = useState("USD");
  const [toType, SetToType] = useState("EUR");
  const [converted, SetConverted] = useState(0);

  useEffect(
    function () {
      async function convert() {
        const res = await fetch(
          // `https://exchange-rates.abstractapi.com/v1/live/?api_key=ad8388855439431d9c1c1d4ff30a1438&base=${fromType}&target=${toType}`
          "https://exchange-rates.abstractapi.com/v1/live/?api_key=ad8388855439431d9c1c1d4ff30a1438&base=USD&target=EUR"
        );
        const data = await res.json().base;
        SetConverted(() => String(data));
      }
      convert();
    },
    [fromType, toType, cur]
  );

  return (
    <>
      <input
        type="text"
        value={cur}
        onChange={(e) => SetCur(Number(e.target.value))}
      />
      <select value={fromType} onChange={(e) => SetFromType(e.target.value)}>
        <option value="USD">USD</option>
        <option value="EUR">EUR</option>
        <option value="CAD">CAD</option>
        <option value="INR">INR</option>
      </select>
      <select value={toType} onChange={(e) => SetToType(e.target.value)}>
        <option value="USD">USD</option>
        <option value="EUR">EUR</option>
        <option value="CAD">CAD</option>
        <option value="INR">INR</option>
      </select>
      <p>{converted}</p>
    </>
  );
}
