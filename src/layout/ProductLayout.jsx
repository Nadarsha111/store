import React, { useEffect, useState } from "react";
import makeRequest from "../queries/makerequest";
import Productcard from "../components/productcard/Card";

const ProductLayout = () => {
  const [products, setProduct] = useState([]);

  useEffect(() => {
    makeRequest
      .get("/products")
      .then((res) => {
        setProduct(res.data);
        console.log(res.data);
      })
      .catch((err) => {
        console.error("Error fetching product data:", err);
      });
  }, []);

  return (
    <div className="container">
      <h2 className="text-left my-4">Hot Selling</h2>
      {/*TODO:add row-col-2 for sm devices */}
      <div className="row row-cols-md-2 row-cols-lg-4 row-cols-xl-4 justify-content-between">
        {products.map((product) => (
          <div className="col d-flex justify-content-center" key={product.id}>
            <Productcard product={product} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductLayout;
