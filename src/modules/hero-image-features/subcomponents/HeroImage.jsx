import React, { Component } from "react";
import { Row, Col, Image } from "react-bootstrap";
import "../hero-image-features.css";

export default class HeroImage extends Component {
  render() {
    return (
      <Row>
        <Col xs={12} className="hero-image-wrapper">
          <Image className="hero-image" src="/assets/img/placeholder.png" />
        </Col>
      </Row>
    );
  }
}
