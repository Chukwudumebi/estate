import { createContext, useReducer } from "react";

export const PostContext = createContext();

const initialState = {
  Postlist: [],
};
const Actions = {
  Add_post: "Add_todo",
  Remove_post: "Remove_todo",
};

const PostReducer = (state, action) => {
  switch (action.type) {
    case Actions.Add_post:
      return {
        Postlist: [
          ...state.Postlist,
          {
            id: Date.now(),
            price: action.price,
            timeleft:action.time,
            description:action.description,
            image:action.image,
            category:action.category,
            date: new Date().toDateString(),
            time: new Date().toLocaleTimeString(),
          },
        ],
      };
    case Actions.Remove_post:
      return {
        ...state,
        Postlist: state.Postlist.filter((post) => post.id !== action.payload),
      };
  
    default:
      return state;
  }
};

export const Provider = ({ children }) => {
  const [state, dispatch] = useReducer(PostReducer, initialState);
  const value = {
    Postlist: state.Postlist,
    AddPost: (price,timeLeft,productImg,selected,description) => {
      dispatch({ type: Actions.Add_post, price: price,time:timeLeft,category:selected,image:productImg,description:description});
    },
    RemovePost: (postId) => {
      dispatch({ type: Actions.Remove_post, payload: postId });
    },
    
  };
  return <PostContext.Provider value={value}>{children}</PostContext.Provider>;
};
