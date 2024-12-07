import './App.css';
import './Pages/Login/login.css';
import React from 'react';
import { Cart } from './Pages/Cart';
import { Product } from './Pages/Product';
import { Contact } from './Pages/Contact';
import { Todo } from './Pages/TodoList/Todo';
import { Signup } from './Pages/Login/Signup';
import { Login } from './Pages/Login/Login';
import { Navigate , BrowserRouter as Router , Routes , Route } from 'react-router-dom';
import { Home } from './Pages/Home';


function App() {
  return (
    <>
        <Routes>
          <Route path='/' element={<Navigate to ="/login"/>}/>

          <Route path='/home' element={<Home/>}/>

          <Route path='/signup' element={<Signup/>}/>

          <Route path='/login' element={<Login/>}/>

          <Route path='/cart' element={<Cart/>}/>

          <Route path='/contact' element={<Contact/>}/>
      
          <Route path='/todo' element={<Todo/>}/>

          <Route path='/product' element={<Product/>}/>
        </Routes>
    </>
  );
}

export default App;
