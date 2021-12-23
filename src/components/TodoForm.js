import React, {useState} from 'react';
import { v4 as uuidv4 } from 'uuid';

function TodoForm( {addTodo}) {

  const [todo, setTodo] = useState({
    id: '',
    task: '',
    completed: false
  });

  //随時todoに入力される
  const handleChange = event => {
    //分割代入
    setTodo({ ...todo, task: event.target.value });
  }

  //submitされると、ユニークidが発行されてユニークなタスクになる
  const handleSubmit = event => {
    event.preventDefault();
    if( !todo.task.trim() ) return
    addTodo({ ...todo, id: uuidv4()})
    setTodo({ ...todo, task:''})
  }



  return (
    <form>
      <input 
        type="text" 
        name="task"
        value={todo.task}
        placeholder='内容'
        onChange={handleChange}
      />
      <button type="submit" onClick={handleSubmit}>add</button>
    </form>
  )
}

export default TodoForm
