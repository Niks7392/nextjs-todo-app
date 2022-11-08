import React from 'react'
import TodoList from './TodoList'

function TodoLayout({children}) {
  return (
    <main className='flex'>
      <div className="">
        <TodoList/>
      </div>
      <div className='flex-1'>{children}</div>
    </main>
  )
}

export default TodoLayout