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
  hiddenBackgroundBreakpoint = 200;

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
            backgroundColor: hidden ? "transparent" : this.backgroundColor
          }}
        >
          <h4 className="m-0 p-2 pl-3" style={{ color: "#f8f9fa" }}>
            Brand Name
          </h4>
          <Button size="sm" variant="outline-light" className="m-2 mr-3">
            Pre-Order
          </Button>
        </div>
      </div>
    );
  }
}
