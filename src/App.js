import './App.css';
import Nav from './components/Nav';
import {Routes, Route, Navigate} from 'react-router-dom'
import Shop from './components/Shop';
import Order from './components/Order';
import Inventory from './components/Inventory';
import NotFound from './components/NotFound';
const  App = () =>  {
  return (
    <div className="">
        <Nav></Nav>
        <Routes>
            <Route path='/' element={<Shop></Shop>}></Route>
            <Route path='/shop' element={<Navigate to='/'></Navigate>}></Route>
            <Route path='/orders' element={<Order></Order>}></Route>
            <Route path='/inventory' element={<Inventory></Inventory>}></Route>
            <Route path='*' element={<NotFound></NotFound>}></Route>
        </Routes>
    </div>
  );
}

export default App;
