import React, { useContext } from "react";
import { Button, ListGroup } from "react-bootstrap";
import bg from "../../../assets/bg.png";
import {
  FaFacebook,
  FaTwitter,
  FaInstagram,
  FaGoogle,
  FaGithub,
} from "react-icons/fa";
import Qzone from "./Qzone";
import { AuthContext } from "../../AuthProvider/AuthProvider";
const RightNav = () => {
  const { user, signInGoogle, signInGithub } = useContext(AuthContext);

  // make the pop up with google feature
  return (
    <>
      {!user && (
        <div className="d-flex flex-column gap-2">
          <h5 className="pb-2">Login With</h5>
          <Button
            onClick={signInGoogle}
            className="d-flex justify-content-center align-items-center gap-2"
            variant="outline-primary"
          >
            <FaGoogle />
            Login With Google
          </Button>{" "}
          <Button
            onClick={signInGithub}
            className="d-flex justify-content-center align-items-center gap-2"
            variant="outline-secondary"
          >
            <FaGithub />
            Login With Github
          </Button>{" "}
          <h4 className="py-3">Find Us On</h4>
        </div>
      )}
      <ListGroup>
        <ListGroup.Item>
          <FaFacebook className="text-primary" /> Facebook
        </ListGroup.Item>
        <ListGroup.Item>
          <FaInstagram className="text-danger" /> Instagram
        </ListGroup.Item>
        <ListGroup.Item>
          <FaTwitter className="text-primary" /> Twitter
        </ListGroup.Item>
      </ListGroup>
      <div className="my-4 bg-light  rounded ">
        <h4 className="text-center py-2">Qzone</h4>
        <Qzone />
      </div>
      <div className="position-relative ">
        <img className="w-100" src={bg} alt="" />
        <div className="position-absolute top-50 start-50 translate-middle text-muted">
          <h3 className="text-center fw-bold text-white">
            Create an Amazing Newspaper
          </h3>
          <p className="text-center  text-muted fw-semibold">
            Discover thousands of options, easy to customize layouts, one-click
            to import demo and much more.
          </p>
          <Button
            variant="danger"
            className="rounded-0 p-3 fw-semibold d-block mx-auto"
          >
            View More
          </Button>
        </div>
      </div>
    </>
  );
};

export default RightNav;
