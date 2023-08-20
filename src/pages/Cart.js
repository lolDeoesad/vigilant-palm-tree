import { Table } from "react-bootstrap";
import Footer from "../components/Footer";
import Header from "../components/Header";


const Cart = () => {

  return (
    <div>
      <Header />
      <Table>
        <thead>
          <tr>
            <th>#</th>
            <th>상품명</th>
            <th>수량</th>
            <th>변경하기</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
          </tr>
        </tbody>
      </Table>
      <Footer />
    </div>
  )
}

export default Cart;