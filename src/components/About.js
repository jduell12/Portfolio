import React from 'react';

//icons front-end
import git from '../imgs/front/gitLogo.png';
import html from '../imgs/front/HTML5_Logo_64.png';
import css from '../imgs/front/CSS3Logo.png';
import bootstrap from '../imgs/front/bootstrap.png';
import reactstrap from '../imgs/front/react-bootstrap.png';
import styled from '../imgs/front/styledComponents.png';
import js from '../imgs/front/js.png';
import react from '../imgs/front/react.png';
import redux from '../imgs/front/redux.png';
import context from '../imgs/front/context.png';

//icons back-end
import c from '../imgs/back/C.png';
import cPlus from '../imgs/back/c++.png';
import nodeJs from '../imgs/back/nodeJS.jpg';
import python from '../imgs/back/python.jpeg';

//icons testing
import cypress from '../imgs/testing/cypress.png';
import jest from '../imgs/testing/jest.jpeg';
import reactTest from '../imgs/testing/rtl.png';

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
                        <li><img src={reactstrap} alt='reactstrap' />ReactStrap</li>
                        <li><img src={styled} alt='styled components' />Styled Components</li>
                        <li><img src={js} alt="javascript" />JavaScript</li>
                        <li><img src={react} alt="react" />React</li>
                        <li><img src={redux} alt="redux" />Redux</li>
                        <li><img src={context} alt="context api" />Context API</li>
                    </ul>
                </div>
                <div className="back">
                    <h3>Back End</h3>
                    <ul>
                        <li><img src={python} alt="python" />Python</li>
                        <li><img src={nodeJs} alt="nodeJS" />Node JS</li>
                        <li><img src={cPlus} alt="c++" />C++</li>
                        <li><img src={c} alt="c" />C</li>
                    </ul>
                </div>
                <div className="test">
                    <h3>Testing</h3>
                    <ul>
                        <li><img src={cypress} alt="cypress io" />Cypress</li>
                        <li><img src={jest} alt="jest" />Jest</li>
                        <li><img src={reactTest} alt="react testing library" />React Testing Library</li>
                    </ul>
            </div>
            </div>
        </div>
    )
}

export default About;