import Link from 'next/link'
import React from 'react'

const fetchTodos = async () => {
    const res = await fetch('https://jsonplaceholder.typicode.com/todos')
    const data = await res.json()
    return data
}
async function TodoList() {
    const todos = await fetchTodos();
    return (
        <>
            {todos.map((x) => (
                <p key={x.id}>
                    <Link href={`/todos/${x.id}`}>
                        Todo : {x.id}
                    </Link>
                </p>
            ))}
        </>
    )
}

export default TodoList