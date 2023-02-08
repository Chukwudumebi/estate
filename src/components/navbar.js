import { useState, useEffect } from "react";
import logo from "../logo.svg";
import { Link, Navigate, useLocation, useNavigate } from "react-router-dom";
// AiOutlinePlus;
// AiOutlineMinus;
// BsSearch;
export const Navbar = ({ nav, change }) => {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState("home");
  const location = useLocation();

  useEffect(() => {
    if (location.pathname == "/") {
      setActiveTab("home");
    }
  }, [location]);

  //   let navb = "navbar-toggler-icon";
  //   const styles = {
  //     display: "block",
  //     color: "orangered",
  //     fontSize: font ? "20px" : "40px",
  //   };
  //   console.log(activeTab);
  //   const style = {
  //     fontSize: "30px",
  //   };

  return (
    <nav
      className={`navbar navbar-expand-lg navbar-light bg-${
        nav ? "light" : "dark"
      } sticky-top`}
    >
      <div className="container">
        <Link to="/" className="Link">
          <img src={logo} alt="logo" />
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          {/* <span className={`${navb}`}></span> */}
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav ml-auto">
            <Link to="/">
              <li onClick={() => setActiveTab("TodoList")}> </li>
            </Link>
          </ul>
        </div>
      </div>
    </nav>
  );
};
