import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Redirect,
  Switch
} from "react-router-dom";

import Login from "./components/Login";
import Home from "./components/Home";
import ProtectedRoute from "./services/protectedRoute";
import BubblePage from "./components/BubblePage";
import "./styles.scss";

function App() {
  return (
    <Router>
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
          <Route path="/login" render={props => <Login {...props} />} />
          {/* // <Route exact path="/" render={props => <Login {...props} />} /> */}
          <Route path="/" exact component={Home} />
          {/* 
          Build a PrivateRoute component that will 
          display BubblePage when you're authenticated 
        */}
        </Switch>
      </div>
    </Router>
  );
}

export default App;
