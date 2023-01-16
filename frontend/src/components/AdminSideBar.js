import React from "react";
import { motion } from "framer-motion";
import { NavLink } from "react-router-dom";


const AdminSideBar = (props) => {
  return (
    <div className="Bar">
      <div className="Element">
        <NavLink to={"/"} className="Link">
          Status
        </NavLink>
      </div>
      <div className="Element">
        <NavLink to={"/resources"} className="Link">
          Resources
        </NavLink>
      </div>
      <div className="Element">
        <NavLink to={"/staff"} className="Link">
          Users
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

export default AdminSideBar;