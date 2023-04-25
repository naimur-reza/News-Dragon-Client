import React from "react";
import Navigation from "../Navigation";
import { Outlet } from "react-router-dom";
import { Container } from "react-bootstrap";

const LoginLayout = () => {
  return (
    <div className="bg-light ">
      <Container className="d-flex  justify-content-center flex-col py-3">
        <Navigation />

        <Outlet />
      </Container>
    </div>
  );
};

export default LoginLayout;
