import React from 'react'
import useFetch from '../hooks/useFetch'

function Shop() {
    const {data, loading, err} = useFetch('https://restcountries.com/v3.1/all');
    return (
        <div>
            <h2 className='text-5xl'>Length :{data.length} </h2>
            {
                loading && <h2 className='text-7xl'>Loading.....</h2> 
            }
        </div>
    )
}

export default Shop
