import React from "react";
import Card from "react-bootstrap/Card";
import { Col } from "react-bootstrap";

const WorkspaceCard = (props) => {
  return (
    <Col xs={12} lg={4}>
      <Card style={{ width: "24rem" }} className="my-2 mx-2">
        <Card.Img variant="top" src={props.workspace.image} />
        <Card.Body>
          <Card.Title className="c-title">{props.workspace.name}</Card.Title>
          <Card.Text>{props.workspace.address}</Card.Text>
        </Card.Body>
      </Card>
    </Col>
  );
};

export default WorkspaceCard;
