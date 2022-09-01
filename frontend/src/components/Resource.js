import React from "react";
import { motion } from "framer-motion";

const Resource = (props) => {
  return (
    <motion.div
      whileHover={{ scale: 1.1, opacity: 0.8, cursor: "pointer" }}
      style={{
        margin: "1%",
        width: "20%",
        height: "250px",
        float: "right",
        backgroundColor: "#15510F",
        borderRadius: "50px",
      }}
    >
      <div style={{ height: "70%" }}>damn</div>
      <div
        style={{
          marginLeft: "10%",
          width: "70%",
          height: "10%",
          alignSelf: "center",
          overflow: "hidden",
        }}
      >
        <i
          className="material-icons"
          style={{ color: "red", width: "10%", float: "left" }}
        >
          picture_as_pdf
        </i>
        <p
          style={{
            color: "white",
            width: "80%",
            float: "right",
            margin: "0%",
          }}
        >
          Pdf file name with a pdf file name
        </p>
      </div>
    </motion.div>
  );
};

export default Resource;
