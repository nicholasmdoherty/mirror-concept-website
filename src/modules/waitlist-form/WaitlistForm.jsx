import React, { Component } from "react";
import { Container, Row, Form, Col, Button } from "react-bootstrap";
import "./waitlist-form.css";

export default class WaitlistForm extends Component {
  render() {
    return (
      <Container className="pt-5 pb-5" id="waitlist-form">
        <h1 className="roboto-font fw-700 waitlist-form-title">
          {" "}
          SOCIALMIRROR WAITLIST FORM
        </h1>
        <hr />
        <p className="lead">
          Sign up for our waitlist to be the first to hear about SocialMirror
          updates and when you can get your hands on one.
        </p>

        <Form>
          <Form.Row>
            <Col xs={12} sm={6} className="p-2">
              <Form.Label>First Name</Form.Label>
              <Form.Control placeholder="First name" />
            </Col>
            <Col xs={12} sm={6} className="p-2">
              <Form.Label> Last Name </Form.Label>
              <Form.Control placeholder="Last name" />
            </Col>
          </Form.Row>
          <Form.Row>
            <Col xs={12} className="p-2">
              <Form.Label>Email</Form.Label>
              <Form.Control placeholder="Email" />
            </Col>
          </Form.Row>
          <Form.Row>
            <Col>
              <Button
                className="mt-3 ml-1 waitlist-form-button"
                variant="outline-light"
              >
                Submit
              </Button>
            </Col>
          </Form.Row>
        </Form>
      </Container>
    );
  }
}
