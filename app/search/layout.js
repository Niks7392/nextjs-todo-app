import React from 'react'
import Search from './Search'

function SearchLayout({children}) {
  return (
    <main className="flex space-x-4 divide-x-2 p-5">
        <div className="">
            <Search/>
        </div>
        <div className="flex-1 pl-5">
            {children}
        </div>
    </main>
  )
}

export default SearchLayout