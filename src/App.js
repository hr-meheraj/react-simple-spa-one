import React from 'react'
import style from  './App.module.css'
import { useProducts } from './hooks/useProducts'
import {Routes, Route} from 'react-router-dom'
import './style.css'
import Header from './components/Header/Header'
import Shop from './components/Shop'
import Order from './components/Orders/Order'
import Checkout from './components/Checkout/Checkout'
const App = () => {
    return(
        <div>
           <Header></Header>
           <Routes>
               <Route path='/' element={<Shop></Shop>}></Route>
               <Route path='/order-review' element={<Order/>}></Route>
               <Route path='/checkout' element={<Checkout/>}></Route>
           </Routes>
        </div>
    )
}

export default App;