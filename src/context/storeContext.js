import { createContext, useReducer, useContext, useMemo } from "react";
import data from "../data/store.json";
const initialState = data.map((store) => ({
  ...store,
}));

const reducer = (state, action) => {
  switch (action.type) {
    case "CREATE_STORE":
      return [...state, action.payload];
    case "TOGGLE_ITEM":
      return state.reduce((acc, item) => {
        if (item.id === action.payload) {
          return [...acc, { ...item, selected: !item.selected }];
        }
        return [...acc, item];
      }, []);
    case "EDIT_ITEM":
      return state.reduce((acc, item) => {
        if (item.id === action.payload.id) {
          return [...acc, action.payload];
        }
        return [...acc, item];
      }, []);
    case "DELETE_ITEM":
      return state.filter((item) => item.id !== action.payload);
    default:
      return state;
  }
};

const StoresContext = createContext();
const StoreProvider = ({ children }) => {
  const [stores, dispatch] = useReducer(reducer, initialState);
  const value = useMemo(() => ({ stores, dispatch }), [stores, dispatch]);

  return (
    <StoresContext.Provider value={value}>{children}</StoresContext.Provider>
  );
};

function useStores() {
  const context = useContext(StoresContext);
  if (context === undefined) {
    throw new Error("stores must be used within a store Provider");
  }
  return context;
}

export { StoreProvider, useStores };
