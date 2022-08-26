import React from "react";
import image from "../images/profilepic.png";

const StaffCard = (props) => {
  const { telephone, email, name, university } = props;
  return (
    <div>
      <div>
        <img
          src={image}
          alt={"profilepic"}
          style={{
            height: "140px",
            width: "15%",
            borderRadius: "50px",
            float: "left",
            marginTop: "1%",
            alignSelf: "center",
          }}
        />
      </div>
      <div
        style={{
          width: "80%",
          height: "150px",
          borderBottom: "2px solid gray",
          float: "right",
          overflow: "hidden",
        }}
      >
        <div>
          <h4 style={{ fontFamily: "Josefin Sans, sans-serif" }}>{name}</h4>
        </div>
        <div>
          <p
            style={{
              fontFamily: "Josefin Sans, sans-serif",
              fontSize: "large",
            }}
          >
            {university}
          </p>
        </div>
        <div>
          <p
            style={{
              fontFamily: "Josefin Sans, sans-serif",
              fontSize: "large",
            }}
          >
            {`Telephone: ${telephone}    Email: ${email}`}
          </p>
        </div>
      </div>
    </div>
  );
};

export default StaffCard;
