import React, { Component } from "react";
import "./main-header.css";
import { Col, Button, Row, Container } from "react-bootstrap";
import autoBind from "react-autobind";

export default class MainHeader extends Component {
  constructor(props) {
    super(props);

    autoBind(this);
  }
  scrollToBottom() {
    // In the css, the height of the main header is set to 85vh, and the header is the top.
    window.scroll({
      left: 0,
      top: window.innerHeight * 0.75,
      behavior: "smooth"
    });
  }

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
            <p className="m-0" onClick={this.scrollToBottom}>
              <i className="cta-button far p-3 fa-arrow-alt-circle-down"></i>
            </p>
          </Col>
        </Row>
      </Container>
    );
  }
}
