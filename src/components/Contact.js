import React from 'react';
import {FaGithub, FaLinkedin} from 'react-icons/fa';
import './Contact.css';

const medias = [
    {
        name: "github",
        icon: <FaGithub/>,
        url: "https://www.github.com/lucasmsobrinho",
    }, {
        name: "linkedin",
        icon: <FaLinkedin/>,
        url: "https://www.linkedin.com/in/lucasmsobrinho/",
    }
]

const Contact = () => {
    return(
        <section id="contact">
            <MediaButtonContainer items={medias}/>
            <div className="copyright">© Copyright 2022<br/>Lucas Sobrinho</div>
        </section>
)}

const MediaButtonContainer = (props) => {
    const mediaList = props.items.map(media => 
            <MediaButton item={media}/>
    );
    return (
        <div className="media-button-container">
            {mediaList}
        </div>
    )
}

const MediaButton = (props) => {
    return (
        <a href={props.item.url}>
            <div className="media-button" id={props.item.name}>
                {props.item.icon}
            </div>
        </a>
    )
}


export default Contact