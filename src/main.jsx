import * as React from 'react';
import * as ReactDOM from 'react-dom/client';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Root from './routes/root';
import IndexLayout from './routes/index/layout';
import IndexLoader from './routes/index/loader';
import { CurrencyProvider } from './context/currencyContext';
import { ItemsProvider } from './context/ItemsContext';
import './index.css';
import AddItems from './routes/AddItems';
import EditItems from './routes/EditItem';
import HomePage from './routes/index/home/page';
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
        element: <IndexLayout />,
        loader: IndexLoader(queryClient),
        children: [
          {
            path: '/',
            element: <HomePage />,
          },
          {
            path: '/store',
            element: <Store />,
          },
        ],
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
          <CurrencyProvider>
            <ItemsProvider>
              <QueryClientProvider client={queryClient}>
                <RouterProvider router={router} />
              </QueryClientProvider>
            </ItemsProvider>
          </CurrencyProvider>
      </StoreProvider>
    </StoreItemsProvider>
  </React.StrictMode>
);
