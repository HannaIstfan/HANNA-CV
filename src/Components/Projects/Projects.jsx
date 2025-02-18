import React from 'react'
import './Projects.css'
import Card from './Card'
function Projects() {
  return (
    <div className='Projects'>
      <h2>Projects</h2>
      <ul className='projectlist'>
        <li className='line1'><Card 
      img = 'src/Components/Projects/proj1.gif'
      project=' hanna'
      para= 'e-commerce websites that allow companies and organizations to sell products online without hosting or managing the entire website process'/><Card 
      img = 'src/Components/Projects/proj1.gif'
      project=' hanna'
      para= 'e-commerce websites that allow companies and organizations to sell products online without hosting or managing the entire website process'/>
      <Card 
      img = 'src/Components/Projects/proj1.gif'
      project=' hanna'
      para= 'e-commerce websites that allow companies and organizations to sell products online without hosting or managing the entire website process'/></li>

<li className='line1'><Card 
      img = 'src/Components/Projects/proj1.gif'
      project=' hanna'
      para= 'e-commerce websites that allow companies and organizations to sell products online without hosting or managing the entire website process'/><Card 
      img = 'src/Components/Projects/proj1.gif'
      project=' hanna'
      para= 'e-commerce websites that allow companies and organizations to sell products online without hosting or managing the entire website process'/>
      <Card 
      img = 'src/Components/Projects/proj1.gif'
      project=' hanna'
      para= 'e-commerce websites that allow companies and organizations to sell products online without hosting or managing the entire website process'/></li>
      </ul>
      
      
    </div>
  )
}

export default Projects
