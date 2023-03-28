import * as React from 'react';
import * as ReactDOM from 'react-dom/client';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Root from './routes/root';
import IndexPage from './routes/index/page';
import IndexLoader from './routes/index/loader';
import { CurrencyProvider } from './context/currencyContext';
import { ItemsProvider } from './context/ItemsContext';
import './index.css';
import AddItems from './routes/AddItems';
import EditItems from './routes/EditItem';
import { FormProvider } from './components/form/formContext/formContext';
import Store from './components/store';
import { StoreProvider } from './context/storeContext';
import AddStoreItems from './routes/AddStoreItem';
import { StoreItemsProvider } from './context/storeItemContext';
import AddStoreItem from './components/store/additems';
import CreateStore from './components/store/create-store';

const queryClient = new QueryClient();

const router = createBrowserRouter([
  {
    path: '/',
    element: <Root />,
    children: [
      {
        path: '/',
        element: <IndexPage />,
        loader: IndexLoader(queryClient),
      },

      {
        path: '/add-item',
        element: <AddItems />,
      },
      {
        path: '/store/add-store-item/:id',
        element: <AddStoreItem />,
      },
      {
        path: '/edit-item/:id',
        element: <EditItems />,
      },
      {
        path: '/create-store',
        element: <CreateStore />,
      },
      {
        path: '/store',
        element: <Store />,
      },
      {
        path: '/store/add-store-item',
        element: <AddStoreItems />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <StoreItemsProvider>
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
    </StoreItemsProvider>
  </React.StrictMode>
);
