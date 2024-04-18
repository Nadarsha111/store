import React, { useState, useEffect } from "react";
import Card from "react-bootstrap/Card";
import makeRequest from "../../queries/makerequest";

function Productcard() {
  const [product, setProduct] = useState({});

  useEffect(() => {
    makeRequest
      .get("/products/1")
      .then((res) => {
        setProduct(res.data);
      })
      .catch((err) => {
        console.error("Error fetching product data:", err);
      });
  }, []);

  return (
    <Card style={{ width: "255px", height: "380px" }} className="m-5">
      <Card.Img
        variant="top"
        src={product.image}
        style={{ width: "255px", height: "380px" }}
      />
      <Card.Body>
        <Card.Title>{product.title?.slice(0, 20)}</Card.Title>
        <Card.Text>{product.description?.slice(0, 50)}</Card.Text>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </Card.Body>
    </Card>
  );
}

export default Productcard;
