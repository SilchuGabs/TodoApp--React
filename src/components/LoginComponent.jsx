import React, {Component} from 'react';
import AuthenticationService from './../todo/AuthenticationService.js'
import {  withRouter } from 'react-router';
import AlertComponent from './AlertComponent.jsx'
import '../scss/components/_loginForm.scss'




class LoginComponent extends Component {


    constructor(props) {
        super(props)
        this.state={
             type:'password',
            username:'',
           password:'', 
           showAlert:false,         
        }
        this.updateCredential=this.updateCredential.bind(this);
        this.showPassword=this.showPassword.bind(this);
        this.loginClicked=this.loginClicked.bind(this);
        this.handleClose=this.handleClose.bind(this);
        
    }

     

updateCredential(event){
   this.setState({
       [event.target.name]
       :event.target.value
   })
}

  


showPassword(){
    if(this.state.type==="password") {
        this.setState({
       type:'text'
   });

}
     else {
           this.setState({
       type:'password'
   })
 
        }
}

loginClicked(){
   
if(this.state.username==='Sil' && this.state.password==='123') 
    {
         this.props.history.push("/welcome") ; 
        AuthenticationService.registerSucessfulLogin(this.state.username, this.state.password);
    } 
        else {
             this.setState({showAlert:true})
            
            }
                }


handleClose () {
      this.setState({
       show:false
   })
      }





/////////////////////////////// RENDER ///////////////////////////
    render(){

                  return (
                     
                   
          <div className="container">
              <div className="alert">
                 
              <AlertComponent showAlert={this.state.showAlert} handleClose={this.handleClose}
              message="Incorrect username o password" alertType="alert__component alert__danger"  alertBtn="btn__link btn__link-danger" className="alert-position"/>
              </div>
            <div className="log">
                    <form  className="login">

                <div className="login__item">
              <label  name="username" className="login__label" >Username: </label>
              <input type="text" name="username" id="iusername" className="login__label login__label-input" value={this.state.username} onChange={this.updateCredential}/>
              </div>

               <div className="login__item">
              <label  name="password" className="login__label">Password: </label>
              <input type={this.state.type} name="password" id="password" className="login__label login__label-input" value={this.state.password} onChange={this.updateCredential} 
               pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}" title="Must contain at least one number and one uppercase and lowercase letter, and at least 8 or more characters" required/><br/>
              <div className="check">
              <input type="checkbox" onChange={this.showPassword} /> <span> Show Password</span> </div>
              </div>
              
                <div className="controlers">
                 <div className="controlers__login">
              <a  className="btn__login" onClick={this.loginClicked}>Login </a>  
              </div>
              <div className="controlers__forgotPassword">
                   <a href="#"className="btn__credentials">Forgot username or password? </a>
              </div>
              <div className="controlers__singUp">
               <a href="#" className="btn__credentials">Register with us</a>
               </div>
               </div>
             </form>
            </div>
   
             </div>
           
        )
     
    }
}




export default withRouter (LoginComponent);

