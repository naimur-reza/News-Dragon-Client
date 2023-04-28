import React, { useContext, useState } from "react";
import { Form, Button } from "react-bootstrap";
import { AuthContext } from "./AuthProvider/AuthProvider";
import { Link, Navigate, useLocation, useNavigate } from "react-router-dom";
import { toast } from "react-hot-toast";

function Register() {
  const { createUser, profileUpdate } = useContext(AuthContext);
  const location = useLocation();
  const from = location?.state;
  const [show, isShow] = useState(false);
  const [terms, isTerms] = useState(true);
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [photoUrl, setPhotoUrl] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  // validate password from here
  const validatePassword = () => {
    if (password.length < 8) {
      return "Password must be at least 8 characters long";
    } else if (!/(?=.*?[A-Z])/.test(password)) {
      return "Password must contain at least one uppercase letter";
    } else if (!/(?=.*?[a-z])/.test(password)) {
      return "Password must contain at least one lowercase letter";
    } else if (!/(?=.*?[0-9])/.test(password)) {
      return "Password must contain at least one number";
    } else if (!/(?=.*?[#?!@$%^&*-])/.test(password)) {
      return "Password must contain at least one special character";
    } else {
      return "";
    }
  };
  const handleRegister = (event) => {
    event.preventDefault();
    const passError = validatePassword();
    // check the password validation error
    if (passError) {
      toast.error(validatePassword);
      return;
    }
    // user registration
    createUser(email, password)
      .then((res) => {
        const loggedUser = res.user;
        navigate(from || "/");
        toast.success("Registration successful");
      })
      .catch((err) => {
        console.log(err);
        toast.error(err.message);
      });
    profileUpdate(name, photoUrl);
  };

  return (
    <div className="d-flex align-items-center justify-content-center py-5">
      <Form className="bg-white rounded   p-5" onSubmit={handleRegister}>
        <h2 className="text-center mb-4">Register Your Account</h2>

        <Form.Group controlId="formBasicName">
          <Form.Label className="fw-semibold">Enter Full Name</Form.Label>
          <Form.Control
            required
            value={name}
            onChange={(e) => setName(e.target.value)}
            type="text"
            placeholder="Enter name"
          />
        </Form.Group>
        <Form.Group controlId="formBasicEmail">
          <Form.Label className="fw-semibold">Email address</Form.Label>
          <Form.Control
            required
            type="email"
            placeholder="Enter email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </Form.Group>

        <Form.Group controlId="formBasicPassword">
          <Form.Label className="fw-semibold">Photo URL</Form.Label>
          <Form.Control
            value={photoUrl}
            onChange={(e) => setPhotoUrl(e.target.value)}
            type="text"
            placeholder="photo url"
          />
        </Form.Group>
        <Form.Group controlId="formBasicPassword">
          <Form.Label className="fw-semibold">Password</Form.Label>
          <Form.Control
            required
            type={show ? "text" : "password"}
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </Form.Group>
        <p className="py-2">
          Already have an account?{" "}
          <Link
            className="text-decoration-none text-danger fw-semibold"
            to={"/authorization"}
          >
            Login Now
          </Link>
        </p>
        <span>
          <Form.Check
            onClick={() => isShow(!show)}
            className="d-inline"
            aria-label="option 1"
          />{" "}
          Show Password
        </span>
        <span className="d-flex gap-1">
          <Form.Check onClick={() => isTerms(!terms)} />
          Accept terms and conditions
        </span>

        <Button
          variant="dark"
          disabled={terms && true}
          type="submit"
          className="w-100 mt-3"
        >
          Sign Up
        </Button>
      </Form>
    </div>
  );
}

export default Register;
