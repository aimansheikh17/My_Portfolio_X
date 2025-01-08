
import './MyWork.css'
import online from '../../assets/onlinequiz4.png' 
import smart from '../../assets/smartimage5.png'
import smart1 from '../../assets/myhouse1.png'
import product  from '../../assets/product1.png'
import mosque  from '../../assets/mosque.png'
import face  from '../../assets/face.png'
import headphone  from '../../assets/headphone.png'
import cream  from '../../assets/cream.png'
import spray  from '../../assets/spray.png'

const MyWork = () => {
  return (
    <div>
        <div id='work' className="mywork">
            <div className="mywork-title">
                <h1>My Latest Work</h1>
            </div>
         
      <ul className="all-images">
        <li><img src={online} alt=""   /></li> 
        <li> <img src={smart} alt=""  /></li>
        <li><img src={smart1} alt=""  /></li>
        <li> <img src={product} alt="" className="src" /></li>
        <li> <img src={mosque} alt="" className="src" /></li>
        <li> <img src={face} alt="" className="src" /></li>
        <li> <img src={headphone} alt="" className="src" /></li>
        <li> <img src={cream} alt="" className="src" /></li>
        <li><img src={spray} alt="" className="src" /></li>
        
         
      </ul>
      <div className="hero1-resume">Show More</div>
      </div>
         
      </div>
        
      

  
  )
}

export default MyWork
