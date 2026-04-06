import React from 'react'
import { Link } from 'react-router-dom'
import portfolio from '../assets/images/portfolio.png'
import { useNavigate } from 'react-router-dom'

const nav = () => {
    const navigate = useNavigate()
    return (
        <div className="navbar">
            <div className="nav-contents">
                <div className="logo"><img src={portfolio} alt="portfolio-logo" /><span>PORTFOLIO</span></div>
                <ul>
                    <li onClick={() => {
                        navigate("/")
                    }}>Home</li>
                    <li onClick={() => {
                        navigate("/about")
                    }}>About</li>
                    <li onClick={() => {
                        navigate("/skills")
                    }}>Skills</li>
                    <li onClick={() => {
                        navigate("/projects")
                    }}>Projects</li>
                    <li onClick={() => {
                        navigate("/certificates")
                    }}>Certificates</li>
                    <li onClick={() => {
                        navigate("/contact")
                    }}>Contact</li>
                </ul>
            </div>
        </div>
    )
}

export default nav