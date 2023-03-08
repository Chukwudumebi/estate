// import * as React from "react";
// import * as ReactDOM from "react-dom";
// import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
// import { createBrowserRouter, RouterProvider } from "react-router-dom";
// import Root from "./routes/root";
// import CreateAsset from "./routes/create-asset";
// import EditAsset from "./routes/edit-asset";
// import IndexPage from "./routes/index/pages";
// import IndexLoader from "./routes/index/loader";
// import { CurrencyProvider } from "./contexts/CurrencyContext";
// import { AssetsProvider } from "./contexts/AssetsContext";
// import "./index.css";

// const queryClient = new QueryClient();

// const router = createBrowserRouter([
//   {
//     path: "/",
//     element: <Root />,
//     // children: [
//     //   {
//     //     path: "/",
//     //     element: <IndexPage />,
//     //     loader: IndexLoader(queryClient),
//     //   },

//     //   {
//     //     path: "/create-asset",
//     //     element: <CreateAsset />,
//     //   },
//     //   {
//     //     path: "/edit-asset/:id",
//     //     element: <EditAsset />,
//     //   },
//   },
// ]);

//  const root=ReactDOM.createRoot(document.getElementById("root"))
//  root.render(
//   <React.StrictMode>
//     {/* <QueryClientProvider client={queryClient}> */}
//       <RouterProvider router={router} />
//     {/* </QueryClientProvider> */}
//   </React.StrictMode>
// );

// import { useState } from "react";
// import AddPost from "./pages/AddPost";
// import RemovePost from "./pages/removepost";
// import Stores from "./pages/stores";
// import { Modal } from "flowbite-react";

// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import Nav from "./components/nav";
// import EditPost from "./pages/editpost";
// import LockPage from "./pages/lockpage";
// import Region from "./components/region";
// import Category from "./components/category";
// import Homepage from "./pages/Homepage";
// import Description from "./components/description";
// import Image from "./components/image";

// import { Provider } from "./components/PostContext";
// import Services from "./pages/services";
// import Automotives from "./pages/automotives";
// import Goods from "./pages/goods";
// import Recreational from "./pages/recreational";
// import Electronics from "./pages/Electronics";
// import Construction from "./pages/construction";
// import Postlist from "./pages/Postlist";
// import Search from "./components/search";
// import Currency from "./components/currenct";
// import Dialogs from "./components/dialog";
// import Tables from "./pages/tables";
// import Newer from "./pages/newer";
// import Imageupload from "./pages/uploadimage";
// import Header from "./pages/newheader";
// import Margin from "./pages/margin";
// import AddItems from "./pages/AddItems";
// import Design from "./pages/redesign";
// import Headers from "./pages/header";
// import Actions from "./pages/Actions";

// function App() {
//   const [open, setOpen] = useState(true);
//   const [visible, setVisible] = useState(false);
//   const handleModalOpen = () => {
//     setVisible(true);
//   };

//   const handleOpen = () => {
//     setOpen(true);
//     console.log("run");
//   };

//   return (
//     <Provider>
//       <div className="h-screen p-4 pt-20 md:pb-8 ">
//         <div className="grid h-full grid-rows-auto-1fr gap-2">
//           <Router>
//             <Nav />

//             <Routes>
//               <Route path="/" element={<Homepage />} />
//               <Route path="/AddPost" element={<AddItems />} />
//               <Route path="/RemovePost" element={<RemovePost />} />
//               <Route path="/stores" element={<Stores />} />
//               <Route path="/EditPost" element={<EditPost />} />
//               <Route path="/LockPage" element={<LockPage />} />
//               <Route path="/Category/Services" element={<Services />} />
//               <Route path="/Category/Goods" element={<Goods />} />
//               <Route path="/Category/Automotives" element={<Automotives />} />
//               <Route path="/Category/Recreational" element={<Recreational />} />
//               <Route path="/Category/Electronics" element={<Electronics />} />
//               <Route path="/Category/Construction" element={<Construction />} />
//               <Route path="/new" element={<Newer />} />
//             </Routes>
//           </Router>
//         </div>
//       </div>
//     </Provider>
//   );
// }

// export default App;
