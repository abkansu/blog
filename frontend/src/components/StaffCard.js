import React from "react";
import image from "../images/profilepic.png";

const StaffCard = (props) => {
  const { telephone, email, name, university } = props;
  return (
    <div>
      <div
        style={{
          width: "98%",
          height: "150px",
          borderBottom: "2px solid gray",
          float: "right",
          overflow: "hidden",
        }}
      >
        <img
          src={image}
          alt={"profilepic"}
          style={{
            maxHeight: "85%",
            maxWidth: "15%",
            borderRadius: "50px",
            float: "left",
            margin: "1%",
            alignSelf: "center",
          }}
        />
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
