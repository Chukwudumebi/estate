import { createContext, useState } from "react";

export const CurrencyContext = createContext();

const CurrencyProvider = ({ children }) => {
  const [fromcurrency, setFromCurrency] = useState("");
  const [tocurrency, setToCurrency] = useState("");

  const value = {
    fromcurrency,
    setFromCurrency,
    tocurrency,
    setToCurrency,
  };

  return (
    <CurrencyContext.Provider value={value}>
      {children}
    </CurrencyContext.Provider>
  );
};

export default CurrencyProvider;
