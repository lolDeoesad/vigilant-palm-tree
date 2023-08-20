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
import cardData from './CardInfo';
import toolData from './ToolInfo';
import NewProDetail from './components/NewProDetail';
import CardDetail from './components/CardDetail';
import ToolDetail from './components/ToolDetail';

function App() {

  const [newProduct, setNewProduct] = useState(data);  // 신상품들 정보 담고있는 스테이트 이거 이용해서 Home 신상품에 뿌려줄거임
  const [card, setCard] = useState(cardData); // 카드 담고있는 스테이트 
  const[tool, setTool] = useState(toolData); // 마술도구 담고있는 스테이트 


  return (

    <div className="App">
     <Routes>
      <Route path='/' element={<Home newProduct={newProduct}/>} /> 
      <Route path='/detail/:id' element={<NewProDetail newProduct={newProduct}/>} />
      <Route path='/CardDetail/:id'element={<CardDetail card={card}/>} /> 
      <Route path='/ToolDetail/:id' element={<ToolDetail tool={tool}/>} />
      <Route path='/card' element={<PlayingCard card={card}/>} /> 
      <Route path='/cart' element={<Cart />} /> 
      <Route path='/create' element={<Create />} /> 
      <Route path='/board' element={<Board />} /> 
      <Route path='/inform' element={<Inform />} /> 
      <Route path='/login' element={<Login />} /> 
      <Route path='/tools' element={<Tools tool={tool}/>} /> 
      <Route path='/guide' element={<Guide />} />
     </Routes>
    </div>
  );
}

export default App;
