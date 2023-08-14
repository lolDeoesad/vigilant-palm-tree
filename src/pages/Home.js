import './Home.css'
import Header from "../components/Header";
import ImgSlider from '../components/ImgSlider';



const Home = () => {
  return(
    <>
      <Header/>
      <img src="/pulse_04.jpg" height='400px' width='100%'></img>
      <div className="new-products"><h4>신상품</h4></div>
      
    </>
  )
}

export default Home;