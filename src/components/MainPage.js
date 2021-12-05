import React from "react";
import { WorkspaceDataAPI } from "../hooks/useWorkspaceDataAPI";
import { Container, Row, Col, Card } from "react-bootstrap";
import WorkspaceCard from "./WorkspaceCard";

const MainPage = (props) => {
  const [currentData, loading] = WorkspaceDataAPI();

  const WorkspaceInfo = () => {
    currentData.workspaces.map((workspace) => {
      return <WorkspaceCard workspace={workspace} />;
    });
  };

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
      <Row>
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

// {currentData.workspaces.map((workspace) => {
//   return <h1>{workspace.name}</h1>;
//   // <WorkspaceCard workspace={workspace} />;
// })}
