import React from "react";
import { Card, Col, Row } from "react-bootstrap";
import { FaCalendar } from "react-icons/fa";
import first from "../../../src/assets/1.png";
import second from "../../../src/assets/2.png";
import third from "../../../src/assets/3.png";
const EditorInsight = () => {
  return (
    <Row xs={1} md={2} lg={3} className="g-4">
      <Col>
        <Card>
          <Card.Img variant="top" src={first} />
          <Card.Body>
            <Card.Title>Card title</Card.Title>
            <div className="d-flex align-items-center gap-3 fs-5">
              <FaCalendar /> <span> Jan 4, 2022 </span>
            </div>
          </Card.Body>
        </Card>
      </Col>
      <Col>
        <Card>
          <Card.Img variant="top" src={second} />
          <Card.Body>
            <Card.Title>Business Strategies</Card.Title>
            <div className="d-flex align-items-center gap-3 fs-5">
              <FaCalendar /> <span> Jan 4, 2022 </span>
            </div>
          </Card.Body>
        </Card>
      </Col>
      <Col>
        <Card>
          <Card.Img variant="top" src={third} />
          <Card.Body>
            <Card.Title>Old Trafford</Card.Title>
            <div className="d-flex align-items-center gap-3 fs-5">
              <FaCalendar /> <span> Jan 4, 2022 </span>
            </div>
          </Card.Body>
        </Card>
      </Col>
    </Row>
  );
};

export default EditorInsight;
