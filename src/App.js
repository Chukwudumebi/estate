import { useState } from "react";
import AddPost from "./pages/AddPost";
import RemovePost from "./pages/removepost";
import Stores from "./pages/stores";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Nav from "./components/nav";
import EditPost from "./pages/editpost";
import LockPage from "./pages/lockpage";
import Region from "./components/region";
import Category from "./components/category";
import Homepage from "./pages/Homepage";
import Description from "./components/description";
import { Provider } from "./components/PostContext";
import Postlist from "./pages/Postlist";

// import { Container } from "tailwind-react-ui";
function App() {
  return (
    <Provider>
      <div className="App">
        <Router>
          <Nav />
          <Routes>
            <Route path="/" element={<Postlist />} />
            <Route path="/AddPost" element={<AddPost />} />
            <Route path="/RemovePost" element={<RemovePost />} />
            <Route path="/stores" element={<Stores />} />
            <Route path="/EditPost" element={<EditPost />} />
            <Route path="/LockPage" element={<LockPage />} />
            <Route path="/Category/Services" element={<LockPage />} />
          </Routes>
        </Router>
      </div>
    </Provider>
  );
}

export default App;
