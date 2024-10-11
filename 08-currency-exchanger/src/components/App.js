import { useEffect, useState } from "react";

function debounce(func, delay) {
  let timeoutId;
  return function (...args) {
    if (timeoutId) {
      clearTimeout(timeoutId);
    }
    timeoutId = setTimeout(() => {
      func(...args);
    }, delay);
  };
}

export default function App() {
  const [cur, SetCur] = useState(1);
  const [fromType, SetFromType] = useState("USD");
  const [toType, SetToType] = useState("EUR");
  const [converted, SetConverted] = useState(0);
  const [loading, SetLoading] = useState(false);

  useEffect(
    function () {
      const debouncedConvert = debounce(async () => {
        if (loading) {
          return;
        }
        SetLoading(true);
        const res = await fetch(
          `https://exchange-rates.abstractapi.com/v1/live/?api_key=ad8388855439431d9c1c1d4ff30a1438&base=${fromType}&target=${toType}`,
        );
        const data = await res.json();
        console.log(data);
        SetConverted(data.exchange_rates[toType] * cur);
        SetLoading(false);
      }, 500); // 500ms delay
      if (fromType === toType) SetConverted(cur);
      debouncedConvert();
    },
    [fromType, toType, cur],
  );

  return (
    <>
      <input
        type="text"
        value={cur}
        onChange={(e) => SetCur(Number(e.target.value))}
        disabled={loading}
      />
      <select
        value={fromType}
        disabled={loading}
        onChange={(e) => SetFromType(e.target.value)}
      >
        <option value="USD">USD</option>
        <option value="EUR">EUR</option>
        <option value="CAD">CAD</option>
        <option value="INR">INR</option>
      </select>
      <select
        value={toType}
        disabled={loading}
        onChange={(e) => SetToType(e.target.value)}
      >
        <option value="USD">USD</option>
        <option value="EUR">EUR</option>
        <option value="CAD">CAD</option>
        <option value="INR">INR</option>
      </select>
      <p>{converted}</p>
    </>
  );
}
