import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect
} from "react-router-dom";
import Login from "./components/Login";
import { Container } from "semantic-ui-react";
import { connect } from "react-redux";
import ProtectedRoute from "./services/protectedRoute";
import BubblePage from "./components/BubblePage";
import Navbar from "./components/Navbar";
import "./styles.scss";
import Logout from "./components/Logout";

function App({ error }) {
  return (
    <Container>
      <Router>
        <Navbar />
        {error && (
          <h3
            style={{
              color: "red",
              textAlign: "center",
              border: "1px solid red",
              padding: 8
            }}
          >
            {error}
          </h3>
        )}
        <div className="App">
          <Switch>
            <ProtectedRoute
              path="/bubbles-page/add-color"
              render={props => <BubblePage {...props} />}
            />
            <ProtectedRoute
              path="/bubbles-page/:id?"
              render={props => <BubblePage {...props} />}
            />
            <ProtectedRoute
              path="/bubbles-page"
              render={props => <BubblePage {...props} />}
            />
            <Route path="/logout" render={props => <Logout {...props} />} />
            <Route exact path="/" render={props => <Login {...props} />} />
            <Redirect to="/" />
          </Switch>
        </div>
      </Router>
    </Container>
  );
}

const mapStateToProps = state => ({
  error: state.error
});

export default connect(mapStateToProps)(App);
