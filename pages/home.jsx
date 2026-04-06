import React from 'react'
import { Link } from 'react-router-dom'
import Navbar from './nav.jsx'
import bg from '../assets/images/bg.jpg'
import myImg from '../assets/images/myImg.jpeg'
import dBD from '../assets/images/descBoxDesign.png'
import { useNavigate } from 'react-router-dom'

const home = () => {
  const navigate = useNavigate()
  return (
    <div>
      <Navbar />
      <div className="main">
        <div className="bg-img"><span className="welcome">WELCOME</span><span className="read-more" onClick={() => {
          navigate("/about")
        }} >Read More</span>

          <div className="social-links">
            <a href="https://github.com/Somnath-Nandi" target="_blank" class="icon github" title="GitHub">
              <i className="fab fa-github"></i>
            </a>
            <a href="https://www.linkedin.com/in/somnath-nandi-6075bb359/" target="_blank" class="icon linkedin" title="LinkedIn">
              <i className="fab fa-linkedin-in"></i>
            </a>
            <a href="https://wa.me/917980572966" target="_blank" class="icon whatsapp" title="WhatsApp">
              <i className="fab fa-whatsapp"></i>
            </a>
          </div>

          <img width="50%" height="100%" src={bg} alt="background-left" /></div>
        <div className="description-box">
          <div className="desc-image">
            <img id="desc-box-design1" src={dBD} alt="Desc Box Design" />
            <img id='my-img' src={myImg} alt="My Image" />
            <p>
              Hello, it's <span className="name">Somnath Nandi</span>
            </p>
            <p>
              I'm a Student. I'm currently pursuing studies of Information Technology at
              <br /><span className="highlight"> Guru Nanak Institute of Technology.</span>
            </p>
            <img id="desc-box-design2" src={dBD} alt="Desc Box Design" />
            {/* <img id="desc-box-design3" src={dBD} alt="Desc Box Design" /> */}
          </div>
        </div>
      </div>
    </div>


  )
}

export default home