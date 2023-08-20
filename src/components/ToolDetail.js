import { useParams } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";

const ToolDetail = ({ tool }) => {
    let { id } = useParams();
    return (
        <>
            <Header/>
            <div className='new-product-detail'>
                <div className='tool-detail-imgbox'>
                    <img className="new-product" src={process.env.PUBLIC_URL + `/도구${tool[id].id}.jpg`} style={{ width: '100%' }} />
                </div>
                <div className='tool-detail-content'>
                    <h5 className=''>{tool[id].title}</h5>
                    <p className='new-product-price'>{tool[id].price}원</p>
                    <hr />
                    <p className=''>{tool[id].content}</p>
                    <button onClick={{}}>주문하기</button>
                </div>
            </div>
            <Footer/>
        </>
    )
}

export default ToolDetail;