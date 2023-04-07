import { createContext, useReducer, useContext, useMemo } from 'react';
import data from '../data/storeitems.json';

const initialState = data.map((items) => ({
  ...items,
  selected: false,
}));

const reducer = (state, action) => {
  switch (action.type) {
    case 'CREATE_ITEM':
      return [...state, action.payload];
    case 'TOGGLE_ITEM':
      return state.reduce((acc, item) => {
        if (item.id === action.payload) {
          return [...acc, { ...item, selected: !item.selected }];
        }
        return [...acc, item];
      }, []);
    case 'EDIT_ITEM':
      return state.reduce((acc, item) => {
        if (item.id === action.payload.id) {
          return [...acc, action.payload];
        }
        return [...acc, item];
      }, []);
    case 'DELETE_ITEM':
      return state.filter((item) => item.id !== action.payload);
    default:
      return state;
  }
};

const StoreItemsContext = createContext();
function StoreItemsProvider({ children }) {
  const [StoreItems, dispatch] = useReducer(reducer, initialState);

  const value = useMemo(() => ({ StoreItems, dispatch }), [StoreItems, dispatch]);

  return <StoreItemsContext.Provider value={value}>{children}</StoreItemsContext.Provider>;
}

function useStoreItems() {
  const context = useContext(StoreItemsContext);
  if (context === undefined) {
    throw new Error('useStoreItems must be used within a Item Provider');
  }
  return context;
}

export { StoreItemsProvider, useStoreItems };
