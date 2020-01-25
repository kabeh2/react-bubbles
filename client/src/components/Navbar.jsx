import React, { Component } from "react";
import { connect } from "react-redux";
import { Menu } from "semantic-ui-react";
import { Link } from "react-router-dom";

class Navbar extends Component {
  state = { activeItem: "home" };

  handleItemClick = (e, { name }) => this.setState({ activeItem: name });

  render() {
    const { activeItem } = this.state;
    const { loggedIn } = this.props;

    return (
      <Menu secondary>
        {loggedIn ? (
          <Menu.Item
            as={Link}
            to="/bubbles-page"
            name="bubbles"
            active
            onClick={this.handleItemClick}
          />
        ) : (
          <Menu.Item
            as={Link}
            to="/"
            name="home"
            active
            onClick={this.handleItemClick}
          />
        )}

        {loggedIn && (
          <Menu.Menu position="right">
            <Menu.Item
              as={Link}
              to="/logout"
              name="logout"
              active={activeItem === "logout"}
              onClick={this.handleItemClick}
            />
          </Menu.Menu>
        )}
      </Menu>
    );
  }
}

export const mapStateToProps = state => ({
  loggedIn: state.loggedIn
});

export default connect(mapStateToProps)(Navbar);
