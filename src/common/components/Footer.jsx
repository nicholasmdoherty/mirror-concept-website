import React, { Component } from "react";

export default class Footer extends Component {
  render() {
    return (
      <div className="main-footer">
        <p className="footer-text">
          {" "}
          Fictional concept website created by Nick Doherty
        </p>
        <a className="footer-text" href="http://nicholasmdoherty.com">
          Vist my personal website! nicholasmdoherty.com
        </a>
      </div>
    );
  }
}
