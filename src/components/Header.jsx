import React, { useContext } from "react";
import logo from "../../src/assets/logo.png";
import moment from "moment";
import { Button, Container, Navbar } from "react-bootstrap";
import Nav from "react-bootstrap/Nav";
import Marquee from "react-fast-marquee";
import { Link } from "react-router-dom";
import { AuthContext } from "./AuthProvider/AuthProvider";
import Navigation from "./Navigation";
const Header = () => {
  const { user, logOut } = useContext(AuthContext);
  return (
    <Container>
      <div className="text-center py-4">
        <img src={logo} alt="" />
        <p>Journalism Without Fear And Favor</p>
        <p className="fw-semibold">{moment().format("LLLL")}</p>
      </div>
      <div className="d-flex bg-light">
        <Button variant="warning">Latest</Button>
        <Marquee
          className="text-danger fw-semibold"
          pauseOnHover
          gradient={false}
          speed={22}
        >
          Wednesday, August 24, 2022 | Tag Cloud Tags: Biden, EU, Euro, Europe,
          Joe Biden, Military, News, Russia, Security, UK, Ukraine, United
          States, Worthy News (Worthy News) – U.S. President Joe Biden has
          announced nearly $3 billion in new U.S. military aid for Kyiv as
          Ukraine marked its independence day six months after Russia invaded
          the country.'The United States of America is committed to supporting
          the people of Ukraine as they continue the fight to defend their
          sovereignty. As part of that commitment, I am proud to announce our
          biggest tranche of security assistance to date: approximately $2.
        </Marquee>
      </div>
      <>
        <Navbar bg="white" variant="white">
          <Container>
            <Navigation />
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
