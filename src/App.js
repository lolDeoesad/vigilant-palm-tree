import logo from './logo.svg';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Card from './pages/Card';
import Cart from './pages/Cart';
import Create from './pages/Create';
import Board from './pages/Board';
import Inform from './pages/Inform';
import Login from './pages/Login';
import Tools from './pages/Tools';
import { useState } from 'react';
import Guide from './pages/Guide';

function App() {

  const [allProduct, setAllProduct] = useState(0);  // 모든 판매 상품을 담을 스테이트 


  return (
    <div className="App">
     <Routes>
      <Route path='/' element={<Home />} /> 
      <Route path='/card' element={<Card />} /> 
      <Route path='/cart' element={<Cart />} /> 
      <Route path='/create' element={<Create />} /> 
      <Route path='/board' element={<Board />} /> 
      <Route path='/inform' element={<Inform />} /> 
      <Route path='/login' element={<Login />} /> 
      <Route path='/tools' element={<Tools />} /> 
      <Route path='/guide' element={<Guide />} />
     </Routes>
    </div>
  );
}

export default App;
