import React from 'react';
import {FiChevronsDown} from 'react-icons/fi';
import './Home.css';

const Home = () => { return(
    <section id="home">
        <h1>I'm Lucas Sobrinho</h1>
        <p className="secondary-text">Software Engineer</p>
        <ScrollIndicator nextSection="#about" />
    </section>
)}

const ScrollIndicator = (props) => { return (
    <a className="scroll-indicator" href={props.nextSection}>
        <FiChevronsDown/>
    </a>
)}

export default Home