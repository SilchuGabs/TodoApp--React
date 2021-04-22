import React, { useState } from 'react';
 import Loader from './Loader.jsx';
 import './../../scss/components/_pdfReader.scss'
import { Document, Page, pdfjs } from 'react-pdf';
import ControlPanel from './ControlPanel.jsx'
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;

const PDFReader = () => {
    const[scale, setScale] = useState(1.0)
  const [numPages, setNumPages] = useState(null);
  const [pageNumber, setPageNumber] = useState(1);
  const [isLoading, setIsLoading]= useState(true);

  function onDocumentLoadSuccess({ numPages }) {
    setNumPages(numPages);
    setIsLoading(false);
  }


  return (
 <div>
        <Loader 
            isLoading={isLoading}/>
     
 <section id="pdf-section">

          <Document
            file="/Text/Chabad.pdf"
            onLoadSuccess={onDocumentLoadSuccess}
          >

            <Page 
                pageNumber={pageNumber} 
                scale={scale}/>
          </Document>
          
        <ControlPanel 
            scale={scale}
            setScale={setScale}
            pageNumber={pageNumber} 
            numPages={numPages}
            setPageNumber={setPageNumber}
        />

 </section>
    </div>
  );
};

export default PDFReader;
