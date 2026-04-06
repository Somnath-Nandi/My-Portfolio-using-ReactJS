import React from 'react'
import Navbar from './nav.jsx'

const skills = () => {
  return (
    <div>
      <Navbar />
      <div className="skill-page">
        <div className="my-skills-heading">
          My Skills
        </div>
        <div className="skills-grid">
          <div className="Web-Dev">
            <div className="skills-heading">Full Stack Web Development</div>

            <br />Building complete, dynamic web applications from the ground up, like modern-day digital architects shaping the web's skyline fully responsive for mobile platforms tailored for multi-platform usages.
          </div>
          <div className="django">
            <div className="skills-heading">Django</div>

            <br /> Enabling rapid development of secure and maintainable websites. Following the Model-View-Template (MVT) architectural pattern and building full-featured web applications efficiently.
          </div>
          <div className="Java-Dev">
            <div className="skills-heading">JAVA Development</div>

            <br /> Building robust, secure, and platform-independent software solutions — from enterprise systems to Android apps — using the "write once, run anywhere" philosophy that defines Java’s cross-platform magic.
          </div>
        </div>
        <div className="lang-heading">Programming Languages Known</div>
        <div className="lang-grid">
          <div className="c-grid">
            <div className="c-heading">C</div>

            <br />C
          </div>
          <div className="python-grid">
            <div className="python-heading">.</div>

            <br />Python
          </div>
          <div className="js-grid">
            <div className="js-heading">JS</div>

            <br />JavaScript
          </div>
          <div className="r-grid">
            <div className="r-heading">R</div>

            <br />R
          </div>
          <div className="sql-grid">
            <div className="sql-heading">.</div>

            <br />SQL
          </div>
          <div className="java-grid">
            <div className="java-heading">JAVA</div>

            <br />JAVA
          </div>
        </div>
        <footer>
          &copy; 2025 Somnath Nandi. All rights reserved.
        </footer>
      </div>
    </div>
  )
}

export default skills