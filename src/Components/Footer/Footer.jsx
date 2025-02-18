import React from 'react'
import './Footer.css'
function Footer() {
  return (
    <div className='footer'>
      <div className='text'>
        <h1>Contact</h1>
        <p>Feel free to reach out!</p>
      </div>
      <div className='links'>
        <li><img src='src/Components/Footer/emailIcon.png' /><a>myemail@email.com</a></li>
        <li><img src='src/Components/Footer/linkedinIcon.png' /><a>linkedin.com/myname</a></li>
        <li><img src='src/Components/Footer/githubIcon.png' /><a>github.com/myname</a></li>
      </div>
    </div>
  )
}

export default Footer
