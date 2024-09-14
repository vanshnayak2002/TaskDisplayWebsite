import { useState, useEffect } from "react";
import { retrieveAllTodosForUsernameApi, deleteTodoApi } from "./api/TodoApiService";
import { useAuth } from "./security/AuthContext";
import { useNavigate } from "react-router-dom";

function ListTodosComponent() {
    const today = new Date();
   const authContext=useAuth()
   const username=authContext.username
    const targetDate = new Date(today.getFullYear() + 12, today.getMonth(), today.getDate());

    const [todos, setTodos] = useState([]);
    const [message, setMessage] = useState(null);

    const navigate=useNavigate()

    useEffect(() => {
        refreshTodos();
    }, []);

    function refreshTodos() {
        retrieveAllTodosForUsernameApi(username)
            .then(response => {
                console.log(response);
                setTodos(response.data);
            })
            .catch(error => console.log(error));
    }

    function deleteTodo(id) {
        console.log('clicked ' + id);
        deleteTodoApi(username, id)
            .then(() => {
                setMessage(`Delete of todo with id = ${id} successful`);
                refreshTodos();
            })
            .catch(error => console.log(error));
    }

    function updateTodo(id) {
        console.log('clicked ' + id);
        navigate(`/todo/${id}`)
    }

    function addNewTodo() {
        navigate(`/todo/-1`)
    }


















    return (
        <div className="container">
            <h1>Pending Events</h1>
            {message && <div className="alert alert-warning">{message}</div>}
            <div>
                <table className='table'>
                    <thead>
                        <tr>
                            <th>Description</th>
                            <th>Is Done?</th>
                            <th>Date</th>
                            <th>Delete</th>
                            <th>Update</th>
                        </tr>
                    </thead>
                    <tbody>
                        {todos.map(todo => (
                            <tr key={todo.id}>
                                <td>{todo.description}</td>
                                <td>{todo.done.toString()}</td>
                                <td>{new Date(todo.targetDate).toLocaleDateString()}</td>
                                <td>
                                    <button className="btn btn-warning" onClick={() => deleteTodo(todo.id)}>Delete</button>
                                </td>
                                <td>
                                    <button className="btn btn-success" onClick={() => updateTodo(todo.id)}>Update</button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>

                </div>
            <div className="btn btn-success m-5" onClick={addNewTodo}>Add New Event</div>
        </div>
    );
}

export default ListTodosComponent;
