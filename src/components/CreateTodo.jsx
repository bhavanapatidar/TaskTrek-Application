import React, {useState} from 'react'

const CreateTodo = () => {

const [count, setCount] = useState(0);
const hadleClick = () => {
    setCount(count + 1);
  //  console.log(`Task added. Total tasks: ${tasks}`);
};
const [inputValue, setInputValue] = useState('');
const inputChange = (e) => {
    setInputValue(e.target.value);
    console.log(`Input changed: ${e.target.value}`);
}

const tasks = ['Task 1', 'Task 2', 'Task 3'];
  return (
    <>
    <h1 >Tasks: {count}</h1>
    <input type="text" onChange={inputChange} />
    <button className='btn' onClick={hadleClick}>Add Task</button>
    <h1>Input: {inputValue}</h1>
    <ul>
        {
            tasks.map((tasks) =>(
            <li key={tasks}>{tasks}</li>
            ))
        }
    </ul>
    </>
  );
};

export default CreateTodo;