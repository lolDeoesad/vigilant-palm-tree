import { useParams } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";

const CardDetail = ({ card }) => {

    let { id } = useParams();

    return (
        <>
            <Header />
            <div className='new-product-detail'>
                <div className='detail-imgbox'>
                    <img className="new-product" src={process.env.PUBLIC_URL + `/카드${card[id].id}.jpg`} style={{ width: '100%' }} />
                </div>
                <div className='detail-content'>
                    <h5 className=''>{card[id].title}</h5>
                    <p className='new-product-price'>{card[id].price}원</p>
                    <hr />
                    <p className=''>{card[id].content}</p>
                    <button onClick={{}}>주문하기</button>
                </div>
            </div>
            <Footer />
        </>
    )
}

export default CardDetail;