import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class Default extends Component {
  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-10 mx-auto text-center text-title text-uppercase pt-5">
            <h3>404</h3>
            <h3>error</h3>
            <h3>Page Not Found!</h3>
            <h5>
              the requested url :{" "}
              <span className="text-danger">
                {this.props.location.pathname}
              </span>
              was not found
            </h5>
            <Link to="/">
              <span>check here ...</span>
            </Link>
          </div>
        </div>
      </div>
    );
  }
}
