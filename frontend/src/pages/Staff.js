import React from "react";
import SideBar from "../components/SideBar";
import StaffCard from "../components/StaffCard";

const Staff = (props) => {
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
      <div style={{ width: "88%", float: "right" }}>
        {[1, 2, 3, 4, 5, 6, 7, 8].map(() => {
          return (
            <StaffCard
              telephone="+90 555 555 5555"
              email="kgnn17@gmail.com"
              name="Kağan Zeki Özdemir"
              university="Hacettepe University Enviromental Engineering"
            />
          );
        })}
      </div>
    </div>
  );
};

export default Staff;
