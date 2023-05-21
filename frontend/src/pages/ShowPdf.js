import React from "react";
import PdfRenderer from "../components/PdfRenderer";

const ShowPdf = (props) => {
    return (
    <div
    style={{
        width: "80%",
        alignSelf: "center",
        margin: "auto",
        height: "100%",
      }}
    >
        <PdfRenderer/>
    </div>
    );
}

export default ShowPdf;

/*
TODO: FAILED TO LOAD PDF
*/ 