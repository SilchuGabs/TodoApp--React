import React from 'react';
 import './../../scss/components/_pdfReader.scss'



const ControlPanel =(props) => {
    const{pageNumber, numPages, setPageNumber, setScale, scale} =props;

    const isFirstPage= pageNumber===1;
    const isLastPage = pageNumber===numPages;

    const firstPageClass = isFirstPage? 'disabled' : 'clickable';
    const lastPageClass = isLastPage? 'disabled' : 'clickable';

    const gotoFirstPage = () =>{
        if(!isFirstPage) setPageNumber(1);
    }
    const gotoPreviousPage = () =>{
         if(!isFirstPage) setPageNumber(pageNumber -1);
    }
    const gotoNextPage = () =>{
        if(!isLastPage) setPageNumber(pageNumber + 1);
    }
    const gotoLastPage = () =>{
        if(!isLastPage) setPageNumber(numPages);
    }

    const onPageChange= (e) => {
        const {value} = e.target;
        console.log(value)
        setPageNumber(Number(value));
    };

    const isMinZoom = scale <= 0.5;
    const isMaxZoom = scale >=2.0;

   
    const zoomOutClass= isMinZoom?'disabled': 'clickable';
    const zoomInClass= isMaxZoom?'disabled': 'clickable';

    const zoomOut =()=>{
        if(!isMinZoom) setScale(scale-0.1);
    }
    const zoomIn =()=>{
        if(!isMaxZoom) setScale(scale+0.1);
    }

    return (
        <div className="control__panel">
           <section className="control__arrows">
                <i className={`fas fa-fast-backward mx-3 ${firstPageClass}`} onClick={gotoFirstPage}/> <span></span>
                 <i className={`fas fa-backward mx-3 ${firstPageClass}`} onClick={gotoPreviousPage}/>
                    <p>
                        {/* Page {pageNumber} of {numPages} */}
                        Page <input name="pageNumber" type="number" min={1} max={numPages || 1} pattern={`[1-${numPages}]*`} className="input__number" value={pageNumber} onChange={onPageChange}/> of {numPages}

                        </p>
                 <i className={`fas fa-forward mx-3 ${lastPageClass}`} onClick={gotoNextPage}/>  <span></span>
                 <i className={`fas fa-fast-forward mx-3 ${lastPageClass}`} onClick={gotoLastPage}/>
            
             <div className="zoom__cursors">
                    <i className={`fas fa-search-minus ${zoomOutClass}`} onClick={zoomOut}/>
                    <span>{(scale * 100).toFixed()}% </span>
                    <i className={`fas fa-search-plus ${zoomInClass}`} onClick={zoomIn}/>
                </div>
           
           </section>
            <div>
              

            </div>

        </div>
    )
}

export default ControlPanel
