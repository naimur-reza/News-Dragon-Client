import React from "react";
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
const RightNav = () => {
  return (
    <>
      <h5 className="pb-2">Login With</h5>
      <div className="d-flex flex-column gap-2">
        <Button
          className="d-flex justify-content-center align-items-center gap-2"
          variant="outline-primary"
        >
          <FaGoogle />
          Login With Google
        </Button>{" "}
        <Button
          className="d-flex justify-content-center align-items-center gap-2"
          variant="outline-secondary"
        >
          <FaGithub />
          Login With Github
        </Button>{" "}
        <h4 className="py-3">Find Us On</h4>
      </div>
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
      <div className="my-4 bg-light  rounded">
        <h4 className="text-center py-2">Qzone</h4>
        <Qzone />
      </div>
      <div className="position-relative">
        <img src={bg} alt="" />
        <div className="position-absolute">
          <h1>Ok</h1>
        </div>
      </div>
    </>
  );
};

export default RightNav;
