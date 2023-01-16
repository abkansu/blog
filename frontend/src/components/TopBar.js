import React, { useContext } from "react";
import "../css/topbar.css";
import { Link, NavLink } from "react-router-dom";
import { UserContext } from "../async/CreateContext";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";

const TopBar = (props) => {
  const { user, setUser } = useContext(UserContext);
  return (
    <div className="Top-Bar">
      <div className="Brand">
        <div className="Paragraph">
          <NavLink to="/" style={{ color: "white", textDecoration: "none" }}>
            <p>Hacettepe University Enviromental Engineering</p>
          </NavLink>
        </div>
      </div>
      {user ? 
      <div className="Buttons">
        <div className="Paragraph" style={{ float: "right" }}>
          <NavLink
            to="/"
            style={{ color: "white", textDecoration: "none" }}
            onClick={(event) => {
              setUser(null);
            }}
          >
            <p>Logout</p>
          </NavLink>
        </div>
      </div>
      :
       <div className="Buttons">
        <div className="Paragraph" style={{ float: "right" }}>
          <NavLink
            to="/login"
            style={{ color: "white", textDecoration: "none" }}
          >
            <p>Login</p>
          </NavLink>
        </div>
      </div>}
    </div>
  );
};

export default TopBar;
