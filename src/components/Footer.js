import './Footer.css'

const Footer = () => {
  return (
    <>
      <hr />
      <div className='terms-ct'>
        <div className='terms-bottom'>
          <div className='box1 terms-box'><b>오프라인 매장 영업시간 안내</b><br />
            <div className='text-margin'></div>
            <span><b>화곡역</b> 7번 출구에서 걸어서 3분거리</span><br />
            <span><b>평일</b> 오전 10:00 ~ 오후 06:00</span><br />
            <span><b>점심</b> 오후 12:00 ~ 오후 01:00</span><br />
            <span style={{ marginRight: 12 }}><b>휴무</b> 토 / 일/ 공휴일은 휴무</span>
          </div>

          <div className='box2 terms-box'><b>CUSTOMER CENTER</b>
            <div className='text-margin'></div>
            <h2>070 1234 5678</h2>
            <p className='service-center'>카카오톡 고객센터 : Magic Life</p>
          </div>

          <div className='box3 terms-box'><b>BANK INFO</b><br />
            <div className='text-margin'></div>
            <span><b>농협</b>:356-1234-5678-90</span><br />
            <span><b>국민은행</b>:123456-01-123456</span><br />
            <span><b>예금주</b>: 정희곤 &#40;Magic Life&#41;</span>
          </div>

          <div className='box4 terms-box'><b>공지사항</b></div>
          <div className='text-margin'></div>
        </div>
        <hr />
        <div className='terms-footer'>
          <h5>COMPANY INFO</h5>
          <div className='terms-footer-font'>
            <span>
              상호명 : 매직라이프&#40;Magic Life&#41; / 대표 : 정희곤  / 메일 : assaraa1234@naver.com </span><br/>
            <span>
              통신판매업 신고 제1234-서울강서-0000호 / 사업자등록번호 : 123-45-67890/</span><br/>
            <span>
              개인정보관리자 :  정희곤 / 대표전화 : 070-1234-5678 </span>
          </div>

        </div>

      </div>
    </>
  )
}

export default Footer;