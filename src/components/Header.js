import { useNavigate } from 'react-router-dom';
import './Header.css'
import { Container, Nav, Navbar } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';

const Header = () => {
  const navigate = useNavigate();
  return (
    <>
      <Navbar bg="light" data-bs-theme="light" className='navbar'>
        <Container>
        <img src='/magic.png' height='30px'/>
          <Navbar.Brand href="#home" className='font'>Magic Life</Navbar.Brand>
          <div className='box grow'></div>    
          <div className='flex'></div>
          <Nav className="me-auto">
            <Nav.Link onClick={() => { navigate('/') }}>Home</Nav.Link>
            <Nav.Link onClick={() => { navigate('/login') }}>로그인</Nav.Link>
            <Nav.Link onClick={() => { navigate('/create') }}>회원가입</Nav.Link>
            <Nav.Link onClick={() => { navigate('/cart') }}>장바구니</Nav.Link>
            <Nav.Link onClick={() => { navigate('/board') }}>게시판</Nav.Link>
          </Nav>
        </Container>
      </Navbar>

      <div className='container'>
        <div className='header flex'>
          <div className='logo font'>Magic Life</div>
          <div className='search'>
           <form className=''>
            <input className='input' type='text' placeholder='검색어 입력'/>
            <input  className='icon' type='image' src='/search_btn.png'/>
             {/* <span className='icon-box'>
             <FontAwesomeIcon icon={faMagnifyingGlass} className='icon'/>
             </span> */}
             </form>
              <ul className='search-box'>
                <li className='hot'>인기검색어</li>
                <li>노바덱</li>
                <li>무빙넘버</li>
                <li>바이시클</li>
                <li>스타게이저</li>
              </ul>
          </div>
          <div className='a'>광고</div>
        </div>

        <div className='header-box'>
          <ul className='header-link'>
            <li onClick={() => {navigate('/inform')}}>공지사항</li>
            <li onClick={() => {navigate('/guide')}}>이용안내</li>
            <li onClick={() => {navigate('/card')}}>마술카드</li>
            <li onClick={() => {navigate('/Tools')}}>마술도구</li>
            <li><a href='' className='learn'>마술배우기 강좌</a></li>
          </ul>
        </div>
      </div>
    </>


  )
}

export default Header;