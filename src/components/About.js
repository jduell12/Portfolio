import React, { useContext } from "react";
import { Button, Collapse, CardBody, Card } from "reactstrap";
import TypeIt from "typeit-react";

//images
import profile from "../imgs/profile.jpg";

//context
import { AboutContext } from "../context/AboutContext";

const About = () => {
  const { aboutOpen } = useContext(AboutContext);

  return (
    <div id="about">
      <h1 className="homeTitle">Jessica Duell</h1>
      <Collapse isOpen={aboutOpen}>
        <Card>
          <CardBody>
            <img src={profile} alt="profile" />
            <p className="aboutP">
              I'm a Software Engineer located in Apex, NC. I enjoy new projects
              that challenge me as well as updating older projects by
              incorporating newer technologies.
            </p>
          </CardBody>
        </Card>
      </Collapse>
      <Button
        className="aboutBtn"
        href="https://github.com/jduell12"
        target="blank"
      >
        Github
      </Button>
      <Button
        className="aboutBtn"
        href="https://www.linkedin.com/in/jessicaduell/"
        target="blank"
      >
        LinkedIn
      </Button>
      <Button
        className="aboutBtn"
        href="https://drive.google.com/file/d/1zpwh-J13zt3JnSewAVi7AopzGf6bodE5/view"
        target="blank"
      >
        Resume
      </Button>
      <Button
        className="aboutBtn"
        href={`mailto:duellsoftwaredev@gmail.com?subject=${encodeURIComponent(
          "Inquiry from Portfolio Site",
        )}`}
      >
        Email
      </Button>
      <TypeIt
        id="type"
        element={"h3"}
        options={{
          loop: false,
          waitUntilVisible: true,
          cursor: false,
        }}
        getBeforeInit={(instance) => {
          instance
            .type("Software Programmer")
            .pause(750)
            .delete(19)
            .pause(500)
            .type("Software Developer")
            .pause(750)
            .delete(18)
            .pause(500)
            .type("Software Engineer")
            .pause(10000);
          return instance;
        }}
      />
    </div>
  );
};

export default About;
