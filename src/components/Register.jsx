import React, { useContext, useState } from "react";
import { Form, Button } from "react-bootstrap";
import { AuthContext } from "./AuthProvider/AuthProvider";
import { Link, Navigate, useLocation, useNavigate } from "react-router-dom";

function Register() {
  const { createUser } = useContext(AuthContext);
  const location = useLocation();
  console.log(location);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const handleRegister = (event) => {
    event.preventDefault();
    createUser(email, password)
      .then((res) => {
        const loggedUser = res.user;
        console.log(loggedUser);
        navigate("/");
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div className="d-flex align-items-center justify-content-center py-5">
      <Form className="bg-light   p-4 " onSubmit={handleRegister}>
        <h2 className="text-center mb-4">Register Your Account</h2>

        <Form.Group controlId="formBasicName">
          <Form.Label className="fw-semibold">Enter Full Name</Form.Label>
          <Form.Control type="text" placeholder="Enter name" />
        </Form.Group>
        <Form.Group controlId="formBasicEmail">
          <Form.Label className="fw-semibold">Email address</Form.Label>
          <Form.Control
            type="email"
            placeholder="Enter email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </Form.Group>

        <Form.Group controlId="formBasicPassword">
          <Form.Label className="fw-semibold">Photo URL</Form.Label>
          <Form.Control type="text" placeholder="photo url" />
        </Form.Group>
        <Form.Group controlId="formBasicPassword">
          <Form.Label className="fw-semibold">Password</Form.Label>
          <Form.Control
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </Form.Group>
        <p className="py-2">
          Already have an account? <Link to={"/login"}>Login Now</Link>
        </p>

        <Button variant="dark" type="submit" className="w-100 mt-3">
          Sign in
        </Button>
      </Form>
    </div>
  );
}

export default Register;
