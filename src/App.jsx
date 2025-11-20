import React, { useState } from "react";
import "./App.css";
import bill50 from "./assets/50dh.jpeg";
import bill100 from "./assets/100dh.jpeg";
import bill200 from "./assets/200dh.jpeg";
import bill20 from "./assets/20dh.jpeg";

const bills = [
  { value: 50, label: "50 DH", img: bill50 },
  { value: 100, label: "100 DH", img: bill100 },
  { value: 200, label: "200 DH", img: bill200 },
  { value: 20, label: "20 DH", img: bill20 },
];

export default function App() {
  const [counts, setCounts] = useState({ 50: 0, 100: 0, 200: 0, 20: 0 });

  const increment = (value) => {
    setCounts({ ...counts, [value]: counts[value] + 1 });
  };

  const decrement = (value) => {
    setCounts({ ...counts, [value]: Math.max(0, counts[value] - 1) });
  };

  const total = Object.entries(counts).reduce(
    (sum, [value, count]) => sum + value * count,
    0
  );

  return (
    <div className="container">
      <h1 className="header">Taxi Money Calculator</h1>
      <div className="billsContainer">
        {bills.map((bill) => (
          <div key={bill.value} className="billCard">
            <img src={bill.img} alt={bill.label} className="billImage" />
            <p className="label">{bill.label}</p>
            <div className="controls">
              <button className="button" onClick={() => decrement(bill.value)}>
                -
              </button>
              <span className="count">{counts[bill.value]}</span>
              <button className="button" onClick={() => increment(bill.value)}>
                +
              </button>
            </div>
          </div>
        ))}
      </div>
      <div className="total">Total: {total} DH</div>
    </div>
  );
}
