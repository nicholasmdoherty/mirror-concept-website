import React, { Component } from "react";
import { Row, Col, Image } from "react-bootstrap";
import "../hero-image-features.css";

export default class HeroImage extends Component {
  render() {
    return (
      <Row>
        <Col xs={12} className="hero-image-wrapper">
          <div className="text-center">
            <Image className="hero-image" src="/assets/img/placeholder.png" />
            <p className="hero-caption-font abel-font p-3">
              A SocialMirror is a smart mirror that connects to the world's
              first of a kind peer-to-peer fashion network.
            </p>
          </div>
        </Col>
      </Row>
    );
  }
}
