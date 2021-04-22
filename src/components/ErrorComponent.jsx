import React from 'react';
import { useHistory } from "react-router-dom";
import sadEmoji from '../img/sadEmoji.png'
import '../scss/components/_error.scss'

function ErrorComponent (){

         const history = useHistory();
    return (
        <div className="errorContainer">
          
            <div className="emoji">
                <img src={sadEmoji} alt="Sad Emoji"/>
            </div>
         
            <div className="content">
                <h1 className="heading_spacing">404</h1>
                <h3 className="heading_spacing-h3">Page not found </h3>
                <p className="paragraph_error">The Page you are looking for does not exists or another error has ocurred</p>
                <p>Go back or head over to <a href="#" onClick={() => history.push("/login", { from: "TodoApp" })} >www.whatsnext.com</a></p>
            </div >
        </div>
    )
}

export default ErrorComponent