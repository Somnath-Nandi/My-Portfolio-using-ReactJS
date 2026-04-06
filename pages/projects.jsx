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
      title: "Scan2CSV",
      description: "Easy to Use Doc Scanner to convert to CSV.",
      link: "https://github.com/Somnath-Nandi/Scan2CSV",
    },
    {
      title: "Netflix UI clone",
      description: "A UI clone of the Netflix home/login page.",
      link: "https://github.com/Somnath-Nandi/Netflix-UI-Clone",
    },
    {
      title: "E-Learn Platform",
      description: "An E-Learning Platform made via Django.",
      link: "https://github.com/Somnath-Nandi/E-Learn-Platform",
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