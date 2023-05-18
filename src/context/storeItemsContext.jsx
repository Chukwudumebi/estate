import { createContext, useReducer, useContext, useMemo } from 'react';
import PropTypes from 'prop-types';

const initialState = [];

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
          return [...acc, { ...item, ...action.payload }];
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
  const [storeItems, dispatch] = useReducer(reducer, initialState);
  const value = useMemo(() => ({ storeItems, dispatch }), [storeItems, dispatch]);

  return <StoreItemsContext.Provider value={value}>{children}</StoreItemsContext.Provider>;
}

StoreItemsProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

function useStoreItems() {
  const context = useContext(StoreItemsContext);
  if (context === undefined) {
    throw new Error('useItems must be used within a Item Provider');
  }
  return context;
}

export { StoreItemsProvider, useStoreItems };
