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
      <Button href="https://github.com/jduell12" target="blank">
        Github
      </Button>
      <Button href="https://www.linkedin.com/in/jessicaduell/" target="blank">
        LinkedIn
      </Button>
      <Button
        href="https://drive.google.com/file/d/1zpwh-J13zt3JnSewAVi7AopzGf6bodE5/view"
        target="blank"
      >
        Resume
      </Button>
      <Button
        href={`mailto:duellsoftwaredev@gmail.com?subject=${encodeURIComponent(
          "Inquiry from Portfolio Site",
        )}`}
      >
        Email
      </Button>
    </div>
  );
};

export default About;
