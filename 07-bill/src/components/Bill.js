export default function Bill({ bill, setBill }) {
  return (
    <div>
      <span>How much was the bill?</span>
      <span>
        <input value={bill} onChange={(e) => setBill(e.target.value)} />
      </span>
    </div>
  );
}
