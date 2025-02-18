import React from 'react'
import './Experience.css'
function Experience() {
  return (
    <div className='Experience'>
      <h2>Experience</h2>
      <ul className='ExperienceBody'>
        <li><img src='src/assets/html.png'/><img src='src/assets/css.png'/><img src='src/assets/react.png'/></li>
        <li><img className='img1'  src='src/assets/figma.png'/><img src='src/assets/js.webp'/><img src='src/assets/c++.png'/></li>
      </ul>
    </div>
  )
}

export default Experience
