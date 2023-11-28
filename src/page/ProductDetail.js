import React, { useEffect, useState } from "react";
import Dropdown from "react-bootstrap/Dropdown";
import Button from "react-bootstrap/Button";
import { Row, Col, Container } from "react-bootstrap";
import { useParams } from "react-router-dom";

const ProductDetail = () => {
  let { id } = useParams();
  const [product, setProduct] = useState(null) 
  const getProductDetail = async () => {
    let url = `https://my-json-server.typicode.com/hodooha/hnm-website/products/${id}`;
    let response = await fetch(url);
    let data = await response.json();
    setProduct(data)
  };

  useEffect(() => {
    getProductDetail();
  }, []);

  return (
    <Container className="detail">
      <Row>
        <Col>
          <img src={product?.img}></img>
        </Col>
        <Col className="detail-text">
          <div>{product?.title}</div>
          <div>₩{product?.price}</div>
          <div className="choice">{product?.choice === true ? "Conscious choice" : ""}</div>
          <div>
            <Dropdown>
              <Dropdown.Toggle variant="success" id="dropdown-basic">
                사이즈선택
              </Dropdown.Toggle>

              <Dropdown.Menu>
                <Dropdown.Item href="#/action-1">S</Dropdown.Item>
                <Dropdown.Item href="#/action-2">M</Dropdown.Item>
                <Dropdown.Item href="#/action-3">L</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
          </div>
          <Button className="add-button" variant="dark">
            추가
          </Button>
        </Col>
      </Row>
    </Container>
  );
};

export default ProductDetail;
