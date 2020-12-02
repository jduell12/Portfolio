import React from "react";

//images
import profile from "../imgs/profile.jpg";

const About = () => {
  return (
    <div id="about">
      <h1 className="homeTitle">Jessica Duell</h1>
      <div>
        <img src={profile} alt="profile" />
        <p className="aboutP">
          I'm a Software Engineer located in Apex, NC. I enjoy new projects that
          challenge me as well as updating older projects to incorporate newer
          technologies.
        </p>
      </div>
    </div>
  );
};

export default About;
