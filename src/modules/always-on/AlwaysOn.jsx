import React, { Component } from "react";
import { Container, Col, Row, Image } from "react-bootstrap";
import "./always-on.css";

export default class AlwaysOn extends Component {
  render() {
    return (
      <Container className="wide-row-container always-on-row">
        <Row className="flex-wrap-reverse">
          <Col className="always-on-text-col" xs={12} md={6}>
            <div>
              <h2 className="roboto-font fw-600 always-on-header">
                {" "}
                ALWAYS CONNECTED{" "}
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
          <Col className="always-on-image-col" xs={12} md={6}>
            <Image
              className="always-on-image"
              src="/assets/img/placeholder.png"
            />
          </Col>
        </Row>
      </Container>
    );
  }
}
