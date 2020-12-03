import React from "react";
import { Button, NavLink } from "reactstrap";

import hrf from "../imgs/human-rights-first-twitter.png";
import prof from "../imgs/betterProf.png";
import plants from "../imgs/plants.png";

const Portfolio = () => {
  return (
    <div id="portfolio">
      <h1>Projects</h1>
      <div className="project">
        <NavLink href="/humanrights">
          <Button className="hrf">Human Rights First</Button>
        </NavLink>
      </div>
      <div className="project ">
        <NavLink href="/" className="second">
          <Button className="betterProf second">A Better Professor App</Button>
        </NavLink>
      </div>
      <div className="project">
        <NavLink href="/">
          <Button className="plants">Water My Plants</Button>
        </NavLink>
      </div>
      <div className="project ">
        <NavLink href="/" className="second">
          <Button className="githubPort">Portfolio on Github</Button>
        </NavLink>
      </div>
      {/* <div class="projects">
        <div className="first">
          <div className="humanRightsFirst">
            <a href="https://main.d2v2y4y91pkwd.amplifyapp.com/" target="blank">
              <h2>Human Rights Considered</h2>
            </a>
            <a href="https://main.d2v2y4y91pkwd.amplifyapp.com/" target="blank">
              <img id="hrf-logo" src={hrf} alt="Human Rights First" />
            </a>
          </div> */}

      {/* <div className="betterProf">
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
          </div>*/}
      {/* </div>
      </div> */}
    </div>
  );
};

export default Portfolio;
