import React from "react";
import Card from "react-bootstrap/Card";
import { Row, Col } from "react-bootstrap";

const WorkspaceCard = (props) => {
  return (
    <Col xs={12} md={6} xl={4}>
      <Card className="custom-card my-md-4">
        <Card.Img
          variant="top"
          src={
            props.workspace.image === undefined
              ? "https://steadway.de/wp-content/uploads/2020/10/TOG_top.jpg"
              : props.workspace.image
          }
        />
        <Card.Body>
          <Card.Title className="custom-title">
            {props.workspace.name}
          </Card.Title>
          <Card.Text style={{ fontSize: "0.8em" }}>
            {props.workspace.address}
          </Card.Text>
          <hr></hr>
          <Row className="justify-content-between">
            <Col xs={4} className="d-flex align-content-center flex-column">
              <p className="fw-bold">Rooms / Size</p>
              <div>
                {props.workspace.rooms.map((room) => {
                  return (
                    <div className="d-flex justify-content-between">
                      <p className="fw-bold">{room.amount}</p>
                      <p className="text-capitalize">{room.size}</p>
                    </div>
                  );
                })}
              </div>
            </Col>
            <Col xs={4} className="d-flex align-content-center flex-column">
              <p className="fw-bold">Capacity</p>
              {props.workspace.rooms.map((room) => {
                return (
                  <div className="d-flex justify-content-center">
                    <p>{room.capacity}</p>
                  </div>
                );
              })}
            </Col>
            <Col xs={4} className="d-flex justify-content-center flex-column">
              <p className="fw-bold">Price</p>
              {props.workspace.rooms.map((room) => {
                return (
                  <div className="d-flex justify-content-start">
                    <p>£{room.price}/h</p>
                  </div>
                );
              })}
            </Col>
          </Row>
        </Card.Body>
      </Card>
    </Col>
  );
};

export default WorkspaceCard;
