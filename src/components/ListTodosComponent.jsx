import React, {Component}from 'react';
import TodoComponent from './TodoComponent.jsx'
import moment from 'moment';
import Modal from './Modal2.jsx'
import Warning from './Icons/Warning.tsx'
import TodoDataService from '../api/TodoDataService.js'
import AuthenticationService from './../todo/AuthenticationService.js';
import SubHeader from './SubHeader.jsx';
import '../scss/components/listTodosComponent.scss';
import '../scss/components/_button.scss';
import ClipboardIcon from './Icons/Clipboard.tsx';

/*
NOTE: This Component lists ALL of the TODOS pertaining a given user
Inside here you can: 
1) DELETE a todo -> See 1st Modal and its content.
2) ADD a todo --> See Modal1 bottom of page in order to modify Modal. It contains TodoComponent as content.
3) UPDATE a todo -->


*/



class ListTodosComponent extends Component {

    constructor(props){
        super(props)
            this.state={
                todos:[],
                username:'', 
                isModalOpen: false,
                isModal1Open: false,
                title:'',
                id:null,
                priority:'',
                description:'',
                isDone:'',
                targetDate:moment (new Date()).format("YYYY-MM-DD"),
                currentMonth:moment(new Date()).format("MMMM"),
                nextMonth:moment().add(1, "month").format('MMMM'),
                showAlert:true,
                errorMessage:'TEST'
            }
            this.deleteClicked=this.deleteClicked.bind(this);
            this.refreshTodos=this.refreshTodos.bind(this);
            this.deleteTodo=this.deleteTodo.bind(this);
            this.openModal=this.openModal.bind(this);
            this.closeModal=this.closeModal.bind(this);
            this.priorityColor=this.priorityColor.bind(this);
            this.createNew=this.createNew.bind(this);
            this.handleError=this.handleError.bind(this);
            this.handleClose=this.handleClose.bind(this);

            //  this.textInput = React.createRef();
            //  this.focusTextInput=this.focusTextInput.bind(this);
        }

componentDidMount(){  
     let username= AuthenticationService.getUserName();
      this.refreshTodos(username);
        
     if(username!==null) {
        this.setState({
       username:username
   });
                        }
     else {
           this.setState({
       username:'Your'
   })
    }
        }

refreshTodos(username){
 TodoDataService.retrieveAllTodos(username)
   .then (
        
       response => {
           this.setState({
       todos:response.data
   })
       }

   )
   .catch( error=> this.handleError(error))
        }


        handleError(error){
           
            this.setState({
                showAlert:true,
                errorMessage: error.message
            })
        }

/////////////////////HANDLING TODOS METHODS/////////////////////////
deleteClicked(id) {
   
    this.openModal();
    this.setState({
       id:id
   })   
  
}
updateClicked(id,priority, description, isDone, targetDate) {
     this.setState({ 
         isModal1Open: true,
         title:'Update Todo',
         id:id,
         priority:priority,
         description:description,
         isDone:isDone,
         targetDate:targetDate  
        })
      
   
    
}

addClicked(id,priority, description, isDone, targetDate){
        this.setState({ 
         isModal1Open: true,
         title:'New Todo',
         id:id,
         priority:priority,
         description:description,
         isDone:isDone,
         targetDate:targetDate  ,
       
        })
      
    }

  createNew(){
      console.log("Submit");
  }

deleteTodo(){
    let username= AuthenticationService.getUserName();
    TodoDataService.deleteTodo(username, this.state.id)
    .then(
        response =>{   
             this.closeModal();
            this.refreshTodos()
        //  window.location.reload(false);
        }
    )
}

priorityColor(priority) {

    switch(priority) {
        case 'Urgent':
            return "text-urgent";
           
        case 'Not Urgent':
            return "text-notUrgent";
            
         case 'Delegate':
            return "text-delegate"
            
        case 'Postpone':
            return "text-postpone"
            
             default:
    } 
    }
    

///////////Modal and Alert Methods/////////////////
   openModal() {
      this.setState({ isModalOpen: true })
    }

    closeModal() {
      this.setState({ isModalOpen: false,
    isModal1Open:false })
    }

    //Alert
    handleClose () {
      this.setState({
       show:false   
   })
      }





//////////////////////////RENDER///////////
    

