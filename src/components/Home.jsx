import React from "react";
import logo from "../../src/assets/logo.png";
import Header from "./Header";
import { Col, Container, Row } from "react-bootstrap";
import LeftNav from "./Navigation/LeftNav/LeftNav";
import RightNav from "./Navigation/RightNav/RightNav";
import News from "./News/News";
const Home = () => {
  return (
    <Container className="mx-auto py-5 my-2">
      <Row>
        <Col sm={3}>
          <LeftNav />
        </Col>
        <Col sm={6}>
          <News></News>
        </Col>
        <Col sm={3}>
          <RightNav />
        </Col>
      </Row>
    </Container>
  );
};

export default Home;
