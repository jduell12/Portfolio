import React from "react";
import { Button } from "reactstrap";

//images
import hrfH from "../../../imgs/hrf/hrf-home-site.png";
import hrf_logo from "../../../imgs/hrf/hrf-logo.png";

const Info = () => {
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

export default Info;
