import React, {useState} from 'react'
import './App.css'
import TaskForm from './components/TaskForm'
import TaskColumn from './components/TaskColumn.jsx'
import todoIcon from './assets/direct-hit.png'
import inprogresIcon from './assets/glowing-star.png'
import doneIcon from './assets/check-mark-button.png'

const App = () => {
  const [tasks, setTasks] = useState([])
  return (
    <div className='app'>
      <TaskForm setTasks={setTasks}/>
      <main className='app_main'>
        <TaskColumn taskColumnName = "To Do" icon = {todoIcon} tasks = {tasks} status = "todo"/>
        <TaskColumn taskColumnName = "In Progress" icon = {inprogresIcon} tasks = {tasks} status = "in-progress"/> 
        <TaskColumn taskColumnName = "Done" icon = {doneIcon} tasks = {tasks} status = "done"/>    
      </main>
    </div>
  )
}

export default App