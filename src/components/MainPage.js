import React from "react";
import { WorkspaceDataAPI } from "../hooks/useWorkspaceDataAPI";
import { Container, Row, Col, Card } from "react-bootstrap";
import WorkspaceCard from "./WorkspaceCard";

const MainPage = (props) => {
  const [currentData, loading] = WorkspaceDataAPI();

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
      <Row className="justify-content-center">
        {loading
          ? ""
          : currentData.workspaces.map((workspace) => {
              return <WorkspaceCard workspace={workspace} />;
            })}
      </Row>
    </Container>
  );
};

export default MainPage;
