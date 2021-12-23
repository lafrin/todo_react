import React from 'react'

function Todo({todo, toggleComplete, removeTodo}) {

  const handleComplete = (e) => {
    toggleComplete(todo.id)
  }

  const handleRemove = (e) => {
    removeTodo(todo.id)
  }



  return (
    <li className="siimple-list-item">
      <input type='checkbox' onClick={handleComplete} />
      <div className="">{todo.task}</div>
      <button onClick={handleRemove}>remove</button>
    </li>
  )
}

export default Todo
