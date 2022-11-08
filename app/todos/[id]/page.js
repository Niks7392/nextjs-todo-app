import React from 'react';
import { notFound } from 'next/navigation'


const fetchTodo = async (id) => {
  const res = await fetch(`https://jsonplaceholder.typicode.com/todos/${id}`, { next: { revalidate: 60 } })
  const data = await res.json()
  return data
}

async function IdPage({ params }) {
  const todo = await fetchTodo(params.id);

  if(!todo.id) return notFound()
  return (
    <div className='p-10 bg-yellow-200 border-2 m-2 shadow-lg'>
      <p>
        #{todo.id} : {todo.title}
      </p>
      <p>Completed : {todo.completed ? 'yes' : 'no'}</p>

      <p className='border-t border-black mt-5 text-right'>
        By User : {todo.userId}
      </p>
    </div>
  )
}

export default IdPage;



export async function generateStaticParams() {
  const res = await fetch('https://jsonplaceholder.typicode.com/todos')
  const todos = await res.json();

  const trimmedTodos = todos.splice(0, 10)

  return trimmedTodos.map(x => ({
    id: x.id.toString()
  }))
}