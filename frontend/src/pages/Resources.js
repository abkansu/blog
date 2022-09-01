import React from "react";
import SideBar from "../components/SideBar";
import { motion } from "framer-motion";
import Resource from "../components/Resource";

const Resources = (props) => {
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
      {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16].map((key) => {
        return <Resource key={key} />;
      })}
    </div>
  );
};

export default Resources;
