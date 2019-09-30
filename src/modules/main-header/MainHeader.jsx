import React, { Component } from "react";
import "./main-header.css";
import { Col, Button, Row, Container } from "react-bootstrap";

export default class MainHeader extends Component {
  render() {
    return (
      <Container className="main-header mr-0 ml-0">
        <Row className="main-header-content">
          <Col xs={12} sm={6} md={8} className="content-text-column">
            <h2 className="content-text roboto-font">
              JOIN THE FUTURE <br />
              OF FASHION
            </h2>
          </Col>
          <Col xs={12} sm={6} md={4} className="content-button-column">
            <Button size="lg" variant="outline-dark">
              Learn More
            </Button>
          </Col>
        </Row>
      </Container>
    );
  }
}
