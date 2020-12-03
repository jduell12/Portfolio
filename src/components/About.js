import React from "react";
import { UncontrolledCollapse, CardBody, Card, Button } from "reactstrap";

//images
import profile from "../imgs/profile.jpg";

const About = () => {
  return (
    <div id="about">
      <h1 className="homeTitle">Jessica Duell</h1>
      <UncontrolledCollapse toggler=".about">
        <Card>
          <CardBody>
            <img src={profile} alt="profile" />
            <p className="aboutP">
              I'm a Software Engineer located in Apex, NC. I enjoy new projects
              that challenge me as well as updating older projects to
              incorporate newer technologies.
            </p>
          </CardBody>
        </Card>
      </UncontrolledCollapse>
    </div>
  );
};

export default About;
