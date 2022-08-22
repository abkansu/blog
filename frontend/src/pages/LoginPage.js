import React from "react";
import "../css/login.css";
import image from "../images/resim.png";

const LoginPage = (props) => {
  const onChange = () => {};
  return (
    <div>
      <div
        style={{
          width: "45%",
          height: "100%",
          float: "left",
          alignItems: "center",
        }}
      >
        <img
          src={image}
          alt="image"
          style={{
            width: "50%",
            height: "50%",
            marginLeft: "30%",
            marginTop: "15%",
          }}
        />
        <h1
          style={{
            marginLeft: "20%",
            color: "#15510F",
            fontFamily: "Josefin Sans, sans-serif",
            textAlign: "center",
          }}
        >
          The login page for researchers of the project
        </h1>
      </div>
      <div className="Login-Container">
        <div
          style={{
            width: "50%",
            float: "left",
            marginTop: "25%",
            marginBottom: "25%",
          }}
        >
          <form style={{ marginLeft: "20%" }}>
            <div>
              <div>
                <label>Username</label>
              </div>
              <div>
                <input
                  name="username"
                  type={"text"}
                  onChange={onChange}
                  style={{
                    border: "none",
                    borderBottom: "2px solid gray",
                    backgroundColor: "#F6EDD9",
                    marginBlockStart: "2%",
                    height: "25px",
                    width: "100%",
                  }}
                />
              </div>
            </div>
            <div style={{ marginTop: "5%" }}>
              <div>
                <label>Password</label>
              </div>
              <div>
                <input
                  name="Password"
                  type={"password"}
                  onChange={onChange}
                  style={{
                    border: "none",
                    borderBottom: "2px solid gray",
                    backgroundColor: "#F6EDD9",
                    marginBlockStart: "2%",
                    height: "25px",
                    width: "100%",
                  }}
                />
              </div>
            </div>
            <div style={{ marginTop: "5%" }}>
              <button
                style={{
                  color: "green",
                  backgroundColor: "#F6EDD9",
                  border: "2px solid green",
                  borderRadius: "10px",
                  cursor: "pointer",
                  fontSize: "1em",
                  width: "100%",
                }}
                onClick={(event) => event.preventDefault()}
              >
                Login
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
