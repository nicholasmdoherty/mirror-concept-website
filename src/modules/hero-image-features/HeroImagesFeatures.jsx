import React, { Component } from "react";
import HeroImage from "./subcomponents/HeroImage";
import { Container } from "react-bootstrap";
import Features from "./subcomponents/Features";

export default class HeroImagesFeatures extends Component {
  render() {
    return (
      <Container>
        <HeroImage />
        <Features />
      </Container>
    );
  }
}
