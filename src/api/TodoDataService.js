import axios from 'axios';

class TodoDataService {

    //Get all Todos
    retrieveAllTodos(username) {


        return axios.get(`http://localhost:8080/users/${username}/todos`)
    }

    //Get TODO by ID
    retrieveTodo(username, id) {
        return axios.get(`http://localhost:8080/users/${username}/todo/${id}`)
    }

    //Delete Todo by ID
    deleteTodo(username, id) {
        return axios.delete(`http://localhost:8080/users/${username}/todos/${id}`)
    }


    //Update Todo by ID

    updateTodo(username, id, todo) {
        return axios.put(`http://localhost:8080/users/${username}/todos/${id}`, todo)
    }

    createTodo(username, todo) {
        return axios.post(`http://localhost:8080/users/${username}/todos`, todo)
    }

}

export default new TodoDataService()