import React, {Component}from 'react';
import AuthenticationService from '../todo/AuthenticationService.js'
import {Link} from 'react-router-dom'
import todo from './../img/todo4.jpeg'
import NavigationMenu from './NavigationMenu.jsx'
import './../scss/components/_header.scss'

class SubHeader extends Component {

    constructor(props) {
        super(props);
        this.state={
            message:'Todos',
          
        }
    }
 
render(){

  


    return(
        <div className="mainHeader"> 
            <div className="navbar">
                <div className="navbar__logo">
                    <img src={todo} alt="" className="navbar__logo-img"/>  
                </div>

                     <div className="navbar__user">
                    <p className="navbar__user-p">
                       {this.props.username}'s  {this.state.message}  
                    </p>
             </div>
             
                <div className="navbar__logout">
                    <Link to="/logout" onClick={AuthenticationService.logout} className="navbar__logout-link">
                        Log Out
                    </Link>
             </div>
         
                
         </div>
          <NavigationMenu/> 

            

              
        </div>
    )
}
}

export default SubHeader