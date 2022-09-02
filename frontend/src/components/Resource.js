import React from "react";
import { motion } from "framer-motion";
import image from "../images/pdf.png";

const Resource = (props) => {
  return (
    <motion.div
      whileHover={{ scale: 1.1, opacity: 0.8, cursor: "pointer" }}
      style={{
        margin: "1%",
        width: "20%",
        height: "250px",
        float: "right",
        backgroundColor: "#6FA960",
        borderRadius: "50px",
        position: "relative",
      }}
    >
      <div
        style={{
          width: "20%",
          height: "20%",
          position: "absolute",
          top: "40%",
          left: "8%",
          right: "0",
          margin: "auto",
        }}
      >
        {/* <i className="material-symbols-outlined" style={{ color: "black" }}>
          picture_as_pdf
        </i> */}
        <i className="material-symbols-outlined" style={{ color: "black" }}>
          file_present
        </i>
      </div>
      <div
        style={{
          width: "100%",
          height: "30%",
          overflow: "hidden",
          position: "absolute",
          bottom: "15%",
          right: "0",
          left: "0",
          margin: "auto",
        }}
      >
        <p
          style={{
            color: "black",
            width: "70%",
            marginLeft: "15%",
            fontFamily: "Oxygen, sans-serif",
            textAlign: "center",
          }}
        >
          Pdf file name with a pdf file name Pdf file name with a pdf file name
          Pdf file name with a pdf file name Pdf file name with a pdf file name
          Pdf file name with a pdf file name Pdf file name with a pdf file name
        </p>
      </div>
    </motion.div>
  );
};

export default Resource;

{
  /* <i
          className="material-icons"
          style={{ color: "red", width: "100%", float: "left", height: "80px" }}
        >
          picture_as_pdf
        </i> #3F4A3C */
}
