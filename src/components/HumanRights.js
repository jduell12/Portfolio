import React from "react";
import { Button } from "reactstrap";

//images
import hrfH from "../imgs/hrf/hrf-home-site.png";
import hrf_logo from "../imgs/hrf/hrf-logo.png";

const HumanRights = () => {
  /* <div class="projects">
        <div className="first">
          <div className="humanRightsFirst">
            <a href="https://main.d2v2y4y91pkwd.amplifyapp.com/" target="blank">
              <h2>Human Rights Considered</h2>
            </a>
            <a href="https://main.d2v2y4y91pkwd.amplifyapp.com/" target="blank">
              <img id="hrf-logo" src={hrf} alt="Human Rights First" />
            </a>
          </div> 
          
                <p>
        Worked on a cross-functional team of 7 to improve upon a web application
        for Human Rights First. We developed improvements for a visualization
        that showcases incidents of police use of force in the United States.
      </p>
      <p>
        I worked with a team of data scientists to implement a model that would
        classify the potential incidents where types of force were used and add
        them to a database to be visualized by the application. I tested the
        previous API implementation and optimized the previous database based on
        the testing.
      </p>
      <a
        href="https://human-rights-first-be.herokuapp.com/api-docs/"
        target="blank"
      >
        Back End Documentation
      </a>
          */

  return (
    <div>
      <div className="hrf-top">
        <a href="https://www.humanrightsfirst.org/" target="blank">
          <img src={hrf_logo} alt="human rights first logo" />
        </a>
        <div className="hrf-info">
          <>
            <h4>
              Human Rights First is a non-profit organization that reached out
              to our team to develop an open source web application that
              visualizes the types of force used by police officers throughout
              the United States. The goal of this application is to be a source
              of information to accurately showcase the use of force by police
              officers and officals in response to citizen actions.
            </h4>
          </>
          <Button
            href="https://main.d2yujrzj10uao5.amplifyapp.com/"
            target="blank"
          >
            Visit Live Site
          </Button>
        </div>
      </div>
      <img
        className="hrf-home"
        src={hrfH}
        alt="Human Rights Considered homepage"
      />
    </div>
  );
};

export default HumanRights;
