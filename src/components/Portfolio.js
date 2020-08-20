import React from "react";

const Portfolio = () => {
  return (
    <div className="background port">
      <h1>Projects</h1>
      <div class="projects">
        <div className="medCab">
          <h2>Med Cabinet</h2>
          <img src="https://images.pexels.com/photos/461428/pexels-photo-461428.jpeg?cs=srgb&dl=pexels-pixabay-461428.jpg&fm=jpg" alt="logo">
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
