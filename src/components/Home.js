import React from 'react';

//images 
import profile from '../imgs/profile.jpg';

const Home = () => {
    return (
        <div className="home">
            <h1>Jessica Duell</h1>
            <img src={profile}  alt="profile"/>
            <h2>Full Stack Web Developer</h2>
            <p>Detail orientated and dedicated to perfection.</p>
        </div>
    )
}

export default Home;