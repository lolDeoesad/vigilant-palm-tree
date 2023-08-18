import { useNavigate } from "react-router-dom";

const NewProInfo = ({ data }) => {
  const navigate = useNavigate();
  return (

    <div className="product-box" onClick={() => {
      {navigate('/detail/'+data.id)}
    }}>
        <img className="new-product" src={process.env.PUBLIC_URL + `./신상품${data.id}.jpg`} style={{width:'140%'}} />
        <p className='product-title'>{data.title}</p>
        <p className='product-price'>{data.price}</p>
        <hr/>
        <p className='product-content'>{data.content}</p>
    </div>

  )
}

export default NewProInfo;