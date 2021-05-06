import "./App.css";
import Home from "./Components/Home";
import Navigation from "./Components/Navigation";
import Technology from "./Components/Technology";
import Footer from "./Components/Footer";
import Disease from "./Components/Disease";
import Data from "./Components/Data";
import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

function App() {
  return (
    <div>
      <Navigation />
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/technologies" component={Technology} />
          <Route exact path="/data" component={Data} />
          <Route exact path="/disease" component={Disease} />
        </Switch>
      </BrowserRouter>
      <Footer />
    </div>
  );
}

export default App;
