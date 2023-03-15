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
  const [isPhysicallyLocated, setisPhysicallyLocated] = useState(false);
  const [agreement, setAgreement] = useState(false);

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
        agreement,
        isPhysicallyLocated,
        setAgreement,
        setisPhysicallyLocated,
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
