import React from 'react'
import {Link} from 'react-router-dom'
function NotFound() {
    return (
        <div className='bg-green-700 text-white h-screen '>
            <h2 className='mt-[100px] ml-[40px] text-5xl font-semibold'>404</h2>
            <h3 className="text-xl font-semibold">Not Avaiable </h3>
            <Link to='/'>Ge Back to Home</Link>
        </div>
    )
}

export default NotFound
