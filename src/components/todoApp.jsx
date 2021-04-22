import React, {Component} from 'react';
import LoginComponent from './LoginComponent.jsx'
import note1 from '../img/stiky1.jpeg'
import note2 from '../img/sitky2.jpeg'
import note3 from '../img/sitky3.png'
import '../scss/layouts/_todoApp.scss'
import '../App.scss';

 

class TodoApp extends Component {

    render(){
        return (

          <div className="stikyNotes">
         
        <img src={note1} alt="StikyNote1" className="note1"/>
        <img src={note2} alt="StikyNote2" className="note2"/>
        <img src={note3} alt="StikyNote3" className="note3"/>
          <div className="background">

            <div className="todoApp" >
    
              <header className="header">
                  <div className="header__leftSide">
                  <h1 className="heading">What's next?</h1>
                  <h3 className="heading--subtitle"></h3>

                  </div>
                <div className="header__rightSide">
                  <LoginComponent/>
                  </div>
              </header>
            
                
            </div>
            
             </div>

             </div>
            

        
        )
    }
}

export default TodoApp;