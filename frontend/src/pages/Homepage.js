import React from "react";
import { Link, NavLink } from "react-router-dom";
import SideBar from "../components/SideBar";

const Homepage = (props) => {
  return (
    <div
      style={{
        width: "80%",
        alignSelf: "center",
        margin: "auto",
        height: "100%",
      }}
    >
      <SideBar />
    </div>
  );
};

export default Homepage;

{
  /* <div style={{ width: "10%", float: "left" }}>
        <div
          style={{
            marginTop: "2%",
            backgroundColor: "#15510F",
            borderRadius: "2px",
            height: "30px",
            textAlign: "center",
            overflow: "hidden",
            cursor: "pointer",
          }}
        >
          {" "}
          <NavLink
            to={"/"}
            style={{
              textDecoration: "none",
              color: "white",
              fontFamily: "Josefin Sans, sans-serif",
            }}
          >
            Home
          </NavLink>
        </div>
        <div
          style={{
            marginTop: "2%",
            backgroundColor: "#15510F",
            borderRadius: "2px",
            height: "30px",
            textAlign: "center",
            overflow: "hidden",
            cursor: "pointer",
          }}
        >
          <NavLink
            to={"/resources"}
            style={{
              textDecoration: "none",
              color: "white",
              fontFamily: "Josefin Sans, sans-serif",
            }}
          >
            Resources
          </NavLink>
        </div>
        <div
          style={{
            marginTop: "2%",
            backgroundColor: "#15510F",
            borderRadius: "2px",
            height: "30px",
            textAlign: "center",
            overflow: "hidden",
            cursor: "pointer",
          }}
        >
          <NavLink
            to={"/staff"}
            style={{
              textDecoration: "none",
              color: "white",
              fontFamily: "Josefin Sans, sans-serif",
            }}
          >
            Staff
          </NavLink>
        </div>
        <div
          style={{
            marginTop: "2%",
            backgroundColor: "#15510F",
            borderRadius: "2px",
            height: "30px",
            textAlign: "center",
            overflow: "hidden",
            cursor: "pointer",
          }}
        >
          <NavLink
            to={"/"}
            style={{
              textDecoration: "none",
              color: "white",
              fontFamily: "Josefin Sans, sans-serif",
            }}
          >
            About
          </NavLink>
        </div>
      </div> */
}
