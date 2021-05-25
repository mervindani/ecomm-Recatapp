import React from "react";
import HomePage from "./page/homepage/homepage.component";
import { Route, Switch } from "react-router-dom";
import "./App.css";

const HatsPage = () => (
  <div>
    <h1>HATS page</h1>
  </div>
);

function App() {
  return (
    <div>
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/hats" component={HatsPage} />
      </Switch>
    </div>
  );
}

export default App;
