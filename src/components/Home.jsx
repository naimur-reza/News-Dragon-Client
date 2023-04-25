import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import RightNav from "./Navigation/RightNav/RightNav";
import Categories from "./Navigation/LeftNav/Categories";
import News from "./News/News";
import { Outlet } from "react-router-dom";
const Home = () => {
  return (
    <Container className="mx-auto py-5 my-2">
      <Row>
        <Col sm={3}>
          <Categories />
        </Col>
        <Col sm={6}>
          <Outlet />
        </Col>
        <Col sm={3}>
          <RightNav />
        </Col>
      </Row>
    </Container>
  );
};

export default Home;
