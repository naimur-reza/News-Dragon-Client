import React from "react";
import logo from "../../src/assets/logo.png";
import moment from "moment";
import { Button, Container, Navbar } from "react-bootstrap";
import Nav from "react-bootstrap/Nav";
import Marquee from "react-fast-marquee";
const Header = () => {
  return (
    <Container>
      <div className="text-center">
        <img src={logo} alt="" />
        <p>Journalism Without Fear And Favor</p>
        <p className="fw-semibold">{moment().format("LLLL")}</p>
      </div>
      <div className="d-flex">
        <Button variant="warning">Latest</Button>
        <Marquee className="text-danger" pauseOnHover speed={90}>
          I can be a React component, multiple React components, or just some
          text.
        </Marquee>
      </div>
      <>
        <Navbar bg="white" variant="white">
          <Container>
            <Nav className="mx-auto">
              <Nav.Link href="#home">Home</Nav.Link>
              <Nav.Link href="#features">About</Nav.Link>
              <Nav.Link href="#pricing">Career</Nav.Link>
            </Nav>
            <div className="d-flex align-items-center gap-3">
              <a>Profile</a>
              <Button variant="dark">Login </Button>
            </div>
          </Container>
        </Navbar>
      </>
    </Container>
  );
};

export default Header;
