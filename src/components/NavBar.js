import React from "react";
import { Nav, NavItem, NavLink, Navbar } from "reactstrap";
import Switch from "./Switch";

const NavBar = () => {
  return (
    <div id="nav">
      <Navbar color="dark" dark>
        <Nav navbar>
          <NavItem>
            <NavLink href="#about">About</NavLink>
          </NavItem>
          <NavItem>
            <NavLink href="#portfolio">Portfolio</NavLink>
          </NavItem>
        </Nav>
        {/* <Switch /> */}
      </Navbar>
    </div>
  );
};

export default NavBar;
