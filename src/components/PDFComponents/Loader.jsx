import React from 'react';
import pdfImage from './../../img/loadingPDF.png'
import './../../scss/components/_pdfReader.scss'

const Loader = ({isLoading}) => {
    if (!isLoading) return null;
    return (
          <div id="loader" className="d-flex justifiy-content-center align-items-center"> 
        <img src={pdfImage} alt="loader" className="mb-5"/>
        <p>Loading...</p>
            
        </div>
    )
}

export default Loader
