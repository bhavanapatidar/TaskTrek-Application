import React from 'react'
import './TaskCard.css'
import './Tag.jsx'
import Tag from './Tag.jsx'
import deleteIcon from '../assets/delete.png'

const TaskCard = ({taskColumnName, tags = [], handleDelete, index,setActiveCard}) => {
  return (
    <article className='task-card' draggable onDragStart={()=> setActiveCard(index)} onDragEnd={() => setActiveCard(null)}>
        <p className='task_text'> {taskColumnName}</p>
        <div className='task_card_bottom_line'>
            <div className='task_card_tags'>
                {tags.map((tag, index) => 
                    <Tag key={index} tagName={tag}  selected={true} />
                )}
            </div>
            <div className='task_delete' onClick={() => handleDelete(index)}>
                <img src={deleteIcon} alt="Delete Task" className='delete_icon'  />
            </div>
        </div>
    </article>
  )
}

export default TaskCard