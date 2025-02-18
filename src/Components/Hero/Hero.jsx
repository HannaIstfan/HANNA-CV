import React ,{ useState }from 'react'
import './Hero.css'
function Hero() {
  const [isMobile, setIsMobile] = useState(false);
  const handleToggleMenu = () => {
    setIsMobile(!isMobile);
  };
  
  return (
    <div className='hero'>
      <div className='navbar'>
        <h1>Hanna Istfan.</h1>
            <ul className={isMobile ? 'nav-links mobile' : 'nav-links'}>
            <li>About</li>
            <li>Experience</li>
            <li>Portfolio</li>
            <li>Contact</li>
            </ul>
        <div className="hamburger" onClick={handleToggleMenu}>
          <span className="bar"></span>
          <span className="bar"></span>
          <span className="bar"></span>
      </div>
      </div>
      <div className='heroBody'>
        <div className='paragraph'>
        <h1>Hi,I'm Hanna</h1>
        <p>
        I'm a Frontend Developer with 2 years of experience using React. Reach out if you'd like to learn more!</p>
        <a   href='mailto:hannaistifan@mail.ru'>Contact Me</a>
        </div>
        <img className='Heroimg' src='src/Components/Hero/img1 (2).jpg' />
      </div>
    </div>
  )
}

export default Hero
