import React from 'react'
import './Tag.css'

const Tag = ({tagName, selectTag, selected}) => {
  const tagStyle = {
    HTML : {
      backgroundColor: '#e34c26',
      color: 'white'
    },
    CSS : {
      backgroundColor: '#264de4',
      color: 'white'
    },
    JavaScript : {
      backgroundColor: '#f7df1e',
      color: 'black'
    },
    React : {
      backgroundColor: '#61dafb',
      color: 'black'
    },
    default: {
      backgroundColor: '#ccc',
      color: 'black'
    }
  }
  return (
            <button  type='button' 
            className='tag'
            style={selected ? tagStyle[tagName] : tagStyle.default} 
            onClick={() => selectTag(tagName)}>
            {tagName}
            </button>
  )
}

export default Tag