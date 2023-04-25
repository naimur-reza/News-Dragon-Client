import React from "react";
import Navigation from "../Navigation";
import { Outlet } from "react-router-dom";

const LoginLayout = () => {
  return (
    <div>
      <Navigation />
      <Outlet />
    </div>
  );
};

export default LoginLayout;
