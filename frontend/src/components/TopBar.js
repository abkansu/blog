import React from "react";
import "../css/topbar.css";
import { Link } from "react-router-dom";

const TopBar = (props) => {
  return (
    <div className="Top-Bar">
      <div className="Brand">
        <div className="Paragraph">
          <p>Hacettepe University Enviromental Engineering</p>
        </div>
      </div>
      <div className="Buttons">
        <div className="Paragraph" style={{ float: "right" }}>
          <p>Login</p>
        </div>
        <div
          className="Paragraph"
          style={{ float: "right", marginRight: "10%" }}
        >
          <p>Resources</p>
        </div>
        <div
          className="Paragraph"
          style={{ float: "right", marginRight: "10%" }}
        >
          <p>Staff</p>
        </div>
      </div>
    </div>
  );
};

export default TopBar;
