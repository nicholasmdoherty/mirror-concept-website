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
                When plugged in, the SocialMirror is always connected to the
                SocialMirror network and the features that come with it. Your
                profile and saved outfits will always be visible to friends, who
                can share your style or use your as inspiration. If you decide
                to make your profile public, you may show up as a trending Style
                Icon when recieving a lot of attention on an outfit.
              </p>
              <p>
                Want to get dressed and ready with your friends but need to be
                at home? You can also "drop-in" on your friends with real-time
                audio or video calling through your SocialMirror.
              </p>
            </div>
          </Col>
          <Col className="always-on-image-col" xs={12} md={6}>
            <Image
              className="always-on-image"
              src="/assets/img/always-on.png"
              fluid
            />
          </Col>
        </Row>
      </Container>
    );
  }
}
