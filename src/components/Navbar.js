import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

export default function Navbar(props) {
  return (
    <>
      <nav
        // className="navbar navbar-expand-lg navbar-light"
        // style={{ backgroundColor: "#e3f2fd" }}
        className={props.code.class}
        style={{ backgroundColor: `${props.code.style}` }}
      >
        <div className="container-fluid">
          <Link className="navbar-brand" to="/">
            <strong>{props.title}</strong>
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="/navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to="/">
                  <strong>{props.head1}</strong>
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to="/about">
                  <strong>{props.head2}</strong>
                </Link>
              </li>
            </ul>
            <div className="form-check form-switch">
              <input
                onClick={props.toggle}
                className="form-check-input"
                type="checkbox"
                role="switch"
                id="flexSwitchCheckDefault"
              />
              <label
                className={`form-check-label ${props.code.txt}`}
                htmlFor="flexSwitchCheckDefault"
              >
                <strong>{props.code.msg}</strong>
              </label>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}

Navbar.propTypes = {
  title: PropTypes.string,
  head1: PropTypes.string,
  head2: PropTypes.string,
};

Navbar.defaultProps = {
  title: "Title here",
  head1: "Navbar component",
  head2: "Navbar component",
};
