import React from 'react'
import { Link } from 'react-router-dom'
import "./css/Fotter.css"

function Last() {
  return (
    <div>
      <div className='footer'>
        <div className="left1">
          {/* <p className='footer_p'>Shiary.com</p> */}
          <h4 className='h4hai'>Explore</h4>
          <Link className="linkhai" to='/'>Home</Link>
          <Link className="linkhai" to='/matches'>Advance Search</Link>
          <Link className="linkhai" to='/matches'>Success Stories</Link>
          <Link className="linkhai" to='/matches'>Sitemap</Link>
          <Link className="linkhai" to='/matches'>Create Horoscope</Link>
        </div>
        <div className="left1">
          {/* <p className='footer_p'>Shiary.com</p> */}
          <h4 className='h4hai'>Services</h4>
          <Link className="linkhai" to='/'>Services</Link>
          <Link className="linkhai" to='/matches'>Membership Options</Link>
          <Link className="linkhai" to='/matches'>Jeevansathi Careers</Link>
        </div>
        <div className="left1">
          {/* <p className='footer_p'>Shiary.com</p> */}
          <h4 className='h4hai'>Help</h4>
          <Link className="linkhai" to='/'>Services</Link>
          <Link className="linkhai" to='/matches'>Contact Us</Link>
          <Link className="linkhai" to='/matches'>Feedback</Link>
          <Link className="linkhai" to='/matches'>Shiary.com Centers</Link>
        </div>
        <div className="left1">
          {/* <p className='footer_p'>Shiary.com</p> */}
          <h4 className='h4hai'>Legal</h4>
          <Link className="linkhai" to='/'>About Us</Link>
          <Link className="linkhai" to='/matches'>Fraud Alert</Link>
          <Link className="linkhai" to='/matches'>Terms Of Use</Link>
          <Link className="linkhai" to='/matches'>Privacy Policy</Link>
          <Link className="linkhai" to='/matches'>Cookie Policy</Link>
          <Link className="linkhai" to='/matches'>Summons/Notices</Link>
        </div>
      </div>
      <div className="darker">
        <p className='footer_p'>Shiary.com</p>
        <div className="follow">
          <h4 className='h4hai2'>Follow us on</h4>
          <i class="fa-brands fa-instagram i"></i>
          <i class="fa-brands fa-facebook i"></i>
          <i class="fa-brands fa-twitter i"></i>
        </div>
        <div className="customer">
          <h4 className='h4hai2'>Customer Service</h4>
          <h4 className='h4hai2'>Shiary@everything.com</h4>
        </div>
      </div>
    </div>
  )
}

export default Last