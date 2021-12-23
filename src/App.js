import React, {useState} from 'react';
import './sanitize.css'
import './App.css'
import TodoForm from './components/TodoForm';
import TodoList from './components/TodoList';
// import * as serviceWorker from './serviceWorker'


const App = () => {
  const [todos, setTodos] = useState([])

  const addTodo = (todo) => {
    //todosの先頭に追加
    setTodos([todo, ...todos]);
    console.log(todos);
  }

  const toggleComplete = (id) => {
    setTodos(
      todos.map(todo => {
        if(todo.id === id){
          return{
            ...todo,
            completed: !todo.completed 
          }
        }
        return todo;
      })
    )
  }

  const removeTodo = (id) =>{
    setTodos(todos.filter(todo => todo.id !== id));
  }

  return(
      <div className='siimple-box'>
        <h1>Todo List -React-</h1>

        <TodoForm addTodo={addTodo} />
        <TodoList 
          todos={todos} 
          toggleComplete={toggleComplete}
          removeTodo={removeTodo}  
        />
      </div>
  )
}

export default App;