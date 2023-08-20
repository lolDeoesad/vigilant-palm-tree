import Header from "../components/Header";
import ImgSlider from '../components/ImgSlider';
import Footer from '../components/Footer';
import NewProInfo from "../components/NewProInfo";

const Home = ({ newProduct }) => {
  return (
    <>
      <Header />
      <ImgSlider />
      <p style={{ height: 30, textAlign: "center", margin: 30, fontWeight: 800 }}>★ 신상품 ★</p>
      <div className="product-container">
        <div className="product-row">
          {newProduct.map((data, i) => {
            return (
              <NewProInfo data={data} key={i} />
            )
          })
          }
        </div>
      </div>
      <Footer />
    </>
  )
}

export default Home;