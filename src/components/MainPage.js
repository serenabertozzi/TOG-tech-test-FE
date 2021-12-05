import React from "react";
import { WorkspaceDataAPI } from "../hooks/useWorkspaceDataAPI";
import { Container, Row, Col, Card } from "react-bootstrap";
import WorkspaceCard from "./WorkspaceCard";

const MainPage = (props) => {
  const [currentData] = WorkspaceDataAPI();

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
        {currentData.workspaces.map((workspace) => {
          return (
            <Col xs={12} lg={4}>
              <Card style={{ width: "24rem" }} className="my-2 mx-2">
                <Card.Img variant="top" src={props.workspace.image} />
                <Card.Body>
                  <Card.Title className="c-title">
                    {props.workspace.name}
                  </Card.Title>
                  <Card.Text>{props.workspace.address}</Card.Text>
                </Card.Body>
              </Card>
            </Col>
          );
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
