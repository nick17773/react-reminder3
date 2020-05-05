import React, { Component } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";


import Home from "./components/Home";
import About from "./components/About";
import Contact from "./components/Contact";
import Error from "./components/Error";
import Navigation from "./components/Navigation";
import Reminder from "./components/Reminder";



class App extends Component {
  render() {
    
    return (
      <BrowserRouter>
        <div>
          <br />
          <Navigation />
          <Switch>
            <Route path="/" component={Home} exact />
            <Route path="/about" component={About} />
            <Route path="/reminders" component={Reminder} />
            <Route path="/documentation" component={Contact} />
            
            <Route component={Error} />
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
