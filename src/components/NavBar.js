import React, { useContext } from "react";
import { Nav, NavItem, NavLink, Navbar } from "reactstrap";

//context
import { AboutContext } from "../context/AboutContext";

const NavBar = ({ project }) => {
  const { aboutOpen, setOpen } = useContext(AboutContext);

  const changeOpen = () => {
    setOpen(!aboutOpen);
  };
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
                <NavLink href="/#about" onClick={changeOpen} className="about">
                  About
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="/#projects" className="portfolio">
                  Portfolio
                </NavLink>
              </NavItem>
            </>
          )}
        </Nav>
      </Navbar>
    </div>
  );
};

export default NavBar;
