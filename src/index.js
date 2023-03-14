import * as React from "react";
import * as ReactDOM from "react-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Root from "./routes/root";
import IndexPage from "./routes/index/page";
import IndexLoader from "./routes/index/loader";
import { CurrencyProvider } from "./context/currencyContext";
import { ItemsProvider } from "./context/ItemsContext";
import "./index.css";
import AddItems from "./routes/AddItems";
import EditItems from "./routes/EditItem";
import MainForm from "./form/main";
import { FormProvider } from "./form/formContext/formContext";
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
        path: "/add-item",
        element: <AddItems />,
      },
      {
        path: "/edit-item/:id",
        element: <EditItems />,
      },
      {
        path: "/create-store",
        element: <MainForm />,
      },
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <FormProvider>
      <CurrencyProvider>
        <ItemsProvider>
          <QueryClientProvider client={queryClient}>
            <RouterProvider router={router} />
          </QueryClientProvider>
        </ItemsProvider>
      </CurrencyProvider>
    </FormProvider>
  </React.StrictMode>
);
