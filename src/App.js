import logo from './logo.svg';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import PlayingCard from './pages/PlayingCard';
import Cart from './pages/Cart';
import Create from './pages/Create';
import Board from './pages/Board';
import Inform from './pages/Inform';
import Login from './pages/Login';
import Tools from './pages/Tools';
import { useState } from 'react';
import Guide from './pages/Guide';
import data from './ProductsInfo';

function App() {

  const [newProduct, setNewProduct] = useState(data);  // 신상품들 정보 담고있는 스테이트 이거 이용해서 Home 신상품에 뿌려줄거임
  const [card, setCard] = useState(); // 카드 담고있는 스테이트 
  const[tool, setTool] = useState(); // 마술도구 담고있는 스테이트 


  return (

    <div className="App">
     <Routes>
      <Route path='/' element={<Home newProduct={newProduct}/>} /> 
      <Route path='/card' element={<PlayingCard />} /> 
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
