import React, { useEffect, useState } from "react";
import { fetchRates } from "../api";
import CurrencyRow from "./CurrencyRow";

const CURRENCIES = ["CAD", "IDR", "JPY", "CHF", "EUR", "GBP"];

function CurrencyTable() {
  const [rates, setRates] = useState({});

  useEffect(() => {
    const getRates = async () => {
      const fetchedRates = await fetchRates(CURRENCIES);
      setRates(fetchedRates);
    };
    getRates();
  }, []);

  return (
    <div className="overflow-x-auto">
      <table className="table-auto border-collapse bg-orange-500 text-white">
        <thead>
          <tr>
            <th className="border border-white p-2 bg-orange-400">Currency</th>
            <th className="border border-white p-2 bg-orange-400">We Buy</th>
            <th className="border border-white p-2 bg-orange-400">Exchange Rate</th>
            <th className="border border-white p-2 bg-orange-400">We Sell</th>
          </tr>
        </thead>
        <tbody>
          {CURRENCIES.map((currency) => (
            <CurrencyRow key={currency} currency={currency} rate={rates[currency]} />
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default CurrencyTable;
