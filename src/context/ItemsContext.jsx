import { createContext, useReducer, useContext, useMemo } from 'react';
import PropTypes from 'prop-types';
import data from '../data/Items.json';

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

const ItemsContext = createContext();
function ItemsProvider({ children }) {
  const [items, dispatch] = useReducer(reducer, initialState);
  const value = useMemo(() => ({ items, dispatch }), [items, dispatch]);

  return <ItemsContext.Provider value={value}>{children}</ItemsContext.Provider>;
}

ItemsProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

function useItems() {
  const context = useContext(ItemsContext);
  if (context === undefined) {
    throw new Error('useItems must be used within a Item Provider');
  }
  return context;
}

export { ItemsProvider, useItems };
