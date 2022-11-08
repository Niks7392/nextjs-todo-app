import Link from 'next/link'
import React from 'react'

function Header() {
  return (
    <header className='p-5 bg-blue-500'>
        <p className='font-bold text-white'>Im the header</p>
        <Link className='px-2 py-1 mx-1 bg-white text-blue-500' href={'/'}>Home</Link>
        <Link className='px-2 py-1 mx-1 bg-white text-blue-500' href={'/todos'}>Todos</Link>
    </header>
  )
}

export default Header