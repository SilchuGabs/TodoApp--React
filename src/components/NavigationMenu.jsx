import * as React from "react";
import {Link} from 'react-router-dom'
import './../scss/components/_navigationMenu.scss'

function NavigationMenu(props) {
  return (
  <div className="navigation">
          <input type="checkbox" name="navi-toggle" id="navi-toggle" className="navigation__checkbox"/>
          <label htmlFor="navi-toggle" className="navigation__button">
            <div className="navigation__icon">
            </div>
          </label>
          <div className="navigation__background">&nbsp;</div>
          <nav className="navigation__nav">
              <ul className="navigation__list">
                  <li className="navigation__item"><Link to="/welcome" className="navigation__link">Home</Link></li>
                  <li className="navigation__item"><Link to="/todos" className="navigation__link">Todos</Link></li>
                  <li className="navigation__item"><Link to="/habits" className="navigation__link">Habits</Link></li>
                  <li className="navigation__item"><Link to="/calendar" className="navigation__link">Calendar</Link></li>
                  <li className="navigation__item"><Link to="todos" className="navigation__link">About</Link></li>
              </ul>
          </nav>
            
         
            </div>
  );
}

export default NavigationMenu;