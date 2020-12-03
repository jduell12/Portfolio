import React from "react";
import { Nav, NavItem, NavLink, Navbar } from "reactstrap";
import Switch from "./Switch";

const NavBar = ({ project }) => {
  return (
    <div id="nav">
      <Navbar color="dark" dark>
        <Nav navbar>
          {project ? (
            <NavItem>
              <NavLink href="/">Home</NavLink>
            </NavItem>
          ) : (
            <>
              <NavItem>
                <NavLink href="/#about" className="about">
                  About
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="/#portfolio" className="portfolio">
                  Portfolio
                </NavLink>
              </NavItem>
            </>
          )}
        </Nav>
        {/* <Switch /> */}
      </Navbar>
    </div>
  );
};

export default NavBar;
