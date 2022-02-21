import React from "react";

import logo from "assets/img/logo.png";
import logoutIcon from "../img/logout.svg";
import { Button, Navbar, Nav } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "core/contexts/AuthContext";
import { BlogContext } from "core/contexts/BlogContext";
function NavbarMenu() {
  const {
    authState: {
      user: { username },
    },
    logoutUser,
  } = useContext(AuthContext);
  const { getBlogs } = useContext(BlogContext);
  const logout = () => logoutUser();

  return (
    <>
      <Navbar expand="lg" bg="primary" variant="dark" className="shadow">
        <Navbar.Brand className="font-weight-bolder text-white">
          <img
            src={logo}
            alt="learnItLogo"
            width="32"
            height="32"
            className="mr-2"
          />
        </Navbar.Brand>

        <Navbar.Toggle aria-controls="basic-navbar-nav" />

        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link
              className="font-weight-bolder text-white"
              as={Link}
              to="/dashboard"
              onClick={() => getBlogs("1")}
            >
              All BLog
            </Nav.Link>
            <Nav.Link
              className="font-weight-bolder text-white"
              as={Link}
              to="/dashboard"
              onClick={() => getBlogs("normal")}
            >
              Normal
            </Nav.Link>
            <Nav.Link
              className="font-weight-bolder text-white"
              to="/dashboard"
              as={Link}
              onClick={() => getBlogs("header")}
            >
              Header
            </Nav.Link>
            <Nav.Link
              className="font-weight-bolder text-white"
              to="/dashboard"
              as={Link}
              onClick={() => getBlogs("popular")}
            >
              Popular
            </Nav.Link>
          </Nav>

          <Nav>
            <Nav.Link className="font-weight-bolder text-white" disabled>
              Welcome {username}
            </Nav.Link>
            <Button
              variant="secondary"
              className="font-weight-bolder text-white"
              onClick={logout}
            >
              <img
                src={logoutIcon}
                alt="logoutIcon"
                width="32"
                height="32"
                className="mr-2"
                style={{ width: "unset" }}
              />
              Logout
            </Button>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </>
  );
}

export default NavbarMenu;
