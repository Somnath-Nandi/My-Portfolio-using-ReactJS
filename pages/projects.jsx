import React, { useEffect, useState } from 'react';
import Navbar from "./nav.jsx";

const projects = () => {
  const [dsaCount, setDsaCount] = useState(0);

  const githubUsername = "Somnath-Nandi";
  const dsaRepo = "DSA";

  useEffect(() => {
    const fetchDSACount = async () => {
      try {
        const res = await fetch(`https://api.github.com/repos/${githubUsername}/${dsaRepo}/commits`);
        const data = await res.json();
        setDsaCount(data.length);
      } catch (err) {
        console.error("Failed to fetch DSA count:", err);
      }
    };

    fetchDSACount();
  }, []);

  const projects = [
    {
      title: "Gallery App",
      description: "A React-based image gallery application that fetches and displays images from the Picsum Photos API with pagination support.",
      link: "https://github.com/Somnath-Nandi/Gallery-App-using-ReactJS",
    },
    {
      title: "Notes App",
      description: "A simple React notes application built with Vite and Tailwind CSS.",
      link: "https://github.com/Somnath-Nandi/Notes-App-using-ReactJS",
    },
    {
      title: "Netflix UI Clone",
      description: "A clone of the classic Netflix India home page.",
      link: "https://github.com/Somnath-Nandi/Netflix-UI-Clone",
    },
  ];

  return (
    <div className='project-page'>
      <Navbar />

      <section>
        <h2>My Projects</h2>
        {projects.map((project, index) => (
          <div key={index} className='project-card'>
            <h3>{project.title}</h3>
            <p>{project.description}</p>
            <a href={project.link} target="_blank" rel="noopener noreferrer">
              View on GitHub
            </a>
          </div>
        ))}
      </section>

      <section className='dsa-section'>
        <h2>DSA Progress</h2>
        <p>Number of DSA questions solved: <strong>{dsaCount}</strong></p>
        <a
          href={`https://github.com/${githubUsername}/${dsaRepo}`}
          target="_blank"
          rel="noopener noreferrer"
        >
          View DSA Repo
        </a>
      </section>
      <footer className='projects-footer'>
        &copy; 2025 Somnath Nandi. All Rights Reserved.
      </footer>
    </div>
  );
};

export default projects