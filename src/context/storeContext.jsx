import { createContext, useReducer, useContext, useMemo } from 'react';
import PropTypes from 'prop-types';

const initialState = [];

const reducer = (state, action) => {
  switch (action.type) {
    case 'CREATE_STORE':
      return [...state, { ...action.payload, items: [] }];
    case 'EDIT_STORE':
      return state.map((store) => {
        if (store.id === action.payload.id) {
          return { ...store, ...action.payload };
        }
        return store;
      });
    case 'CREATE_ITEM':
      return state.reduce((acc, store) => {
        if (store.id === action.payload.storeId) {
          return [
            ...acc,
            {
              ...store,
              items: [...store.items, action.payload.item],
            },
          ];
        }
        return [...acc, store];
      }, []);
    case 'TOGGLE_ITEM':
      return state.reduce((acc, store) => {
        if (store.id === action.payload.storeId) {
          return [
            ...acc,
            {
              ...store,
              items: store.items.map((item) => {
                if (item.id === action.payload.id) {
                  return { ...item, selected: !item.selected };
                }
                return item;
              }),
            },
          ];
        }
        return [...acc, store];
      }, []);
    case 'EDIT_ITEM':
      return state.reduce((acc, store) => {
        if (store.id === action.payload.storeId) {
          return [
            ...acc,
            {
              ...store,
              items: store.items.map((item) => {
                if (item.id === action.payload.item.id) {
                  return { ...item, ...action.payload.item };
                }
                return item;
              }),
            },
          ];
        }
        return [...acc, store];
      }, []);
    case 'DELETE_ITEM':
      return state.reduce((acc, store) => {
        if (store.id === action.payload.storeId) {
          return [
            ...acc,
            {
              ...store,
              items: store.items.filter((item) => item.id !== action.payload.itemId),
            },
          ];
        }
        return [...acc, store];
      }, []);
    default:
      return state;
  }
};

export const StoreContext = createContext();
function StoreProvider({ children }) {
  const [stores, dispatch] = useReducer(reducer, initialState);
  const value = useMemo(() => ({ stores, dispatch }), [stores, dispatch]);

  return <StoreContext.Provider value={value}>{children}</StoreContext.Provider>;
}

function useStores() {
  const context = useContext(StoreContext);
  if (context === undefined) {
    throw new Error('stores must be used within a store Provider');
  }
  return context;
}

StoreProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export { StoreProvider, useStores };
