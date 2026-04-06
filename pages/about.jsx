import React from 'react'
import myImg2 from '../assets/images/myImg.jpeg'
import Navbar from './nav.jsx'

const about = () => {
  return (
    <div>
      <Navbar />

      <div className="about-page">

        <header>
          <h1>About Me</h1>
          <p>Let me introduce myself and share my journey, strengths, and aspirations.</p>
        </header>

        <section className="container">
          {/* <!-- Intro --> */}
          <div className="intro-section">
            <div className="intro-image">
              <img src={myImg2} alt="Shaan-img" />
            </div>
            <div className="intro-text">
              <h2>Hi, I'm Somnath Nandi</h2>
              <p>
                I'm a passionate Information Technology enthusiast with a strong foundation in Web Development.
                I believe in continuous learning, collaborative development, and creating user-focused solutions. Outside of work,
                I enjoy gaming and web designing amongst other hobbies like globetrotting and nature gazing.
              </p>
            </div>
          </div>

          {/* <!-- Strengths --> */}
          <h3 className="section-title">Core Strengths</h3>
          <div className="about-grid">
            <div className="card" style={{ '--delay': '0.2s' }}>
              <h3>Problem-Solving</h3>
              <p>I thrive on solving complex challenges with clean, scalable solutions.</p>
            </div>
            <div className="card" style={{ '--delay': '0.4s' }}>
              <h3>Team Collaboration</h3>
              <p>I'm an effective communicator who values teamwork and knowledge sharing.</p>
            </div>
            <div className="card" style={{ '--delay': '0.6s' }}>
              <h3>Fast Learner</h3>
              <p>I quickly adapt to new tools and technologies to stay ahead in my field.</p>
            </div>
          </div>

          {/* <!-- Career Highlights --> */}
          <h3 className="section-title">My Skills</h3>
          <div className="about-grid">
            <div className="card" style={{ '--delay': '0.2s' }}>
              <h3>Web Development</h3>
              <p>HTML, CSS, SCSS, JavaScript, React, Node JS, Express, MongoDB, MySQL</p>
            </div>
            <div className="card" style={{ '--delay': '0.4s' }}>
              <h3>Android App Development</h3>
              <p>Efficient and Scalable Android App development using Java.</p>
            </div>
            <div className="card" style={{ '--delay': '0.6s' }}>
              <h3>Cybersecurity</h3>
              <p>Ethical Hacking, Penetration Testing, Bug Bounty Hunting.</p>
            </div>
          </div>

          {/* <!-- Future Goals --> */}
          <h3 className="section-title">Future Goals & Interests</h3>
          <div className="about-grid">
            <div className="card" style={{ '--delay': '0.2s' }}>
              <h3>AI & Machine Learning</h3>
              <p>I'm eager to explore intelligent systems and their real-world applications.</p>
            </div>
            <div className="card" style={{ '--delay': '0.4s' }}>
              <h3>Advanced Cybersecurity</h3>
              <p>I want to contribute to advanced Cybersecurity projects and collaborate globally.</p>
            </div>
            <div className="card" style={{ '--delay': '0.6s' }}>
              <h3>Leadership</h3>
              <p>My goal is to lead teams that inspire innovation and foster mentorship.</p>
            </div>
          </div>
        </section>

        <footer>
          &copy; 2025 Somnath Nandi. All rights reserved.
        </footer>
      </div>

    </div>
  )
}

export default about