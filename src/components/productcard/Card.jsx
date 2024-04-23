import React, { useState, useEffect } from "react";
import Card from "react-bootstrap/Card";
import makeRequest from "../../queries/makerequest";
import { CiStar } from "react-icons/ci";
import { FaStar } from "react-icons/fa";

function Productcard({product}) {
 

  const star = Array.from({ length: 5 }, (_, index) => (
    <FaStar
      key={index}
      style={{
        color: index < Math.floor(product.rating?.rate) ? "gold" : undefined,
      }}
    />
  ));

  return (
    
    <Card
      style={{
        width: "255px",
        height: "380px",
        border: "none",
      }}
      className="shadow-sm my-3"
    >
      <Card.Img
        variant="top"
        src={product?.image}
        style={{ width: "100%", height: "255px" }}
        alt="product image"
        className="border rounded-top object-fit-contain"
      />
      <Card.Body className="">
        <Card.Title>{product.title?.slice(0, 20)}</Card.Title>
        <Card.Text>
          {product.description?.slice(0, 25)}
          <div className="d-flex flex-row justify-content-between">
            <div>{`₹ ${product?.price}`}</div>
            <div>{star}</div>
          </div>
        </Card.Text>
      </Card.Body>
    </Card>
  );
}

export default Productcard;
