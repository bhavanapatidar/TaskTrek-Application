import React ,{useState} from 'react'
import './TaskForm.css'
import Tag from './Tag.jsx'

const TaskForm = ({setTasks}) => {
  const [taskData, setTaskData] = useState({
    task : '',
    status: 'todo',
    tags: []
  });

  const checkTag = (tag) => {
    return taskData.tags.some(item => item === tag);
  }

  const selectTag = (tag) => {
    if (taskData.tags.some(item => item === tag)) {
      const filteredTags = taskData.tags.filter(item => item !== tag);
      setTaskData(prevData => {
      return{  ...prevData,
        tags: filteredTags}
      });
  }else {
    setTaskData(prevData => {
      return {
      ...prevData,
      tags: [...prevData.tags, tag],}
    });
  }
}

  const handleChange = (e) => {
    const { name, value } = e.target;
    setTaskData((prevData) => ({
      ...prevData,
      [name]: value,
    }));

  }
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Task submitted:', taskData);
    setTasks((prevTasks) => {
      return [...prevTasks, taskData];
    });
    setTaskData({
      task: '',
      status: 'todo',
      tags: []
    });
  }
  // const [task, setTask] = useState('');
  // const[status, setStatus] = useState('todo');
  // const handleTaskChange = (e) => {
  //   setTask(e.target.value);
  // };
  // const handleStatusChange = (e) => {
  //   setStatus(e.target.value);
  // };
  return (
   <header className='app_header'>
    <form onSubmit={handleSubmit} className='task_form'>
      <input type="text" 
             name='task'
              value={taskData.task}
             className='task_input'
             placeholder='Enter your task'
             onChange={handleChange}
      />
      <div className='task_form_bottom_line'>
        <div>
         <Tag tagName="HTML" selectTag = {selectTag} selected={checkTag("HTML")}/>
            <Tag tagName="CSS" selectTag = {selectTag} selected={checkTag("CSS")}/>
            <Tag tagName="JavaScript"selectTag = {selectTag} selected={checkTag("JavaScript")}/>
            <Tag tagName="React" selectTag = {selectTag} selected={checkTag("React")}/>

        </div>
        <div style={{ display: "flex", alignItems: "center" }}>
          <select 
                  name='status'
                  value={taskData.status}
                  className='task_status'
                  onChange={handleChange}
          >
            <option value="todo">To do</option>
            <option value="in-progress">In Progress</option>
            <option value="done">Done</option>
          </select>
          <button type='submit' className='task_submit'>Add Task</button>
        </div>
      </div>
    </form>
   </header>
  )
}

export default TaskForm