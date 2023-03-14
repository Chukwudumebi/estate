import { useState, createContext } from "react";
export const FormContext = createContext();
export const FormProvider = ({ children }) => {
  const [storename, setStoreName] = useState("");
  const [category, setCategory] = useState("");
  const [policy, setPolicy] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [address, setAddress] = useState("");
  const [fileList, setFileList] = useState([]);

  return (
    <FormContext.Provider
      value={{
        storename,
        category,
        policy,
        phone,
        email,
        address,
        fileList,
        setFileList,
        setAddress,
        setPhone,
        setEmail,
        setStoreName,
        setCategory,
        setPolicy,
      }}
    >
      {children}
    </FormContext.Provider>
  );
};
