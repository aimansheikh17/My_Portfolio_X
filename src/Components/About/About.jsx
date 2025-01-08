import './About.css'
import aiman from '../../assets/aim.png'


const About = () => {
  return (
    <div id='about' className='about'>
      <div className="about-title">
        <h1>About Me</h1>
      </div>
      <div className="about-sections">
        <div className="about-left">
          <img src={aiman} alt="" className="src" />
        </div>
        <div className="about-right">
          <div className="about-para">
            <p>I'm Sheikh Mohammed Aiman, a 22-year-old Computer Science & Engineering student with a strong passion for technology. Alongside my technical pursuits, I'm equally intrigued by marketing ,sales and Designing. I aim to blend my tech skills with marketing insights to contribute to both fields and drive innovation at the intersection of technology and business.</p>

          </div>
          <div className="about-skills">
            <div className="about-skill"><p>HTML & CSS</p><hr style={{width:"90%"}}/></div>
            <div className="about-skill"><p>React JS</p><hr style={{width:"60%"}}/></div>
            <div className="about-skill"><p>JavaScript</p><hr style={{width:"70%"}}/></div>
            <div className="about-skill"><p>Python</p><hr style={{width:"80%"}}/></div>
            <div className="about-skill"><p>Bootstrap</p><hr style={{width:"70%"}}/></div>
            <div className="about-skill"><p>MS EXCEL</p><hr style={{width:"90%"}}/></div>
            <div className="about-skill"><p>SQL</p><hr style={{width:"80%"}}/></div>
          </div>
        </div>
      </div>
         
    </div>
  )
}

export default About
