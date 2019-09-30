import React, { Component } from "react";
import { Row, Col } from "react-bootstrap";
import "../hero-image-features.css";

export default class Features extends Component {
  render() {
    return (
      <Row>
        <Col xs={12} sm={4} className="feature-col">
          <div>
            <div className="text-center">
              <i className="far fa-5x fa-grin-stars p-4"></i>
              <h2 className="quicksand-font fw-800">Expression</h2>
            </div>
            <p className="lead abel-font">
              &nbsp; &nbsp; Upload your wardrobe and create a profile to show
              off your style. Build a personal brand through your clothing.
            </p>
          </div>
        </Col>
        <Col xs={12} sm={4} className="feature-col">
          <div>
            <div className="text-center">
              <i className="fas fa-5x fa-tshirt p-4"></i>
              <h2 className="quicksand-font fw-800">
                Inspiration & Recommendations
              </h2>
            </div>
            <p className="lead abel-font">
              &nbsp; &nbsp; Get recommendations from your friends on outifts to
              wear and inspiration from trending outfits across the system.
            </p>
          </div>
        </Col>
        <Col xs={12} sm={4} className="feature-col">
          <div>
            <div className="text-center">
              <i className="fa fa-5x fa-tree p-4"></i>
              <h2 className="quicksand-font fw-800">Sustainability</h2>
            </div>
            <p className="lead abel-font">
              &nbsp; &nbsp; By directly buying unused clothes from your friends,
              you're helping fight fast-fashion, a destructive business model.
            </p>
          </div>
        </Col>
      </Row>
    );
  }
}
