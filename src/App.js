import "./App.css";
import { useState } from "react";
import AddPost from "./pages/AddPost";
import RemovePost from "./pages/removepost";
import Stores from "./pages/stores";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Nav from "./components/nav";

function App() {
  return (
    <Router>
      <div className="App">
        <Nav />
        <Routes>
          <Route path="/AddPost" element={<AddPost />} />
          <Route path="/RemovePost" element={<RemovePost />} />
          <Route path="/stores" element={<Stores />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
