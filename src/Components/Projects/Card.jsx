import React from 'react'
import './Card.css'
function Card(props) {
  return (
    <div className='Card'>
        <img className='Cardimg' src={props.img} />
        <dev className="paragraph">
        <h3>Project Name:{props.project} </h3>
        <p>{props.para}</p>
        </dev>
        <dev className='bottom'><h3>React</h3>
        <a href='https://www.youtube.com/watch?v=R7ScdlVAieY&list=RDMMR7ScdlVAieY&start_radio=1'>See More</a>
        </dev>
    </div>
  )
}

export default Card
