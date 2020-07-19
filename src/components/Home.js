import React from 'react';

//images
import profile from '../imgs/profile.jpg';

const Home = () => {
    return (
        <div className="home">
            <h1>Jessica Duell</h1>
            <h2>Full Stack Developer</h2>
            <img src={profile} alt="profile pic" />
        </div>
    )
}

export default Home;