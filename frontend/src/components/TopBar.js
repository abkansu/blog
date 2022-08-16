import React from "react";
import "../css/topbar.css";
import { Link, NavLink } from "react-router-dom";

const TopBar = (props) => {
  return (
    <div className="Top-Bar">
      <div className="Brand">
        <div className="Paragraph">
          <NavLink to="/" style={{ color: "white", textDecoration: "none" }}>
            <p>Hacettepe University Enviromental Engineering</p>
          </NavLink>
        </div>
      </div>
      <div className="Buttons">
        <div className="Paragraph" style={{ float: "right" }}>
          <NavLink to="/" style={{ color: "white", textDecoration: "none" }}>
            <p>Login</p>
          </NavLink>
        </div>
        {/* <div
          className="Paragraph"
          style={{ float: "right", marginRight: "10%" }}
        >
          <NavLink
            to="/resources"
            style={{ color: "white", textDecoration: "none" }}
          >
            <p>Resources</p>
          </NavLink>
        </div>
        <div
          className="Paragraph"
          style={{ float: "right", marginRight: "10%" }}
        >
          <NavLink
            to="/staff"
            style={{ color: "white", textDecoration: "none" }}
          >
            <p>Staff</p>
          </NavLink>
        </div> */}
      </div>
    </div>
  );
};

export default TopBar;
