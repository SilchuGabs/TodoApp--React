import React, {Component}from 'react';
import AuthenticationService from './../todo/AuthenticationService.js'
import {Link} from 'react-router-dom';
import MainHeader from './MainHeader.jsx'
import Footer from './Footer.jsx'
import LogOutComponent from './LogoutComponent.jsx'
import './../scss/layouts/_welcomeComponent.scss'


class WelcomeComponent extends Component {


    render()
{
    const isUserLoggedIn = AuthenticationService.isUserLoggedIn();
   
   

    return(
        
  <div>
       { isUserLoggedIn &&<div className="welcomeComponent">
                  <MainHeader className="welcomeComponent__header"/>
               <div className="welcome__content">
                    <h1 >Welcome</h1>
                    <h3>You can manage your todos <Link to="/todos">  
                    here</Link></h3>
 
                </div>
    
        
                        <Footer className="welcomeComponent__footer"/>
        </div>}
       { !isUserLoggedIn &&<LogOutComponent/>}
  </div>

    )
}



}

export default WelcomeComponent