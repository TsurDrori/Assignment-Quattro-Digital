import React from 'react'
import { NavLink } from 'react-router-dom'
import Blanklogo from '../Blanklogo.svg'

function Login() {
  return (
    <div className='login-modal'>

      <button className='close-window'>X</button>
      <div><img src={Blanklogo} alt="" width='83px' /></div>
      
      <div> 
        <h1>כיף לראות אותך שוב</h1>
      </div>

      <div className='input-container'>
            <h4> מייל <span>*</span> </h4>
            <input type="email" required />
          </div>

          <div className='input-container'>
            <h4> סיסמה <span>*</span> </h4>
            <input type="password" required />
          </div>

          <NavLink exact to="/" className="forgot-password-link clean-link">
              <h6> שכחתי סיסמה  </h6>
            </NavLink>

            <button className='submit-button'>כניסה לחשבון</button>

    </div>
  )
}

export default Login