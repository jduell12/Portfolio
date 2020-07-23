import React from 'react';

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
                        <li>HTML</li>
                        <li>CSS</li>
                        <li>Git</li>
                        <li>JavaScript</li>
                        <li>React</li>
                        <li>Redux</li>
                        <li>Context API</li>
                    </ul>
                </div>
                <div className="back">
                    <h3>Back End</h3>
                    <ul>
                        <li>Node JS</li>
                        <li>C++</li>
                        <li>Python</li>
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