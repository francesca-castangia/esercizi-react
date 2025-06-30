import { useState } from "react";

export function ToDoList(){
    const [todos, setTodos] = useState([]);
  const [inputValue, setInputValue] = useState('');

  const addTodo = () => {
    if (inputValue.trim() !== '') {
      setTodos([...todos, inputValue.trim()]);
      setInputValue('');
    }
  };

  const resetTodos = () => {
    setTodos([]);
  };

  const removeTodo = (index) => {
    setTodos(todos.filter((_, i) => i !== index));
  };
    return(
        <div>
            <h1>To Do List</h1>
            <div>
                <input
                    type="text"
                    value={inputValue}
                    onChange={(e) => setInputValue(e.target.value)}
                    placeholder="Add a todo"
                />
                <button onClick={addTodo} >Add</button>
                <button onClick={resetTodos} >Reset</button>
            </div>
            <ul>
                {todos.map((todo, index)=>(<li key={index}><span>{todo}</span> 
                <button onClick={() => removeTodo(index)}>
                Remove
                </button>
                </li>))}
            </ul>
        </div>
    )
}