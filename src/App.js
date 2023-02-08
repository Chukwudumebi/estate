import "./App.css";
import { useState } from "react";
import Navbar from "./components/navbar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Nav from "./components/nav";

function App() {
  return (
    <div className="App">
      <Nav />
    </div>
  );
}

export default App;
