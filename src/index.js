import * as React from "react";
import * as ReactDOM from "react-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Root from "./routes/root";
import IndexPage from "./routes/index/pages";
import IndexLoader from "./routes/index/loader";
import { CurrencyProvider } from "./context/currencyContext";
import "./index.css";
import Homie from "./pages/homie";
import AddItems from "./pages/AddItems";
const queryClient = new QueryClient();

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      {
        path: "/",
        element: <IndexPage />,
        loader: IndexLoader(queryClient),
      },

      {
        path: "/AddItem",
        element: <AddItems />,
      },
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <CurrencyProvider>
      <QueryClientProvider client={queryClient}>
        <RouterProvider router={router} />
      </QueryClientProvider>
    </CurrencyProvider>
  </React.StrictMode>
);

// import React from "react";
// import ReactDOM from "react-dom/client";
// import "./index.css";
// import App from "./App";
// // import CurrencyProvider from "./context/currencyContext";
// import { ItemsProvider } from "./context/ItemsContext";
// import { CurrencyProvider } from "./context/currencyContext";

// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(
//   <ItemsProvider>
//     <CurrencyProvider>
//       <React.StrictMode>
//         <App />
//       </React.StrictMode>
//     </CurrencyProvider>
//   </ItemsProvider>
// );
