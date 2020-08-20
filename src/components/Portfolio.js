import React from "react";

import medLogo from "../imgs/medCabinetLogo.png";

const Portfolio = () => {
  return (
    <div className="background port">
      <h1>Projects</h1>
      <div class="projects">
        <div className="medCab">
          <a href="https://med-cabinet-2.netlify.app/index.html" target="blank">
            <h2>Med Cabinet</h2>
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
