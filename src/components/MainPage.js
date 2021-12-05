import React from "react";
import { WorkspaceDataAPI } from "../hooks/WorkspaceDataAPI";
import { Container, Row, Col, Button } from "react-bootstrap";

const MainPage = () => {
  const [currentData] = WorkspaceDataAPI();

  return (
    <Container>
      <Row>
        <Col>
          <div>
            <h1>{currentData.title}</h1>
            <p>{currentData.intro}</p>
            <Button variant="primary">Primary</Button>{" "}
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default MainPage;
