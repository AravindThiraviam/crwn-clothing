import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";
import Header from "./component/header/header.component";
import HomePage from "./pages/homepage.component";
import ShopPage from "./pages/shop/shop.component";
import "./App.css";

function App() {
  return (
    <div>
      <Header />
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route exact path="/shop" component={ShopPage} />
      </Switch>
    </div>
  );
}

export default App;
