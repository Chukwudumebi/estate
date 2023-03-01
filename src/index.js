import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import CurrencyProvider from "./context/CurrencyProvider";
import { ItemsProvider } from "./context/ItemsContext";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <ItemsProvider>
    <CurrencyProvider>
      <React.StrictMode>
        <App />
      </React.StrictMode>
    </CurrencyProvider>
  </ItemsProvider>
);
