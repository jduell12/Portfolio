import React, { useState } from "react";

const Switch = ({ handleClick }) => {
  const [darkTheme, changeDarkTheme] = useState(true);

  const toggle = () => {
    changeDarkTheme(!darkTheme);
    // handleClick();
  };
  return (
    <button id={darkTheme ? "switch-dark" : "switch-light"} onClick={toggle}>
      <span className={darkTheme === "dark" ? "circleLeft" : "circleRight"} />
    </button>
  );
};

export default Switch;
