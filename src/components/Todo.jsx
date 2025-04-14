import React from 'react';
import {useState} from 'react';


const Todo = () => {

    const [todos, setTodos] = useState([]);
    const [todoValue, settodoValue] = useState('');

    const handleSumbit = (e) => {
        e.preventDefault();
        if(todoValue.trim()){
            setTodos([...todos, todoValue]);
            settodoValue("");
        }
    }

    const handleChange = (e) => {
        settodoValue(e.target.value);

    }
  return (
    <section>
        <h1>Todo List</h1>
        <form onSubmit={handleSumbit}>
            <input type="text" value={todoValue}  onChange={handleChange} placeholder="Add a new Todo"/>
            <button type="submit">Add todo</button>
        </form>
        <ul>
            {
                todos.map((todo, index) => (
                    <li key={index}>{todo}</li>
                ))
            }
        </ul>
    </section>
  );
};

export default Todo;
