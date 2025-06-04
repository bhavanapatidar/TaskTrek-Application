import React from 'react'
import './App.css'

const App = () => {
  return (
    <div>
      <header className='app_header'>header Section</header>
      <main className='app_main'>
       <section className='task_column'>Section 1</section>
      <section className='task_column'>Section 2</section>
      <section className='task_column'>Section 3</section>
      </main>
    </div>
  )
}

export default App