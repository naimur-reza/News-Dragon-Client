import React from "react";
import { Nav } from "react-bootstrap";
import { Link, NavLink } from "react-router-dom";

const Navigation = () => {
  return (
    <Nav className="mx-auto  fw-semibold  gap-4">
      <NavLink
        className={({ isActive }) =>
          isActive
            ? "text-warning text-decoration-none"
            : "text-muted text-decoration-none"
        }
        to={"/categories/0"}
      >
        Home
      </NavLink>
      <NavLink
        className={({ isActive }) =>
          isActive
            ? " text-warning text-decoration-none"
            : "text-muted text-decoration-none"
        }
        to={"/about"}
      >
        About
      </NavLink>
      <NavLink
        className={({ isActive }) =>
          isActive
            ? "text-warning text-decoration-none"
            : "text-muted text-decoration-none"
        }
        to={"/career"}
      >
        Career
      </NavLink>
    </Nav>
  );
};

export default Navigation;
