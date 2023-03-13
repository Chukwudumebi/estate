import { createContext, useState, useMemo, useContext } from "react";

// create currency context with default value
const CurrencyContext = createContext();

function CurrencyProvider({ children }) {
  // fetch currency from local storage

  const [currency, setCurrency] = useState("QUEC");
  // memoize value with useMemo hook
  const value = useMemo(
    () => ({
      currency,
      setCurrency,
    }),
    [currency, setCurrency]
  );

  return (
    <CurrencyContext.Provider value={value}>
      {children}
    </CurrencyContext.Provider>
  );
}

// custom hook to use currency context
function useCurrency() {
  const context = useContext(CurrencyContext);
  if (!context) {
    throw new Error("useCurrency must be used within a CurrencyProvider");
  }
  return context;
}

export { CurrencyProvider, useCurrency };
