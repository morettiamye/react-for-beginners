import React from "react";
import PropTypes from "prop-types";

const LogIn = props => (
  <nav className="login">
    <h2>Inventory Login</h2>
    <p>Sign in to manage your store's inventory.</p>
    <button className="github" onClick={() => props.authenticate("Github")}>
      Log In With GitHub
    </button>
  </nav>
);

LogIn.propTypes = {
  authenticate: PropTypes.func.isRequired
};

export default LogIn;