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
import Store from './components/Store/Index';
import { StoreProvider } from './context/storeContext';
import { StoreItemsProvider } from './context/storeItemsContext';
import AddStoreItem from './routes/AddStoreItem';
import CreateStore from './components/Store/create-store';
import EditStoreItems from './routes/EditStoreItem';
import EditStore from './routes/EditStore';
import PropertySearch from './components/PropertySearch';

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
            element: (
                <HomePage />
            ),
          },
          {
            path: '/store/:id',
            element: <Store />,
          },
        ],
      },

      {
        path: '/add-item',
        element: <AddItems />,
      },
      {
        path: '/store/:id/add-item',
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
        path: '/edit-Store/:id',
        element: <EditStore />,
      },

      {
        path: '/store/add-store-item',
        element: <AddStoreItem />,
      },
      {
        path: '/store/:storeId/edit-item/:itemId',
        element: <EditStoreItems />,
      },
      {
        path:'/property-search',
        element:<PropertySearch />
      }
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Tooltip.Provider>
      <StoreProvider>
        <StoreItemsProvider>
          <CurrencyProvider>
            <ItemsProvider>
              <QueryClientProvider client={queryClient}>
                <RouterProvider router={router} />
              </QueryClientProvider>
            </ItemsProvider>
          </CurrencyProvider>
        </StoreItemsProvider>
      </StoreProvider>
    </Tooltip.Provider>
  </React.StrictMode>
);
