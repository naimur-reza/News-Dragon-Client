import React, { useContext, useState } from "react";
import { Form, Button } from "react-bootstrap";
import { AuthContext } from "./AuthProvider/AuthProvider";
import { Link, Navigate, useLocation, useNavigate } from "react-router-dom";
import { toast } from "react-hot-toast";
const Register = () => {
  const { logIn } = useContext(AuthContext);
  const location = useLocation();
  const form = location?.state?.from?.pathname || "/";
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const [show, isSHow] = useState(false);
  const handleRegister = (event) => {
    event.preventDefault();
    logIn(email, password)
      .then((res) => {
        const loggedUser = res.user;
        console.log(loggedUser);
        navigate(form);
      })
      .catch((err) => {
        console.log(err);
        toast.error(err.message);
      });
  };
  return (
    <div className="d-flex align-items-center justify-content-center py-5">
      <Form className="bg-white rounded   p-5 " onSubmit={handleRegister}>
        <h2 className="text-center mb-4">Login Your Account</h2>

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
          <Form.Label className="fw-semibold">Password</Form.Label>
          <Form.Control
            type={show ? "text" : "password"}
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </Form.Group>
        <p className="pt-2">
          New to here?{" "}
          <Link
            state={form}
            className="text-decoration-none text-danger fw-semibold"
            to={"register"}
            replace
          >
            Register Now
          </Link>
        </p>
        <span>
          <Form.Check
            onClick={() => isSHow(!show)}
            className="d-inline"
            aria-label="option 1"
          />{" "}
          Show Password
        </span>
        <Button variant="dark" type="submit" className="w-100 mt-3">
          Sign in
        </Button>
      </Form>
    </div>
  );
};

export default Register;
