import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { Outlet } from "react-router-dom";
import RightNav from "../Navigation/RightNav/RightNav";
import Header from "../Header";

const NewsLayout = () => {
  return (
    <>
      <Container>
        <Row>
          <Col sm={9}>
            <Outlet />
          </Col>
          <Col sm={3}>
            <RightNav />
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default NewsLayout;
