import React from 'react'
import { useProducts } from '../hooks/useProducts'

function Shop() {
    const [products,setProducts,loading,err] = useProducts('https://mocki.io/v1/2203db5f-4a77-43e4-a849-23ca27e4f12b');
    return (
        <div>
            <h1>Product : {products.length}</h1>
            <h2>Shop page..</h2>
        </div>
    )
}

export default Shop
