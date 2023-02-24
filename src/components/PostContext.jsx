import { createContext, useReducer } from "react";

export const PostContext = createContext();

const initialState = {
  Postlist: [],
};
const Actions = {
  Add_post: "Add_post",
  Remove_post: "Remove_post",
  Checked_post:"Checked_post"
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
            region:action.region,
            category:action.category,
            date: new Date().toDateString(),
            time: new Date().toLocaleTimeString(),
            isChecked:false,
          },
        ],
      };
    case Actions.Remove_post:
      return {
        ...state,
        Postlist: state.Postlist.filter((post) => post.id !== action.payload),
      };
      case Actions.Checked_post:
        return {
          ...state,
          Postlist: state.Postlist.map((post) =>
            post.id == action.payload
              ? {
                  ...post,
                  isChecked: true,
                  
                }
              : post
          ),
        };
    default:
      return state;
  }
};

export const Provider = ({ children }) => {
  const [state, dispatch] = useReducer(PostReducer, initialState);
  const value = {
    Postlist: state.Postlist,
    AddPost: (price,timeLeft,productImg,selected,description,region) => {
      dispatch({ type: Actions.Add_post, price: price,time:timeLeft,category:selected,region:region,image:productImg,description:description});
    },
    RemovePost: (postId) => {
      dispatch({ type: Actions.Remove_post, payload: postId });
    },
    
  };
  return <PostContext.Provider value={value}>{children}</PostContext.Provider>;
};
