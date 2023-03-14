import { useState, createContext } from "react";
export const FormContext = createContext();
export const FormProvider = ({ children }) => {
  const [storename, setStoreName] = useState("");
  const [category, setCategory] = useState("");
  const [policy, setPolicy] = useState("");

  return (
    <FormContext.Provider
      value={{
        storename,
        category,
        policy,
        setStoreName,
        setCategory,
        setPolicy,
      }}
    >
      {children}
    </FormContext.Provider>
  );
};
