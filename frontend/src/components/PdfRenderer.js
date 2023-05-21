import React, { useState } from "react";
import { Document, Page } from 'react-pdf';

import samplePDF from "../pdf_doc/ahmet_bera_kansu.pdf"

const PdfRenderer = (props) => {
    const [numPages, setNumPages] = useState(null);
    const [pageNumber, setPageNumber] = useState(1);
    
    const onDocumentLoadSuccess = ({ numPages }) => {
        setNumPages(numPages);
        setPageNumber(1);
      }
    
    const changePage = (offset) => {
      setPageNumber(prevPageNumber => prevPageNumber + offset);
    }
    
    const previousPage = () => {
      changePage(-1);
    }
    
    const nextPage = () => {
      changePage(1);
    }

    return (
    <>
        <Document
          file={samplePDF}
          onLoadSuccess={onDocumentLoadSuccess}
        >
          <Page pageNumber={pageNumber} />
        </Document>
        <div>
          <p>
            Page {pageNumber || (numPages ? 1 : '--')} of {numPages || '--'}
          </p>
          <button
            type="button"
            disabled={pageNumber <= 1}
            onClick={previousPage}
          >
            Previous
          </button>
          <button
            type="button"
            disabled={pageNumber >= numPages}
            onClick={nextPage}
          >
            Next
          </button>
        </div>
    </>
    );
}

export default PdfRenderer;