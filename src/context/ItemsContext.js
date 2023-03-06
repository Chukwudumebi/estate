import { createContext, useReducer, useContext, useMemo } from "react";
import data from "../data/Items.json";
const initialState = data.map((items) => ({
  ...items,
  selected: false,
}));


// const Action = { type: "CREATE_ITEM", Payload: "items" };

const reducer = (state, action) => {
  switch (action.type) {
    case "CREATE_ITEM":
      return [...state, action.payload];
    default:
      return state;
  }
};

const ItemsContext = createContext();
const ItemsProvider = ({ children }) => {
  const [items, dispatch] = useReducer(reducer, initialState);
  const value = useMemo(() => ({ items, dispatch }), [items, dispatch]);

  return (
    <ItemsContext.Provider value={value}>{children}</ItemsContext.Provider>
  );
};

function useItems() {
  const context = useContext(ItemsContext);
  if (context === undefined) {
    throw new Error("useItems must be used within a Item Provider");
  }
  return context;
}

export { ItemsProvider, useItems };
