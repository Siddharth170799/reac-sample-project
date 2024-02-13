import React, { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import axios from "axios";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
function ProductDetails() {
  const [data, setData] = useState();
  const param = useParams();
  console.log("nlaskndlkanlkds" + param.id);
  async function fetchProductDetail() {
    const productData = await axios.get(
      `https://fakestoreapi.com/products/${param.id}`
    );
    console.log(productData.data);
    setData(productData?.data);
  }
  useEffect(() => {
    fetchProductDetail();
  }, []);

  return (
    <div>
      {data ? (
        <div key={data.id}>
          {" "}
          <Card style={{ width: "18rem" }}>
            <Card.Img variant="top" src={data?.image} />
            <Card.Body>
              <Card.Title>{data?.title}</Card.Title>
              <Card.Text>{data?.description}</Card.Text>
              <Link to={"/"}>
                <Button variant="primary">Go home page</Button>
              </Link>
            </Card.Body>
          </Card>{" "}
        </div>
      ) : (
        <div>Loading... </div>
      )}
    </div>
  );
}

export default ProductDetails;
