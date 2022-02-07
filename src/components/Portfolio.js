import React from 'react';
import './Portfolio.css';

const projects = [
    { 
        name: "Clicks Dashboard",
        demoUrl: "https://lucasmsobrinho.github.io/clicks-dashboard",
        srcUrl: "https://github.com/lucasmsobrinho/clicks-dashboard",
        backgroundColor: "#A9DBDC",
        description: "It's a data visualization project. You play a target clicking mini-game, and we generate a real time dashboard with data from your performance.",
        image: '/project-thumb-clicks-dashboard.jpg',
        tags: ['data-visualization', 'reactjs']
    },
]

const Portfolio = () => {
    return(
        <section id="portfolio">
            <div className="section-title">
                <h2>Portfolio</h2>
            </div>
            <ProjectsContainer items={projects}/>
        </section>
    )
}

const ProjectsContainer = ({ items }) => {
    const portfolio = items.map( (project, i) => <ProjectCard key={i} project={project}/>)
    return(
        <div className="projects-container">
            {portfolio}
        </div>
    )
}

const ProjectCard = ({ project }) => {
    return (
        <div className="project-card">
            <div className="card-title">
                {project.name}
            </div>
            <div className="project-image-container"
                 style={{
                     backgroundImage:`url(${project.image})`,
                     backgroundColor: project.backgroundColor||'black'
                    }}
            >
                <a href={project.demoUrl}>
                </a>
            </div>
            <div className="card-description">
                {project.description}
            </div>
            <div className="buttons-container">
                <a className="card-button demo" href={project.demoUrl}>
                    DEMO
                </a>
                {   project.srcUrl ? (
                    <a className="card-button src" href={project.srcUrl}>
                        SRC
                    </a>) : <div/>
                }
            </div>
        </div>
    )
}

export default Portfolio