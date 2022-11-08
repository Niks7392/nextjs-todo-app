'use client'
import React, {  useState } from 'react';
import { useRouter } from 'next/navigation'

function Search() {
  const [Search, setSearch] = useState('');
  const router = useRouter();

  const handleSearch = async (e) => {
    e.preventDefault();
    setSearch('')
    router.push(`/search/${Search}`)
  }


  return (
    <form onSubmit={(e) => { handleSearch(e) }}>
      <input type="text" name="search" id="search" onChange={(e) => setSearch(e.target.value)} placeholder='Enter search here' />
      <button type='submit' className='btn bg-blue-500'>
        search
      </button>
    </form>
  )
}

export default Search;