import React, { useContext } from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import icon from "../Assets/icon.png";
import { Link } from "react-router-dom";
import { env } from "../config";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import UserContext from "../UserContext";
const Topbar = () => {
  let context = useContext(UserContext);
  let navigate = useNavigate();
  const { user, setUser, admin } = useContext(UserContext);
  return (
    <>
      <Navbar
        className="p-4"
        collapseOnSelect
        expand="lg"
        bg="light"
        variant="light"
      >
        <Container>
          <img style={{ width: "100px" }} src={icon} alt={icon} />
          <Navbar.Brand style={{ fontSize: "1.3rem" }} href="/">
            EQUP-HUNTERS
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto" style={{ fontSize: "1.1rem" }}>
              <Nav.Link as={Link} to="/equipment">
                Hire Equipments
              </Nav.Link>
              <Nav.Link as={Link} to="/contact">
                Contact US
              </Nav.Link>
            </Nav>
            <Nav>
              <Nav.Link as={Link} to="/login">
                Login-In
              </Nav.Link>
              <Nav.Link eventKey={2} as={Link} to="/signup">
                Sign-Up
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};

export default Topbar;
