
import React from "react";

import Login from "./Components/Login";
import UserDash from "./Components/Private/UserDashboard";
import Private from "./Utilities/PrivateRoute";
import Register from "./Components/Register";

import { BrowserRouter as Router, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="App">
        <header className="App-header">
          <h1>Plan A Potluck</h1>
          <Route exact path="/" component={Login} />
        </header>
        <Register />
        <div className="attendee">
          <Private path="/protected" component={UserDash} />
        {/* <Potluck /> */}
        </div>
      </div>
    </Router>
  );
}

export default App;
