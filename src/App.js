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

function App() {
  return (
    <div className="App">
      <Router>
        <Nav />
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/AddPost" element={<AddPost />} />
          <Route path="/RemovePost" element={<RemovePost />} />
          <Route path="/stores" element={<Stores />} />
          <Route path="/EditPost" element={<EditPost />} />
          <Route path="/LockPage" element={<LockPage />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
