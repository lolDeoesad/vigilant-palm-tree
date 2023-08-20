import CardProInfo from "../components/CardProInfo";
import Footer from "../components/Footer";
import Header from "../components/Header";


const PlayingCard = ({card}) => {
  return(
  <div>
      <Header/>
      <div className="card-product-container">
        <div className="card-product-row">
          {card.map((data, i) => {
            return (
              <CardProInfo data={data} key={i} />
            )
          })
          }
        </div>
      </div>
      <Footer/>
  </div>   
  ) 
}

export default PlayingCard;