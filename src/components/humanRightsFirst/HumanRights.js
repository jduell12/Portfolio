import React from "react";

//components
import Info from "./components/Info";
import Tech from "./components/Tech";
import ScreenShots from "./components/ScreenShots";

const HumanRights = () => {
  return (
    <div className="hrf">
      <Info />
      <Tech />
      <ScreenShots />
    </div>
  );
};

export default HumanRights;
