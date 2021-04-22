import React, {Component} from 'react'
import './../scss/components/_button.scss'

/*
NOTE: This Modal contains  body,  header ond footer.
Props: width={}, height={}, noBackgrop={backgroun darker} 
closeButton={footer close btn} isOpen={this.state.IsModalOpen}
onClose={() => this.closeModal()}
isOpen -> Requiere in parent component state set to false and on click change to true
onClose => this props call method on child Component, meaning this very component (Modal2)
TIP: Remember that on child component. The CONTENT of the modal is written btw MODAL element tag

*/

class Modal1 extends Component {
  
  render() 
  {
      if (this.props.isOpen === false)
        return null;
        else {

        let modalStyle = {
        position: 'absolute',
        top: '50%',
        left: '50%',
        
        transform: 'translate(-50%, -50%)',
        zIndex: '9999',
        background: '#fff',
        border: '1px solid gray',
        boxShadow: '4px 4px 25px 1px #888888',
        borderRadius: '2px'
      }
      
      let modalHeaderStyle = {
        width: '100%',
        height: 40,
        background: '#333333',
        position: 'absolute',
        borderBottom: '1px solid black',
        top: 0,
        cursor: 'move',
        color: 'white'
      }
      
      let modalFooterStyle = {
        width: '100%',
        height: 40,
        borderTop: '1px solid black',
        background: '#333',
        position: 'absolute',
        bottom: 0,
        textAlign: 'right'
      }
      
      let modalBodyStyle = {
        paddingTop: 43,
        paddingLeft: 10,
        paddingRight: 10,
        paddingBottom: 20,
        background: '#242424',
        height: '80%',
        color: 'white'
      }
      
      let closeButtonStyle = {
          color: '#777',
          font: '14px/100% arial, sans-serif',
          position: 'absolute',
          right: '5px',
          textDecoration: 'none',
          textShadow: '0 1px 0 #fff',
          top: 5
      }
      let marginLeft= '-' + this.props.width/2 + 'rem'
      let marginTop= '-' + this.props.height/2 + 'rem'

      if (this.props.width && this.props.height) {
       modalStyle.width = this.props.width + 'rem'
        modalStyle.height = this.props.height + 'rem'
        modalStyle.marginLeft =  marginLeft 
        modalStyle.marginTop =  marginTop 
        modalStyle.transform = null
      }

      if (this.props.style) {
        for (let key in this.props.style) {
          modalStyle[key] = this.props.style[key]
        }
      }

      let backdropStyle = {
        position: 'absolute',
        width: '100%',
        height: '100%',
        top: '0px',
        left: '0px',
        zIndex: '9998',
        background: 'rgba(0, 0, 0, 0.3)'
      }

      if (this.props.backdropStyle) {
        for (let key in this.props.backdropStyle) {
          backdropStyle[key] = this.props.backdropStyle[key]
        }
      }
      const closeButton= this.props.closeButton
      
        return (
               <div className={this.props.containerClassName} >
          <div className={this.props.className} style={modalStyle} >
            <div className={"modalHeader"} style={modalHeaderStyle} >
              <a onClick={e => this.close(e)} href="#" className={"close-thin"}></a>
            </div>
            <div className={"modalBody"} style={modalBodyStyle}>
            {this.props.children}
            </div>
            <div className={"modalFooter"} style={modalFooterStyle}>
              {closeButton  &&
               <a onClick={(e) => this.close(e)} className='mm-close'>Close</a>
              }
               </div>
          </div>
          {!this.props.noBackdrop &&
              <div className={this.props.backdropClassName} style={backdropStyle}
                   onClick={e => this.close(e)}/>}
        </div>
        )

        }

  }

  close(e) {
      e.preventDefault()

      if (this.props.onClose) {
        this.props.onClose()
      }
    }
}

  export default Modal1 