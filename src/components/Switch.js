import React from "react";

const Switch = () => {
  return (
    <>
      <input id="switch" className="switch-checkbox" type="checkbox" />
      <label className="switch-label" htmlFor="switch">
        <span className="switch-button" />
      </label>
    </>
  );
};

export default Switch;
