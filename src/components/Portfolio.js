import React from "react";

import logo from "../imgs/medCabinetLogo.png";

const Portfolio = () => {
  return (
    <div className="background port">
      <h1>Projects</h1>
      <div class="projects">
        <div className="medCab">
          <h2>Med Cabinet</h2>
          <img src={logo} alt="logo" />
          <a href="https://med-cabinet-2.netlify.app/index.html" target="blank">
            <p>
              A web application using React to deliver personalized
              recommendations for each user
            </p>
          </a>
        </div>

        {/*For future projects */}
      </div>
    </div>
  );
};

export default Portfolio;
