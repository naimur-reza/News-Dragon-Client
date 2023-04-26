import React, { useContext } from "react";
import { AuthContext } from "../AuthProvider/AuthProvider";
import { Spinner } from "react-bootstrap";
import { Navigate, useLocation } from "react-router-dom";

const PrivateRoute = ({ children }) => {
  const { loading, user } = useContext(AuthContext);
  const location = useLocation();
  console.log(location);
  if (loading) {
    return <Spinner variant="primary" animation="border"></Spinner>;
  }
  if (user) {
    return children;
  }
  return (
    <Navigate
      state={{ from: location }}
      to={"/authorization"}
      replace
    ></Navigate>
  );
};

export default PrivateRoute;
