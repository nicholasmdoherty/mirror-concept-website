import React, { Component } from "react";
import "./sustainable-shopping.css";
import { Container, Row, Col, Image } from "react-bootstrap";

export default class SustainableShopping extends Component {
  render() {
    return (
      <Container className="wide-row-container sustainable-shopping-row">
        <Row>
          <Col className="sustainable-shopping-image-col" xs={12} md={6}>
            <Image
              className="sustainable-shopping-image"
              src="/assets/img/placeholder.png"
            />
          </Col>
          <Col className="sustainable-shopping-text-col" xs={12} md={6}>
            <div>
              <h2 className="roboto-font fw-600 sustainable-shopping-header">
                {" "}
                SUSTAINABLE SHOPPING{" "}
              </h2>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                sunt in culpa qui officia deserunt mollit anim id est laborum.
              </p>
            </div>
          </Col>
        </Row>
      </Container>
    );
  }
}
