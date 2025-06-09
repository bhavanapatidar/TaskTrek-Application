import React from 'react'
import Todo from '../assets/direct-hit.png'
import './TaskColumn.css'
import TaskCard from './TaskCard'

const TaskColumn = ({icon,taskColumnName, tasks, status, handleDelete, setActiveCard}) => {
  return (
       <section className='task_column'>
        <h2 className='task_column_heading'>
            <img className='task_column_icon' src={icon} 
            alt=''/>{taskColumnName}</h2>

            {
               tasks.map(
                    (task, index) => 
               task.status === status && (
               <TaskCard key={index}
                taskColumnName={task.task} 
               tags={task.tags}
               handleDelete = {handleDelete}
               index={index}
               setActiveCard={setActiveCard}
               />
          )
          )
            }
       </section>
  )
}

export default TaskColumn