import React from 'react';
import './Resume.css';

const academic = [{
    name:"Institute de Matemática e Estatística - USP",
    role:"Computer Science Bachelor",
    period:"2018 - now",
    description:""
}];
const work = [
    {
        name:"MVISIA - Grão Certo",
        role:"Software Engineer",
        period:"2018-2021",
        description:"I developed a Machine Learning product for evaluate quality of Soy Beans via Image Processing. Including an Progressive Web App for capturing the image via mobile camera, evaluating image quality and offline model prediction execution using opencvjs and tensorflowjs. I also worked developing the machine learning models used for this product, researching forms for optimizing image processing at edge and even developed an web interface for manual classification and reclassification of proprietary datasets using reactjs."
    }]



const Resume = () => { return(
    <section id="resume">
        <ResumeSection sectionName="ACADEMIC" items={academic}/>
        <ResumeSection sectionName="WORK" items={work}/>
    </section>
)}

const ResumeSection = (props) => {
    const entries = props.items.map(entry => {
        return <ResumeEntry key={entry.name} item={entry}/>
    });
    return(
    <div className="resume-section">
        <div className="id-bar">{props.sectionName}</div>
        <div className="entries">{entries}</div>
    </div>
    )
}

const ResumeEntry = (props) => { return(
    <div>
        <h1>{props.item.name}</h1>
        <h2>{props.item.role} - {props.item.period}</h2>
        <h3>{props.item.description}</h3>
    </div>
)}

export default Resume