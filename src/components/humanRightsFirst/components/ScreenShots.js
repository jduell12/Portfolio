import React from "react";
import { UncontrolledCarousel } from "reactstrap";

//imgs
import firstPage from "../../../imgs/hrf/incidents.png";
import secondPage from "../../../imgs/hrf/fatality.png";
import thirdPage from "../../../imgs/hrf/piechart.png";

const ScreenShots = () => {
  const imgs = [
    { src: firstPage, key: "1" },
    { src: secondPage, key: "2" },
    { src: thirdPage, key: "3" },
  ];

  return (
    <div className="screen">
      <UncontrolledCarousel items={imgs} interval={5000} />
    </div>
  );
};

export default ScreenShots;
