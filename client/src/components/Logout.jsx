import React from "react";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";
import { logout } from "../redux/actions/actionCreators";

function Logout({ logout }) {
  logout();

  return (
    <div>
      <Redirect to="/" />
    </div>
  );
}

const mapDispatchToProps = dispatch => ({
  logout: () => dispatch(logout())
});

export default connect(null, mapDispatchToProps)(Logout);
