import React from "react";
import HomePage from "./page/homepage/homepage.component";
import ShopPage from "./page/shopPage/shop.component";
import { Route, Switch } from "react-router-dom";
import Header from "./components/header/header.component";
import "./App.css";

function App() {
  return (
    <div>
      <Header />
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/shop" component={ShopPage} />
      </Switch>
    </div>
  );
}

export default App;
