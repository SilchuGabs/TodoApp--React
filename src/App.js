import React, {Component}from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import AuthenticatedRoute from './todo/AuthenticatedRoute.jsx';
import TodoApp from './components/todoApp.jsx';
import ErrorComponent from './components/ErrorComponent.jsx'
import WelcomeComponent from './components/WelcomeComponent.jsx';
import ListTodosComponent from './components/ListTodosComponent.jsx';
import LogoOutComponent from './components/LogoutComponent.jsx';
import './App.scss'



class App extends Component {
  render(){
  return (
    <div>
        
      <Router>    
        
        <>  
        <Switch>
           <Route path="/" exact component={TodoApp}/>
          <Route path="/login" component={TodoApp}/>
          <AuthenticatedRoute path="/welcome" component={WelcomeComponent}/>
          <AuthenticatedRoute path='/todos' component={ListTodosComponent}/>
          <Route path="/logout" component={LogoOutComponent}/>
          <Route  component={ErrorComponent}/>
        </Switch>
        </>
      </Router>
   
    </div>
  );
}}

export default App;
