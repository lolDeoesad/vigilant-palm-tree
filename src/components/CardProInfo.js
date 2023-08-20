import './CardProInfo.css'
import { useNavigate } from "react-router-dom";

const CardProInfo = ({ data }) => {
    const navigate = useNavigate();
    return(
        <div className="product-box" onClick={() => {
            {navigate('/CardDetail/'+data.id)}
          }}>
              <img className="new-product" src={process.env.PUBLIC_URL + `./카드${data.id}.jpg`} style={{width:'120%'}} />
              <p className='product-title'>{data.title}</p>
              <p className='product-price'>{data.price}</p>
              <hr/>
              <p className='product-content'>{data.content}</p>
          </div>     
    )
}

export default CardProInfo;