import React, {Component} from 'react';
import note1 from '../img/stiky1.jpeg'
import moment from 'moment';
import AuthenticatedService from '../todo/AuthenticationService.js'
import TodoDataService from '../api/TodoDataService.js'
import {ErrorMessage, Field, Form, Formik} from 'formik';
import './../scss/layouts/todoComponent.scss'
import './../scss/components/_alert.scss'


class TodoComponent extends Component {

    constructor(props){
        super(props);
        this.state= {
            id:'',
            priority:'',
            description:'',
            isDone:'',
            targetDate: moment (new Date()).format("YYYY-MM-DD"),
        }
        this.onSubmit=this.onSubmit.bind(this)
        this.validate=this.validate.bind(this)
       

    }
      static getDerivedStateFromProps(nextProps, prevState) {
        if (prevState.id !== nextProps.id) {
          return { id: nextProps.id }; 
        }

    
        return null;
    }

    componentDidMount(){
        let username= AuthenticatedService.getUserName();
        let id=this.state.id;
        TodoDataService.retrieveTodo(username,id )
        .then (
            response => 
             this.setState({
        priority:response.data.priority,
        description:response.data.description,
        isDone:response.data.isDone,
        targetDate:moment (response.data.targetDate).format("YYYY-MM-DD"),
   })
          
 )
        .catch(
            error => console.log(error)
        )
    }

  onSubmit(values) {
    let username=AuthenticatedService.getUserName();
      if(this.state.id===undefined || this.state.id===0 || this.state.id===-1){
        TodoDataService.createTodo(username, {
           id:this.state.id,
               priority:values.priority,
               description:values.description,
               isDone:values.isDone,
               targetDate:moment (values.targetDate).format("YYYY-MM-DD")
           }).then (
                ()=> {  window.location.reload(false);}
           )
      } else {
     
           TodoDataService.updateTodo(username, this.state.id, {
               id:this.state.id,
               priority:values.priority,
               description:values.description,
               isDone:values.isDone,
               targetDate:values.targetDate
           }).then (
                ()=> {  window.location.reload(false);}
           )
          
        } 
    }

  

   validate(values){
       let errors={}
       //DESCRIPTION
       if(!values.description) {
           errors.description ='Enter a Description'
       } else if(values.description.length<5) {
           errors.description ='Enter at least 5 Characters in Description'
       }
       //TARGET DATE
       if(!moment(values.targetDate).isValid()) {
           errors.targetDate='Enter a valid date'
       } 
       if(!values.priority) {
            errors.description ='Enter a valid Priority Type'
       }
        if(!values.isDone) {
            errors.description ='Enter a valid Status'
       }
     
     

       return errors
       
   }




    render() {
        let {id,priority, description, isDone, targetDate}= this.state
  
        return(
            <div className="todoContainer">
                <h3 className="todoContainer__heading">{this.props.title}</h3>
                <div className="todo">
                    <Formik 
                    initialValues={{id,priority,description,isDone,targetDate}}
                    onSubmit={this.onSubmit}
                    // onClick={this.addNewTodo}
                    validate={this.validate}
                    enableReinitialize={true}
                    >
                        {
                            (props) =>(
                              <Form className="todo__form">
                                  <ErrorMessage name="description" component="div" className="alert__solo alert__solo-danger"/>
                                  <ErrorMessage name="targetDate" component="div" className="alert__solo alert__solo-danger"/>    
                                  <ErrorMessage name="priority" component="div" className="alert__solo alert__solo-danger"/>
                                  <ErrorMessage name="isDone" component="div" className="alert__solo alert__solo-danger"/>

                                    <img src={note1} alt="StikyNote1" className="note1--form"/>

                                  <fieldset className="todo__form-group">
                                      <label className="todo__form-group-label">Priority: </label>
                                   
                                        
                                               <Field as="select"  name="priority" className="todo__form-group-select">
                                                    <option value="Unknown" >Select Priority </option>
                                                    <option value="Urgent" selected>Urgent</option>
                                                    <option value="Not Urgent">Not Urgent</option>
                                                    <option value="Delegate">Delegate</option>
                                                    <option value="Postpone">Postpone</option>
                                                    <option value="Unknown">Unknown</option>
                                               </Field>
                                       
                                               
                                    
                                  </fieldset>
                                  <fieldset className="todo__form-group">
                                      <label className="todo__form-group-label">Description: </label>
                                      <Field className="todo__form-group-control" type="text" name="description" />
                                  </fieldset>
                                    <fieldset className="todo__form-group">
                                      <label className="todo__form-group-label">Status: </label>
                                       
                                           <Field name="isDone" as="select" className="todo__form-group-select">
                                                <option  value="Unknown">Select Status</option>
                                                 <option value="incomplete" selected>Incomplete</option>
                                                 <option value="complete">Complete</option>
                                           </Field>                
                                  </fieldset>
                                   <fieldset className="todo__form-group">
                                      <label className="todo__form-group-label">Target Date: </label>
                                      <Field className="todo__form-group-control" type="date" name="targetDate"/>
                                     <button className="btn btn__sucess todo__form-btn" type="submit">Save</button>

                                  </fieldset>
        
                              </Form>

                                
                            )
                        }
                    </Formik>

                </div>
                </div>
        )
    }
}

export default TodoComponent