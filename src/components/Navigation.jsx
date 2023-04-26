import React from "react";
import { Nav } from "react-bootstrap";
import { Link } from "react-router-dom";

const Navigation = () => {
  return (
    <Nav className="mx-auto  fw-semibold  gap-4">
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
  );
};

export default Navigation;
