import React, { useContext } from "react";
import { UncontrolledCollapse, CardBody, Card, Button } from "reactstrap";
import TypeIt from "typeit-react";

//context
import { AboutContext } from "../context/AboutContext";

//images
import profile from "../imgs/profile.jpg";

const About = () => {
  const { aboutOpen } = useContext(AboutContext);
  return (
    <div id="about">
      <h1 className="homeTitle">Jessica Duell</h1>
      <UncontrolledCollapse toggler="#about" isOpen={aboutOpen}>
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
