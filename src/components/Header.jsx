import React, { useContext } from "react";
import logo from "../../src/assets/logo.png";
import moment from "moment";
import { Button, Container, Navbar } from "react-bootstrap";
import Nav from "react-bootstrap/Nav";
import Marquee from "react-fast-marquee";
import { Link } from "react-router-dom";
import { AuthContext } from "./AuthProvider/AuthProvider";
const Header = () => {
  const { user, logOut } = useContext(AuthContext);
  return (
    <Container>
      <div className="text-center">
        <img src={logo} alt="" />
        <p>Journalism Without Fear And Favor</p>
        <p className="fw-semibold">{moment().format("LLLL")}</p>
      </div>
      <div className="d-flex bg-light">
        <Button variant="warning">Latest</Button>
        <Marquee
          className="text-danger"
          pauseOnHover
          gradient={false}
          speed={90}
        >
          I can be a React component, multiple React components, or just some
          text.
        </Marquee>
      </div>
      <>
        <Navbar bg="white" variant="white">
          <Container>
            <Nav className="mx-auto d-flex text- gap-4">
              <Link className="text-muted text-decoration-none" to={"/"}>
                Home
              </Link>
              <Link className="text-muted text-decoration-none" to={"/about"}>
                About
              </Link>
              <Link className="text-muted text-decoration-none" to={"/career"}>
                Career
              </Link>
            </Nav>
            <div className="d-flex align-items-center gap-3">
              <Link to={"/profile"} className="btn btn-light ">
                Profile
              </Link>
              <Button variant="dark">
                {user ? (
                  <Link
                    onClick={logOut}
                    className="text-decoration-none text-white"
                    to={"/"}
                  >
                    Logout
                  </Link>
                ) : (
                  <Link
                    className="text-decoration-none text-white"
                    to={"/login"}
                  >
                    Login
                  </Link>
                )}
              </Button>
            </div>
          </Container>
        </Navbar>
      </>
    </Container>
  );
};

export default Header;
