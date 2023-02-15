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
import Services from "./pages/services";
import Automotives from "./pages/automotives";
import Goods from "./pages/goods";
import Recreational from "./pages/recreational";
import Electronics from "./pages/Electronics";
import Construction from "./pages/construction";
import Postlist from "./pages/Postlist";

function App() {
  return (
    <Provider>
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
            <Route path="/Category/Services" element={<Services />} />
            <Route path="/Category/Goods" element={<Goods />} />
            <Route path="/Category/Automotives" element={<Automotives />} />
            <Route path="/Category/Recreational" element={<Recreational />} />
            <Route path="/Category/Electronics" element={<Electronics />} />
            <Route path="/Category/Construction" element={<Construction />} />
          </Routes>
        </Router>
      </div>
    </Provider>
  );
}

export default App;
