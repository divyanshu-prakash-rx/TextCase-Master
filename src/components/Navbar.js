import React from "react";
import PropTypes from "prop-types";
// import {useNavigate} from 'react-router-dom'

export default function Navbar(props) {
  return (
    <>
  //  {  console.log(props.mode+"nav")}
      <nav
        className={`navbar navbar-expand-lg bg-${props.mode} border-bottom border-body`}
        data-bs-theme={props.mode}
      >
        <div className="container-fluid">
          <a className="navbar-brand" href="/">
            {props.title}
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item" >
                <a className="nav-link active" aria-current="page" href="/">
                  Home
                </a>
              </li>
              <li className="nav-item" >
                <a className="nav-link" href="/Calculator" >
                  Calculator
                </a>
              </li>
              <li className="nav-item" >
                <a className="nav-link" href="/about">
                  About
                </a>
              </li>
            </ul>
            <div className="form-check form-switch">
              <input className="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckChecked" onClick={props.toggleMode} default />
              <label className={`form-check-label text-${props.mode === "light" ? "dark" : "light"}`} htmlFor="flexSwitchCheckChecked"> {props.mode === "light" ? "Light" : "Dark"} Mode</label>
            </div>
          </div>
        </div>
      </nav >
    </>
  );
}
Navbar.propTypes = { title: PropTypes.string.isRequired };
Navbar.defaultProps = { title: "Set title here" };
