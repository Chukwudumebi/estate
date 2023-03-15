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
import Store from "./components/store";
import { StoreProvider } from "./context/storeContext";
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
        path: "/store/add-item",
        element: <AddItems />,
      },
      {
        path: "/edit-item/:id",
        element: <EditItems />,
      },
      {
        path: "/store/create-store",
        element: <MainForm />,
      },
      {
        path: "/store",
        element: <Store />,
      },
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <StoreProvider>
      <FormProvider>
        <CurrencyProvider>
          <ItemsProvider>
            <QueryClientProvider client={queryClient}>
              <RouterProvider router={router} />
            </QueryClientProvider>
          </ItemsProvider>
        </CurrencyProvider>
      </FormProvider>
    </StoreProvider>
  </React.StrictMode>
);
