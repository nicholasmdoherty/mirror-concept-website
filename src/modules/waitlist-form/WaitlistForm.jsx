import React, { Component } from "react";
// @ts-ignore
import { Container, Row, Form, Col, Button } from "react-bootstrap";
import Swal from "sweetalert2";
import "./waitlist-form.css";

export default class WaitlistForm extends Component {
  handleSubmitButton() {
    Swal.fire({
      title: "Added to waitlist",
      type: "success"
    });

    // Ignore the warning here, we want to directly reset the values to empty.
    // @ts-ignore
    document.getElementById("firstname-form").value = "";
    // @ts-ignore
    document.getElementById("lastname-form").value = "";
    // @ts-ignore
    document.getElementById("email-form").value = "";
  }

  render() {
    return (
      <Container className="pt-5 pb-5" id="waitlist-form">
        <h1 className="roboto-font fw-700 waitlist-form-title">
          {" "}
          SOCIALMIRROR WAITLIST
        </h1>
        <hr />
        <p className="lead">
          Sign up for Reflashion Inc's email list for the latest product updates
          and the latest news on when you can get your hands on a SocialMirror.
          You'll be the first to hear about it.
        </p>

        <Form>
          <Form.Row>
            <Col xs={12} sm={6} className="p-2">
              <Form.Label>First Name</Form.Label>
              <Form.Control id="firstname-form" placeholder="First name" />
            </Col>
            <Col xs={12} sm={6} className="p-2">
              <Form.Label> Last Name </Form.Label>
              <Form.Control id="lastname-form" placeholder="Last name" />
            </Col>
          </Form.Row>
          <Form.Row>
            <Col xs={12} className="p-2">
              <Form.Label>Email</Form.Label>
              <Form.Control id="email-form" placeholder="Email" />
              <p className="pt-1 pb-0">
                &nbsp; We'll never send you spam, just great updates.
              </p>
            </Col>
          </Form.Row>
          <Form.Row>
            <Col>
              <Button
                className="mt-3 ml-1 waitlist-form-button"
                variant="outline-light"
                onClick={this.handleSubmitButton}
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
