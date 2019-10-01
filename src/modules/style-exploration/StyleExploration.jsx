import React, { Component } from "react";
import { Container, Col, Row, Image } from "react-bootstrap";
import "./style-exploration.css";

export default class StyleExploration extends Component {
  render() {
    return (
      <Container className="wide-row-container style-exploration-row">
        <Row className="flex-wrap-reverse">
          <Col className="style-exploration-text-col" xs={12} md={6}>
            <div>
              <h2 className="roboto-font fw-600 style-exploration-header">
                {" "}
                STYLE EXPLORATION{" "}
              </h2>
              <p>
                Explore your personal style by browsing the profiles of trending
                Style Icons on the system, and see how they incorporate certain
                trends or pieces into their outfits. Also look through brands
                and clothing recommended to you based on your currently uploaded
                wardrobe.
              </p>
              <p>
                Try on styles before you buy the pieces with our proprietary
                augmented reality technology that shows what you'd look like
                wearing a certain piece of clothing in real time. Now you'll
                know for sure that those clothes will look good on you before
                buying them online.
              </p>
            </div>
          </Col>
          <Col className="style-exploration-image-col" xs={12} md={6}>
            <Image
              className="style-exploration-image"
              src="/assets/img/style-exploration.png"
              fluid
            />
          </Col>
        </Row>
      </Container>
    );
  }
}
