import React from 'react';
import './Portfolio.css';

const projects = [
    { 
        name: "placeholder project",
        demoUrl: "https://www.google.com",
        description: "Just a couple words. C'mon, it's better than Lorem Ipsum right?",
        image: '/logo192.png'
    }, { 
        name: "placeholder project 2",
        demoUrl: "https://www.google.com",
        description: "The most useful infinite improbability generator.",
        image: '/logo192.png'
    }, { 
        name: "placeholder project 3",
        demoUrl: "https://www.google.com",
        srcUrl: "https://www.github.com",
        description: "The most useful infinite improbability generator.",
        image: '/logo192.png'
    }, { 
        name: "placeholder project 4",
        demoUrl: "https://www.google.com",
        srcUrl: "https://www.github.com",
        description: "The most useful infinite improbability generator.",
        image: '/logo192.png'
    },
]

const Portfolio = () => {
    return(
        <section id="portfolio">
            <ProjectsContainer items={projects}/>
        </section>
    )
}

const ProjectsContainer = (props) => {
    const portfolio = props.items.map( project => {
        return <ProjectCard project={project}/>
    })
    return(
        <div className="projects-container">
            {portfolio}
        </div>
    )
}

const ProjectCard = (props) => {
    return (
        <div className="project-card">
            <div className="project-image-container">
                <a href={props.project.demoUrl}>
                    <img src={props.project.image}/>
                </a>
            </div>
            <div className="card-title">
                {props.project.name}
            </div>
            <div className="card-description">
                {props.project.description}
            </div>
            <div className="demo">
                <a href={props.project.demoUrl}>demo</a>
            </div>
            {   props.project.srcUrl ? (
                <div className="source-code">
                    <a href={props.project.srcUrl}>source code</a>
                </div>) : <div/>
            }
        </div>
    )
}

export default Portfolio