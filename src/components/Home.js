import React from 'react';

//images
import profile from '../imgs/profile.jpg';

const Home = () => {
    return (
        <div className="home">
            <h1>Jessica Duell</h1>
            <h2>Full Stack Developer</h2>
            <img src={profile} alt="profile pic" />
            <section className="about">
                <h2>About Me</h2>
                <p>I’ve always sought out opportunities and challenges that are meaningful to me. Although my professional path has taken twists and turns — from a dental hygienist, to a full stack developer — I've never stopped engaging my passion to help others and solve problems.</p>
                <p>As a web developer I use my obsessive attention to detail, love of creating new things and my passion for learning new technologies to create new and meaning projects.</p>
                <p><b>Current Focus:</b> React, NodeJS, accessible web applications</p>
            </section>
        </div>
    )
}

export default Home;