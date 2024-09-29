import axios from "axios";

const API_KEY = import.meta.env.VITE_CURRENCY_API_KEY;

export const fetchRates = async () => {
  try {
    const response = await axios.get(`https://api.currencyfreaks.com/latest?apikey=${API_KEY}`);
    return response.data.rates;
  } catch (error) {
    console.error("Error fetching rates:", error);
    return {};
  }
};
