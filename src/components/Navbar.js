import React from "react"; // we will write this Navbar in App.js
import PropTypes from "prop-types"; // we have imported the proptype
import { Link } from "react-router-dom";

export default function Navbar(props) {
  return (
    <nav
      className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode} `}
    >
      <div className="container-fluid">
        <Link className={`navbar-brand border border-danger p-2 `} to="/">
          {props.title}
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link className="nav-link " aria-current="page" to="/ ">
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link " to="./About">
                About
              </Link>
            </li>
          </ul>

          <button
            type="button"
            onClick={props.toggleMode}
            id="Dark"
            className={`mx-3 border btn btn-${props.mode}`}
          >
            <i className="bi bi-moon-stars-fill bg-transparent "></i>
          </button>
          <button
            type="button"
            onClick={props.toggleMode}
            className={`mx-3 border btn btn-${props.mode}`}
          >
            {props.btnText}
          </button>
        </div>
      </div>
    </nav>
  );
}

Navbar.prototype = { title: PropTypes.string.isRequired };
Navbar.defaultProps = { title: "Set Title Here" };
