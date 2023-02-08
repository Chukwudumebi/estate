import "./App.css";
import { useState } from "react";
import Navbar from "./components/navbar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Nav from "./components/nav";

function App() {
  const [loading, setisLoading] = useState(true);
  const spinner = document.getElementById("spinner");

  if (spinner) {
    setTimeout(() => {
      spinner.style.display = "none";
      setisLoading(false);
    }, 4000);
  }
  return (
    !loading && (
      <div className="App">
        <Nav />
      </div>
    )
  );
}

export default App;
