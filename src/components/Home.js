import React, { useEffect } from 'react';
import {FiChevronsDown} from 'react-icons/fi';
import ReactGA from 'react-ga';
import './Home.css';

const Home = () => {
    useEffect(() => {
        ReactGA.pageview(window.location.pathname);
    })
    return(
        <section id="home">
            <h1>I'm Lucas Sobrinho</h1>
            <p className="secondary-text">Software Engineer</p>
            <ScrollIndicator nextSection="#about" />
        </section>
    )
}

const ScrollIndicator = ({ nextSection }) => {
    return (
        <a className="scroll-indicator" href={nextSection}>
            <FiChevronsDown/>
        </a>
    )
}

export default Home
