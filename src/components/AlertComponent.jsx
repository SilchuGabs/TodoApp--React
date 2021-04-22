import React, {Component} from "react";
import '../scss/components/_alert.scss'

/* 
NOTE: Alert - This is a general Alert Component displaying a Warning Message + Close Button. No given options

Important: This Component requieres that parent adds state: showAlert (initial state:False) and a HandleClose method that Child AlertComponent can call

Props: warning="This props handles the warning message to be passed" /
handleClose={() => this.props.handleClose()} --> Call Parent method to close Alert -- 

--METHOD--
handleClose () {
      this.setState({
       show:false
   })
      }


*/



class AlertComponent extends Component {

    constructor(props) {
        super(props);
        this.state={
            showAlert:false
        }
 
    }

     static getDerivedStateFromProps(props, state) {
  
     if (props.showAlert !== state.showAlert) {
         return({
            showAlert:true,
        })
     }else {
         return({
            showAlert:false,
        })
     }
  }

 
  

    render(){
       
        if(this.state.showAlert) {
        return (
                <div className={this.props.alertType}>
                        <p className="alert_message">{this.props.message}</p>
                          <div className="alert--close">
  
      </div>
                        <a className={this.props.alertBtn}  onClick={() => this.props.handleClose()}> &times;</a>
                </div>
        )} else if(!this.state.showAlert) {
            return null
        }
      
    
    }


    }
export default AlertComponent

