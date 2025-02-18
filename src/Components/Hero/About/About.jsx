import React from 'react'
import './About.css'
function About() {
  return (
    <div className='About'>
        <h2 className='title'>About</h2>
      <div>
        <ul className='AboutItems'>
            <li className='item1'><img src='src/assets/uiIcon.png' />
              <div><h3>Frontend Developer</h3>
            <p>I'm a frontend developer with experience in building responsive and optimized sites</p>
            </div>
            </li>
            <li className='item2'><img src='src/assets/cursorIcon.png'/>
            <div><h3>UI Designer</h3>
            <p>I have designed multiple landing pages and have systems as well</p>
            </div>
            </li>
        </ul>
      </div>
    </div>
  )
}

export default About