    render() {
  
    return(
        <div>
{/* Header */}
            <SubHeader username={this.state.username}/>
            
       
        <div className="tbl__body">
              {/* <button className="btn-modal" onClick={() => this.openModal()}>Open modal</button> */}



           <div className="alert">
                 <h1>TEST</h1>
              </div>

{/* Modal */}
           <Modal 
             width={52} 
             height={32} 
             noBackdrop={false} 
             closeButton={false}
             isOpen={this.state.isModalOpen} 
             onClose={() => this.closeModal()}>
            <div className="modal">
                
                <Warning fill={"rgba(255, 0, 0, 0.865)"} className="modal__icon"/>
                <div className="modal__content">
                    <h2>Are you sure?</h2>
                    <p>Once deleted, you will not be able to recover this todo</p>
                </div>
                <div className="modal__btn">
                    <button className=" btn btn__cancel" onClick={() => this.closeModal()}>Cancel</button> 
                    <button className="btn btn__delete" onClick={this.deleteTodo}>Continue</button>
                    </div>
            </div> 
          </Modal>

          

 {/* Table */} 
 
     
            
            <div className="container">
                
                <ClipboardIcon className="icon" heigh={60} width={60} />

                <div className="tbl__heading"> 
                
                <div className="tbl__heading-h1"><h1>Todos</h1></div>
                  <div className="tbl__heading-option">
                    <span className="select-wrapper">
                        <select  name="todos" id="todos" className="tbl__heading-option-select">
                            <option  disabled >Select </option>
                            <option value="All" >All</option>    
                            <optgroup label="Priority">
                            <option value="Urgent">Urgent</option>
                            <option value="Not Urgent">Not Urgent</option>
                            <option value="Delegate">Delegate</option>
                            <option value="Postpone">Postpone</option>
                            <option value="Unkown">Unkown</option>
                            </optgroup>
                            <optgroup label="Status">
                            <option value="mercedes">Complete</option>
                            <option value="audi">Incomplete</option>
                             </optgroup>
                             <optgroup label="Sort By">
                            <option value="Due Date">Due Date</option>
                            <option value="Tomorrow">Due Tomorrow</option>
                            <option value="NextSevenDays">Due Next 7 Days</option>
                            <option value="Current Month">Due {this.state.currentMonth}</option>
                             <option value="Next Month">Due {this.state.nextMonth}</option>

                            </optgroup>
                            </select>
                            </span> 
               </div>
               
                </div> 
               
                <button className="btn btn__warning container__btn" onClick={() =>this.addClicked()}>Add Todo</button>
                
            </div>
            
             


             <table> 

                  <thead>      
                <tr >
                       {/* <th className="th__shorter">Id</th> */}
                       <th>Priority</th>
                        <th>Description</th>
                        <th className="th__shorter">Status</th>
                        <th>Target Date</th>
                      
                            <th className="th__shorter"></th>
                            <th className="th__shorter"></th>
                      
                 </tr>
                 </thead>
                

                  <tbody>  
                {    
                this.state.todos.map(
                    todo =>
                         <tr key={todo.id}>
                            {/* <td>{todo.id}</td> */}
                            <td className={this.priorityColor(todo.priority)}>{todo.priority}</td>
                            <td>{todo.description}</td>
                         {  todo.isDone==="complete" && <td>{todo.isDone} &#10004;</td>}
                         {  todo.isDone==="incomplete" && <td>{todo.isDone}</td>}
                            <td>{moment(todo.targetDate).format("YYYY-MM-DD")}</td>
                            <td><button className="btn btn__sucess" onClick={() =>this.updateClicked(todo.id, todo.priority, todo.description, todo.isDone, todo.targetDate)}>Update</button></td>
                            <td><button className="btn btn__delete" onClick={() =>this.deleteClicked(todo.id)}>Delete</button></td>
                         </tr>
                    )
                    
                   
                    } 
                    </tbody>
                   
                </table>
                
            
        </div> 
        

{/* TodoComponent - Add a todo */}

        <Modal
            width={93} 
             height={60} 
             noBackdrop={false} 
             closeButton={false}
             isOpen={this.state.isModal1Open} 
             onClose={() => this.closeModal()}>

      <TodoComponent
      title={this.state.title}
      id={this.state.id}
      priority={this.state.priority}
      description={this.state.description}
      done={this.state.isDone}
      targetDate={this.state.targetDate} 
      />
        </Modal>
        
        </div>

    )}}
    

export default ListTodosComponent