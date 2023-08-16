import Footer from './Footer';
import './SingUp.css'

const SingUp = () => {
  return (
    <div className='sing-up'>
      <h2>회원가입</h2>
      <form>
        <div className='auto'>
          <p className='info'>기본정보</p>
          <table className='sing-table'>
            <tr className='sing-tr'>
              <th className='sing-th'>
                <span className='sing-span'>아이디</span>
              </th>
              <td className='sing-td'>
                <input type='text' className='sing-input frame' />
                <div className='sing-boolean'></div>
              </td>
            </tr>

            <tr className='sing-tr'>
              <th className='sing-th'>
                <span className='sing-span'>비밀번호</span>
              </th>
              <td className='sing-td'>
                <input type='password' className='sing-input-pw frame' />
                <div className='sing-boolean'></div>
              </td>
            </tr>

            <tr className='sing-tr'>
              <th className='sing-th'>
                <span className='sing-span'>비밀번호 확인</span>
              </th>
              <td className='sing-td'>
                <input type='password' className='sing-input-pw frame' />
                <div className='sing-boolean'></div>
              </td>
            </tr>

            <tr className='sing-tr'>
              <th className='sing-th'>
                <span className='sing-span'>이름</span>
              </th>
              <td className='sing-td'>
                <input type='text' className='sing-input frame' />
                <div className='sing-boolean'></div>
              </td>
            </tr>

            <tr className='sing-tr'>
              <th className='sing-th'>
                <span className='sing-span'>이메일</span>
              </th>
              <td className='sing-td'>
                <input type='email' className='sing-input-email frame' /><br />
                <div className='left'>
                  <input type='checkbox' />
                  <span className='agree'>정보/이벤트 메일 수신에 동의합니다</span>
                </div>
              </td>
            </tr>

            <tr className='sing-tr'>
              <th className='sing-th'>
                <span className='sing-span'>휴대폰번호</span>
              </th>
              <td className='sing-td'>
                <input type='tel' className='sing-input-phone frame' placeholder='-없이 입력하세요' /><br />
                <div className='left'>
                  <input type='checkbox' />
                  <span className='agree'>정보/이벤트 SMS 수신에 동의합니다</span>
                </div>
              </td>
            </tr>

            <tr className='sing-tr'>
              <th className='sing-th'>
                <span className='sing-span'>전화번호</span>
              </th>
              <td className='sing-td'>
                <input type='tel' className='sing-input frame' />
              </td>
            </tr>

            <tr className='sing-tr'>
              <th className='sing-th'>
                <span className='sing-span'>주소</span>
              </th>
              <td className='sing-td address'>
                <div style={{
                  display: 'flex',
                  height: 27,
                  marginBottom: 10
                }}>
                  <input type='text' className='sing-input-post frame' />
                  <button className='post-num'>우편번호검색</button>
                </div>
                <input type='text' className='sing-input frame' />
                <div style={{ height: 10 }} />
                <input type='text' className='sing-input frame' />
              </td>
            </tr>
          </table>

          <p className='info'>부가 정보</p>
          <table className='sing-table'>

            <tr className='sing-tr'>
              <th className='sing-th'>
                <span className='sing-span'>생일</span>
              </th>
              <td className='sing-td'>
                <input type='date' className='sing-input-post frame' />
                <div className='sing-boolean'></div>
              </td>
            </tr>
          </table>
          <div className='class'>

          <div className='sing-btn'>
            <button type='button' className='btn-cancel btn'>취소</button>
            <button type='button' className='btn-join btn'>회원가입</button>
          </div>
          </div>
        </div>
      </form>
    </div>
  )
}

export default SingUp;