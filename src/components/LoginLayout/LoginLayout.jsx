import React from "react";
import Navigation from "../Navigation";
import { Outlet } from "react-router-dom";
import { Container } from "react-bootstrap";

const LoginLayout = () => {
  return (
    <div className="bg-light  vh-100">
      <Container className="">
        <div className="d-flex py-3">
          <Navigation />
        </div>

        <Outlet />
      </Container>
    </div>
  );
};

export default LoginLayout;
