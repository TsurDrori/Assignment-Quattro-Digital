import React from 'react'
import { NavLink } from 'react-router-dom'
import colorlogo from '../colorlogo.svg'


function Signup() {
  return (
    <div>

      <header className='form-header '>
        <div><img src={colorlogo} alt="" width='162px' /></div>
        <div className='form-header-nav clean-list'>
          <h2 className='active'>פרטי לקוח</h2>
          <h2>אפשרות משלוח</h2>
          <h2>אמצעי תשלום</h2>
        </div>
      </header>

      <main>
        <form className='form' action="">
          <div className='user-details-title'>
            <h3>פרטי משתמש</h3>
            <h5>
              האם ברשותך חשבון באתר?
              <NavLink exact to="/" className=" clean-link">
                <span>התחבר/י לחשבון </span>
              </NavLink>
            </h5>
          </div>

          {/* Email */}
          <div className='input-container'>
            <h4> מייל <span>*</span> </h4>
            <input type="email" required />
          </div>

          {/* Password */}
          <div className='two-input-container'>
            <div className='input-container'>
              <h4> בחר סיסמה <span>*</span> </h4>
              <input type="password" required />
            </div>
            <div className='input-container'>
              <h4> אימות סיסמה <span>*</span> </h4>
              <input type="password" required />
            </div>
          </div>

          {/* Email Reception Approval */}
          <label className='mail-reception-checkbox'>
            <input type="checkbox" />
            <span >
              אני מאשר/ת קבלת פרסומים במייל
            </span>
          </label>

          <div>
            <h3 className='address-title'>כתבות למשלוח</h3>
          </div>

          {/* Name */}
          <div className='two-input-container'>
            <div className='input-container'>
              <h4> שם פרטי <span>*</span> </h4>
              <input type="text" required />
            </div>
            <div className='input-container'>
              <h4> שם משפחה <span>*</span> </h4>
              <input type="text" required />
            </div>
          </div>

          {/* Address */}
          <div className='two-input-container'>
            <div className='input-container'>

              {/* תיקנתי, במקום כתובת-רחוב, מס' בית, עיר, כפי שצויין במפרט, הותרתי רק רחוב, 
              מכיוון ששאר הפרטים להזנה מטופלים למטה. הותרתי בהערה את הנוסח לפני התיקון */}

              {/* <h4> כתובת-רחוב, מס' בית, עיר <span>*</span> </h4> */}
              <h4> רחוב <span>*</span> </h4>
              <input type="text" required placeholder='בזל' />
            </div>
            <div className='input-container'>
              <h4> מס' בית <span>*</span> </h4>
              <input type="text" required placeholder='2' />
            </div>
          </div>

          <div className='three-input-container'>
            <div className='input-container'>
              <h4> עיר <span>*</span> </h4>
              <input type="text" required placeholder='תל אביב יפו' />
            </div>
            <div className='input-container'>
              <h4> דירה / כניסה  </h4>
              <input type="text" required placeholder='1' />
            </div>
            <div className='input-container'>
              <h4> קוד לבניין </h4>
              <input type="text" required placeholder='1234#' />
            </div>
          </div>

          <div className='three-input-container'>
            <div className='input-container '>
              <h4> טלפון <span>*</span> </h4>
              <input type="text" required placeholder='050-00223356' />
            </div>
            <div>

            </div>
            <div>

            </div>
          </div>

          <div className='form-nav-container'>
            <NavLink exact to="/" className="back-link clean-link">
              <h5> חזרה לעגלת הקניות  <span>{`>`}</span>  </h5>
            </NavLink>
            <button className='submit-button'>המשך לאפשרויות משלוח</button>
          </div>

        </form>
      </main>

    </div>
  )
}

export default Signup