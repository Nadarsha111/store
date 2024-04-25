import React from "react";
import { Card, Col, Row } from "react-bootstrap";

const CatagoriesCard = ({ title, image }) => {
  return (
    <Col>
      <Card className="bg-white text-white" style={{ height: "100%" }}>
        <Card.Img src={image} alt="Card image" className="h-100" />
        <Card.ImgOverlay className="d-flex align-items-center justify-content-center wrap bg-black bg-opacity-50 text-white text-center">
          <Card.Title>{title}</Card.Title>
        </Card.ImgOverlay>
    </Card>
    </Col>
  );
};

export default CatagoriesCard;
