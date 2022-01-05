import React from 'react';
import {FiChevronsDown} from 'react-icons/fi';
import './Home.css';

const Home = () => { return(
    <section id="home">
        <h1>My name is Lucas Sobrinho</h1>
        <p className="secondary-text">Software Engineer</p>
        <ScrollIndicator/ >
    </section>
)}

// TODO: scroll when click
const ScrollIndicator = () => { return (
    <a className="scroll-indicator" href="#about">
        <FiChevronsDown href="#about"/>
    </a>
)}

export default Home