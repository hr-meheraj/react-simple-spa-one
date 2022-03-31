import React from 'react'
import {Link} from 'react-router-dom'
function Nav() {
    return (
        <nav className='px-4 bg-gray-800 text-white flex justify-between  items-center'>
            <div>
               <Link to='/'> <h2 className="text-xl">Webdocker.</h2></Link>
            </div> 
            <div className=''>
               <Link className='mr-[20px]'to='/shop'>Shop</Link> 
               <Link className='mr-[20px]'to='/orders'>Order</Link> 
               <Link className='mr-[20px]'to='inventory'>Inventory</Link>
            </div>
        </nav>
    )
}

export default Nav
