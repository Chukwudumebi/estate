import * as React from 'react';
import * as ReactDOM from 'react-dom/client';
import * as Tooltip from '@radix-ui/react-tooltip';

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
import StoreDetails from './components/store/storedetails';
import EditStoreItems from './routes/EditStoreItem';
import EditStore from './routes/EditStore';

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
          {
            path: '/store/:id',
            element: <StoreDetails />,
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
        path: '/Edit-Store/:id',
        element: <EditStore />,
      },

      {
        path: '/store/add-store-item',
        element: <AddStoreItems />,
      },
      {
        path: '/store/edit-store-item/:id',
        element: <EditStoreItems />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Tooltip.Provider>
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
    </Tooltip.Provider>
  </React.StrictMode>
);
