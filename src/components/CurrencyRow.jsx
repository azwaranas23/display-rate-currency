import React from "react";

function CurrencyRow({ currency, rate }) {
  const calculateRate = (baseRate, type) => {
    if (!baseRate) return "-";
    const numRate = parseFloat(baseRate);
    if (type === "buy") {
      return (numRate * 1.05).toFixed(4);
    } else if (type === "sell") {
      return (numRate * 0.95).toFixed(4);
    }
    return numRate.toFixed(4);
  };

  return (
    <tr>
      <td className="border border-white p-2 text-right">{currency}</td>
      <td className="border border-white p-2 text-right">{calculateRate(rate, "buy")}</td>
      <td className="border border-white p-2 text-right">{rate ? parseFloat(rate).toFixed(4) : "-"}</td>
      <td className="border border-white p-2 text-right">{calculateRate(rate, "sell")}</td>
    </tr>
  );
}

export default CurrencyRow;
