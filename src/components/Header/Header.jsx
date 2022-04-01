import React from 'react';
import './Header.css'
import {Link} from 'react-router-dom'
function Header() {
    return (
        <nav>
             <Link to='/'> Shopoo..</Link> 
            <Link to='/order-review'> Order Review</Link> 
            <Link to='/checkout'> Checkout</Link> 
        </nav>
    )
}

export default Header
