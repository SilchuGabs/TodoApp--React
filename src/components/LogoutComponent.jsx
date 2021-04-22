import React from 'react';
import {Link} from 'react-router-dom'
import './../scss/components/_logOut.scss';

function LogOutComponent (){

    return(
        <div className="logout">
            <h1 className="logout__h1">You signed out of your account</h1>
           <div className="logout__h3">
                <h3 >A bit more to do? </h3>
                  <Link to="/login"  className="login__link"> Log In</Link>
           </div>
        </div>
    )
}

export default LogOutComponent