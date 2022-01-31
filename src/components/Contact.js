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

const MediaButtonContainer = ({ items }) => {
    const mediaList = items.map(media => <MediaButton item={media}/>);

    return (
        <div className="media-button-container">
            {mediaList}
        </div>
    )
}

const MediaButton = ({ item }) => {
    return (
        <a href={item.url}>
            <div className="media-button" id={item.name}>
                {item.icon}
            </div>
        </a>
    )
}


export default Contact