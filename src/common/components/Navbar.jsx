import React, { Component } from "react";
import { Button } from "react-bootstrap";
import autoBind from "react-autobind";
import "./common-components.css";

export default class Navbar extends Component {
  constructor(props) {
    super(props);

    this.state = {
      hidden: window.scrollY <= this.hiddenBackgroundBreakpoint
    };

    autoBind(this);
  }

  // ----------------------------------------------------------------------------------------------
  // Variables
  // ----------------------------------------------------------------------------------------------

  // The breakpoint for hiding / showing the navbar backgruond
  hiddenBackgroundBreakpoint = 50;

  // The color code for the background of the navbar
  backgroundColor = "#333";

  // ----------------------------------------------------------------------------------------------
  // Functions
  // ----------------------------------------------------------------------------------------------

  componentDidMount() {
    /**
     * Add event listener on component mount that updates the "hidden" flag in
     * the state when a certain scroll level is hit.
     */
    window.addEventListener("scroll", () => {
      if (window.scrollY > this.hiddenBackgroundBreakpoint) {
        this.setState({ hidden: false });
      } else {
        this.setState({ hidden: true });
      }
    });
  }

  render() {
    let { hidden } = this.state;

    return (
      <div>
        <div
          className="main-navbar"
          style={{
            backgroundColor: hidden ? "transparent" : this.backgroundColor,
            boxShadow: hidden ? "none" : "0px 3px 5px 1px #222"
          }}
        >
          <h4
            className="m-0 pl-3 navbar-title-text"
            style={{ color: "#f8f9fa" }}
          >
            SOCIAL MIRRORS
          </h4>
          <Button size="sm" variant="light" className="m-2 mr-3 navbar-button">
            Join Waitlist
          </Button>
        </div>
      </div>
    );
  }
}
