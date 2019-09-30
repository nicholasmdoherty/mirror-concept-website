import React, { Component } from "react";
import { Row, Col } from "react-bootstrap";
import "../hero-image-features.css";

export default class Features extends Component {
  render() {
    return (
      <Row>
        <Col xs={12} sm={6} className="feature-col">
          <div>
            <div className="text-center">
              <i className="fas fa-5x fa-user-friends p-4"></i>
              <h2 className="quicksand-font fw-800">Connect with friends</h2>
            </div>
            <p className="lead abel-font">
              Upload your wardrobe and create a style profile. Add your friends'
              profiles and look through their personal style and saved outfits.
            </p>
          </div>
        </Col>
        <Col xs={12} sm={6} className="feature-col">
          <div>
            <div className="text-center">
              <i className="fas fa-5x fa-tshirt p-4"></i>
              <h2 className="quicksand-font fw-800">Outift Inspiration</h2>
            </div>
            <p className="lead abel-font">
              Get recommendations from friends on outifts to wear and look for
              inspiration from trending public styles across the system.
            </p>
          </div>
        </Col>
      </Row>
    );
  }
}
