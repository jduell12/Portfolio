import React from "react";

import logo from "../imgs/medCabinetLogo.png";
import hrf from "../imgs/human-rights-first-twitter.png";
import prof from "../imgs/betterProf.png";
import plants from "../imgs/plants.png";

const Portfolio = () => {
  return (
    <div className="background port">
      <h1>Projects</h1>
      <div class="projects">
        <div className="first">
          <div className="humanRightsFirst">
            <a href="https://main.d2v2y4y91pkwd.amplifyapp.com/" target="blank">
              <h2>Human Rights Considered</h2>
            </a>
            <a href="https://main.d2v2y4y91pkwd.amplifyapp.com/" target="blank">
              <img id="hrf-logo" src={hrf} alt="Human Rights First" />
            </a>
            <p>
              Worked on a cross-functional team of 7 to improve upon a web
              application for Human Rights First. We developed improvements for
              a visualization that showcases incidents of police use of force in
              the United States.
            </p>
            <p>
              I worked with a team of data scientists to implement a model that
              would classify the potential incidents where types of force were
              used and add them to a database to be visualized by the
              application. I tested the previous API implementation and
              optimized the previous database based on the testing.
            </p>
            <a
              href="https://human-rights-first-be.herokuapp.com/api-docs/"
              target="blank"
            >
              Back End Documentation
            </a>
          </div>
          <div className="betterProf">
            <a href="https://backend-build-week.vercel.app/" target="blank">
              <h2>Better Professor App</h2>
            </a>
            <a href="https://backend-build-week.vercel.app/" target="blank">
              <img src={prof} alt="logo" />
            </a>
            <p>
              Web application that allows professors to stay on track of class
              project schedules and graduate student project schedules. Users
              can add, edit and delete classes they teach, students that they
              are mentoring and assignments for the classes and students.
            </p>
            <a href="https://backend-build-week.vercel.app/">
              Backend Documentation
            </a>
          </div>
        </div>
        <div className="second">
          <div className="plants">
            <a
              href="https://water-palnts-8lecigi88.vercel.app/signin"
              target="blank"
            >
              <h2>Water My Plants</h2>
            </a>
            <a
              href="https://water-palnts-8lecigi88.vercel.app/signin"
              target="blank"
            >
              <img src={plants} alt="logo for water my plants" />
            </a>
            <p>
              Application that creates a plant watering schedule tailored to
              each individual plant the user enters.
            </p>
            <a href="https://water-my-plants-backend-node.herokuapp.com/">
              Backend Deployment
            </a>
          </div>
          <div className="medCab">
            <h2>Med Cabinet</h2>
            <a
              href="https://med-cabinet-2.netlify.app/index.html"
              target="blank"
            >
              <img src={logo} alt="logo for med cabinet" />
            </a>
            <p>
              A web application using React to deliver personalized
              recommendations for each user
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
