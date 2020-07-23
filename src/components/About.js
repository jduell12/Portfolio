import React from 'react';

//icons
import git from '../imgs/front/gitLogo.png';
import html from '../imgs/front/HTML5_Logo_64.png';
import css from '../imgs/front/CSS3Logo.png';
import bootstrap from '../imgs/front/react-bootstrap.png';

const About = () => {
    return(
        <div className="background about">
            <h1>About</h1>
            <p className="aboutP">A detail orientated professional who strives for perfection. I focus on the UX/UI experience and want to deliver a product that delivers the best user experience. I make sure to make web applications responsive so no matter what device a user accesses the application they have a good experience. </p>
            <h1 className="skillTitle">Skills</h1>
            <div className="skills">
                <div className="front">
                    <h3>Front End</h3>
                    <ul>
                        <li> <img src={git} alt='git'/>Git</li>
                        <li><img src={html} alt='html'/>HTML</li>
                        <li><img src={css} alt='css' />CSS</li>
                        <li><img src={bootstrap} alt='bootstrap' />BootStrap</li>
                        <li>ReactStrap</li>
                        <li>Styled Components</li>
                        <li>JavaScript</li>
                        <li>React</li>
                        <li>Redux</li>
                        <li>Context API</li>
                    </ul>
                </div>
                <div className="back">
                    <h3>Back End</h3>
                    <ul>
                        <li>Python</li>
                        <li>Node JS</li>
                        <li>C++</li>
                        <li>C</li>
                    </ul>
                </div>
                <div className="test">
                    <h3>Testing</h3>
                    <ul>
                        <li>Cypress</li>
                        <li>Jest</li>
                        <li>React Testing Library</li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default About;