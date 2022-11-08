import React from 'react'


const search = async (searchTerm) => {
    const res = await fetch(`https://serpapi.com/search.json/?q=${searchTerm}&api_key=${process.env.API_KEY}`);
    const data = await res.json();

    // throw new Error('whoops')
    return data
}

async function FindPage({ params }) {
    const searchResults = await search(params.search)
    return (
        <div className="">
            <p className='text-grey-500 text-sm'>You searched for {params.search}</p>
            <ol className="space-y-5 p-5">
                {
                    searchResults.organic_results.map(x=>
                        <li key={x.position} className="list-decimal">
                            <p className="font-bold">{x.title}</p>
                            <p className="">{x.snippet}</p>
                        </li>
                        )
                }
            </ol>
        </div>
    )
}

export default FindPage