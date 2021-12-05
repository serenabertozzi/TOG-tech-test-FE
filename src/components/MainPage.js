import React from "react";
import { WorkspaceDataAPI } from "../hooks/useWorkspaceDataAPI";
import { Container, Row, Col } from "react-bootstrap";

const MainPage = () => {
  const [currentData] = WorkspaceDataAPI();

  return (
    <Container>
      <Row>
        <Col>
          <div>
            <h1 className="my-4 custom-title">{currentData.title}</h1>
            <p className="py-3 custom-paragraph">{currentData.intro}</p>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default MainPage;
