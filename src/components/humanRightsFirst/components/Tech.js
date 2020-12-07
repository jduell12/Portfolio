import React from "react";

//images
import js from "../../../imgs/front/js.png";
import react from "../../../imgs/front/react.png";
import redux from "../../../imgs/front/redux.png";
import amcharts from "../../../imgs/front/amcharts.png";
import aws from "../../../imgs/front/AWS.png";
import node from "../../../imgs/back/nodeJS.jpg";
import jest from "../../../imgs/testing/jest.jpeg";
import postgres from "../../../imgs/back/postgres.png";

const Tech = () => {
  return (
    <div className="hrf-tech">
      <div className="logos">
        <span></span>
        <img src={js} alt="JavaScript logo" />
        <img src={react} alt="React logo" />
        <span></span>
        <img src={redux} alt="Redux logo" />
        <img src={amcharts} alt="amCharts logo" />
        <img src={aws} alt="AWS logo" />
        <img src={node} alt="Node logo" />
        <span></span>
        <img src={postgres} alt="PostgreSQL logo" />
        <img src={jest} alt="Jest logo" />
      </div>
      <div className="tech">
        <h3>Tech Stack</h3>
        <p>
          The front end is built using JavaScript, React, Redux, and amCharts.
          The front end is hosted by AWS. The backend is built using JavaScript,
          Node, Express and PostgreSQL. End-to-end and unit test coverage are
          written using Jest and hosted by Heroku.{" "}
        </p>
      </div>
    </div>
  );
};

export default Tech;
