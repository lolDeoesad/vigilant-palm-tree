
import './LogOn.css'

const LogOn = () => {
  return (
    <div className='login-container'>
      <div className='로그인'>
        <div className='login-wrap'>
          <div className='login-Pbox'>
            <p className='login-p'>로그인</p>
          </div>
          <div className='login-body'>
            <form>
              <h5>회원 로그인</h5>

              <div className='login-input'>
                <input className='login-text' type='text' placeholder='아이디'></input><br />
                <div style={{ margin: 15 }}></div>
                <input className='login-text' type='password' placeholder='비밀번호'></input>
              </div>
              <button className='login-btn logon-btn-black'>로그인</button>
              <div style={{ clear: 'both' }}> </div>
              <input className='login-idbox' type='checkbox' /><span>아이디 저장</span>

              <hr />
              <div className='search-btnbox'>
                <button className='search-btn' type='button'>아이디 찾기</button>
                <button className='search-btn' type='button'>비밀번호 찾기</button>
              </div>
            </form>
            <form>
              <h5>비회원 주문조회 하기</h5>

              <div className='login-input'>
                <input className='login-text' type='text' placeholder='주문자명'></input><br />
                <div style={{ margin: 15 }}></div>
                <input className='login-text' type='password' placeholder='주문번호'></input>
              </div>
              <button className='login-btn logon-btn-white'>확인</button>
              <div style={{ clear: 'both' }}> </div>
              <p style={{
                fontSize: 12, color: 'gray'
              }}>※ 주문번호와 비밀번호를 잊으신 경우, 고객센터로 문의하여 주시기 바랍니다.</p>

            </form>
          </div>
        </div>
      </div>





    </div>
  )

}

export default LogOn;