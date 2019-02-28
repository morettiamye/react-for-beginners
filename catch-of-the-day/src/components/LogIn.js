import React from "react";
import PropTypes from "prop-types";

const LogIn = props => (
    <React.Fragment>
  <nav className="login">
    <h2>Inventory Login</h2>
    <p>Sign in to manage your stores inventory.</p>
    <button className="github" onClick={() => props.authenticate("Github")}>
      Log In With GitHub
    </button>
  </nav>
  </React.Fragment>
);

LogIn.propTypes = {
  authenticate: PropTypes.func.isRequired
};

export default LogIn;