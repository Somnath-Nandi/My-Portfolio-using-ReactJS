import React from 'react'
import Navbar from "./nav.jsx";

const certificate = [
    {
        name: "Smart Bengal Hackathon",
        link: "https://drive.google.com/file/d/1usXSNGuEu6tq7BxGgCiBVmkZ8kYgeq11/view?usp=drive_link",
         icon: "🏆",
    },
    {
        name: "EDCT Best Paper 2025",
        link: "https://drive.google.com/file/d/103YE1uxFELcrqzgRvWAipC0KL9uCiEpe/view?usp=drive_link",
        icon: "🏆",
    },
    {
        name: "Programming in JAVA",
        link: "https://drive.google.com/file/d/1kEe12yLiR9o-p6Rl9ooYWfQIUz7M_DAR/view?usp=sharing",
        icon: "☕",
    },
    {
        name: "Programming in Python",
        link: "https://drive.google.com/file/d/1hODTwL0cLShW0m_GN-3wBh9B-M7c5ZVS/view?usp=drive_link",
        icon: "🐍",
    },
    {
        name: "Django in Python",
        link: "https://drive.google.com/file/d/1iRcAt0TZ2HGSvwhostm4tL25y_tXNuQe/view?usp=drive_link",
        icon: "🌐",
    },
    {
        name: "AWS Cloud Virtual Internship",
        link: "https://drive.google.com/file/d/15rqKLSqOmbx3Og2nZ8hF3EA5luHrPLjK/view?usp=drive_link",
        icon: "🌐",
    },
    {
        name: "AI/ML Virtual Internship",
        link: "https://drive.google.com/file/d/1hV1I_0IYFdmQdx0Z5Sy4UdjV1N-_nb7C/view?usp=drive_link",
        icon: "🌐",
    },
];

const certificates = () => {
    return (
        <div className="certificates-page">
            <Navbar />
            <h1>Certificates</h1>
            {certificate.map((item, index) => {
                return (
                    <div className="certificate" key={index}>
                        <h3><span className="cert-icon">{item.icon}</span> {item.name}</h3>
                        <a href={item.link} target="_blank" rel="noreferrer">
                            View Certificate
                        </a>
                    </div>
                );
            })}
            <footer className='certificates-footer'>
                &copy; 2025 Somnath Nandi. All Rights Reserved.
            </footer>
        </div>
    )
}

export default certificates