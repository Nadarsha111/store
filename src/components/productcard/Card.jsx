import React, { useState, useEffect } from "react";
import Card from "react-bootstrap/Card";
import makeRequest from "../../queries/makerequest";
import { CiStar } from "react-icons/ci";
import { FaStar } from "react-icons/fa";

function Productcard() {
  const [product, setProduct] = useState({});

  useEffect(() => {
    makeRequest
      .get("/products/1")
      .then((res) => {
        setProduct(res.data);
        console.log(res.data);
      })
      .catch((err) => {
        console.error("Error fetching product data:", err);
      });
  }, []);

  const star = Array.from({ length: 5 }, (_, index) => (
    <FaStar
      key={index}
      style={{
        color: index < Math.floor(product.rating?.rate) ? "gold" : undefined,
      }}
    />
  ));

  return (
    <Card style={{ width: "255px", height: "380px",border:'none' }} className="my-5">
      <Card.Img
        variant="top"
        src={product.image}
        style={{ width: "255px", height: "380px" }}
        alt="product image"
        className="object-fit-fill"
      />
      <Card.Body className="mt-2 mb-3">
        <Card.Title>{product.title?.slice(0, 20)}</Card.Title>
        <Card.Text>{product.description?.slice(0, 50)}</Card.Text>
        <div className="d-flex flex-row justify-content-between">
          <div>{product.price}</div>
          <div>{star}</div>
        </div>
      </Card.Body>
    </Card>
  );
}

export default Productcard;
