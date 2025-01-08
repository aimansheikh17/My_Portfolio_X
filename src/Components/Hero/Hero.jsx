
import './Hero.css'
import aiman4 from '../../assets/aimann.png'
import AnchorLink from 'react-anchor-link-smooth-scroll'

 

const Hero = () => {
  return (
    <div id='home' className='hero'>
      <img src={aiman4} alt="" className="src" />
         <h1><span>I'm Sheikh Mohammed Aiman,</span></h1>
         <p>Iam  22-year-old Computer Science & Engineering student with a strong passion for technology. Alongside my technical pursuits, I'm equally intrigued by marketing ,sales and Designing.  </p>
         <div className="hero-action">
          <div className="hero-connect"><AnchorLink className='anchor-link' offset={50} href="#contact">Connect with me</AnchorLink></div>
          <div className="hero-resume">My resume</div>
         </div>
         
      
    </div>
  )
}

export default Hero
