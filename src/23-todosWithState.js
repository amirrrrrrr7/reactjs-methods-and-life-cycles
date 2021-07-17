import {useState} from 'react'

function App () {

    const [todos, setTodos] = useState([])
    const [task, setTask] = useState('')

    function getId() {
        return todos.length ? todos[todos.length - 1].id +1 :1
    }

    function addTodo() {
        setTodos(todos => [...todos, {id: getId(), title: task}])
        setTask ('')
    }

    function removeTodo(id) {
        setTodos(todos =>todos.filter(todo => todo.id !== id))
    }

 return (
     <div>
        <ol>
            {todos.map(todo =>
                <li key={todo.id}>
                    {todo.title}
                <span onClick={e => removeTodo(todo.id)}
                      style={{color: 'red',margin: '5px',cursor: 'pointer'}}
                >
                    x
                </span>
                </li>)}
        </ol>
         <input type="text" value={task}
         onChange={e => setTask(e.target.value)}/>
         <button
         onClick={addTodo}
         >
             Add
         </button>

     </div>
 )
}
export default App