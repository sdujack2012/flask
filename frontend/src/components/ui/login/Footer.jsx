import React from "react";
import PropTypes from "prop-types";

export class Footer extends React.PureComponent {
  static propTypes = {};

  render() {
    return (
      <React.Fragment>
        <footer className="footer">
          <div className="container">
            <p className="float-right">
              <a href="#">Back to top</a>
            </p>
            <p>
              Album example is &copy; Bootstrap, but please download and
              customize it for yourself!
            </p>
            <p>
              New to Bootstrap? <a href="../../">Visit the homepage</a> or read
              our <a href="../../getting-started/">getting started guide</a>.
            </p>
          </div>
        </footer>
      </React.Fragment>
    );
  }
}

Footer.propTypes = {};
