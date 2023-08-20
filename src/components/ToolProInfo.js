import { useNavigate } from 'react-router-dom';
import './ToolProInfo.css'

const ToolProInfo = ({ data }) => {
    const navigate = useNavigate();
    return(
        <div className="product-box" onClick={() => {
            {navigate('/ToolDetail/'+data.id)}
          }}>
              <img className="new-product" src={process.env.PUBLIC_URL + `./도구${data.id}.jpg`} style={{width:'140%'}} />
              <p className='product-title'>{data.title}</p>
              <p className='product-price'>{data.price}</p>
              <hr/>
              <p className='product-content'>{data.content}</p>
          </div>  
    )
} 

export default ToolProInfo;