import React from "react";
import Navigation from "../Navigation";
import { Outlet } from "react-router-dom";
import { Container } from "react-bootstrap";

const ProfileLayout = () => {
  return (
    <div className="bg-light vh-100">
      <Container>
        <div className="d-flex justify-content-center py-3">
          <Navigation />
        </div>
        <Outlet />
      </Container>
    </div>
  );
};

export default ProfileLayout;
