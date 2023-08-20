import Footer from './Footer';
import Header from './Header';
import './NewProDetail.css'
import { useParams } from "react-router-dom";

const NewProDetail = ({ newProduct }) => {

   let { id } = useParams();


   return (
      <>
         <Header />
         <div className='new-product-detail'>
            <div className='detail-imgbox'>
               <img className="new-product" src={process.env.PUBLIC_URL + `/신상품${newProduct[id].id}.jpg`} style={{ width: '80%' }} />
             </div>  
               <div className='detail-content'>
                  <h5 className=''>{newProduct[id].title}</h5>
                  <p className='new-product-price'>{newProduct[id].price}원</p>
                  <hr/>
                  <p className=''>{newProduct[id].content}</p>
                  <button onClick={{}}>주문하기</button>
               </div>
            </div>
            <Footer />
         </>
         )
 }

         export default NewProDetail;