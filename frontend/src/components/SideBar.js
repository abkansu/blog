import React from "react";
import "../css/sidebar.css";
import { NavLink } from "react-router-dom";

const SideBar = (props) => {
  return (
    <div className="Bar">
      <div className="Element">
        <NavLink to={"/"} className="Link">
          Home
        </NavLink>
      </div>
      <div className="Element">
        <NavLink to={"/resources"} className="Link">
          Resources
        </NavLink>
      </div>
      <div className="Element">
        <NavLink to={"/staff"} className="Link">
          Staff
        </NavLink>
      </div>
      <div className="Element">
        <NavLink to={"/about"} className="Link">
          About
        </NavLink>
      </div>
    </div>
  );
};

export default SideBar;
