import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import './App.css';

// header, landing, and footer
import Navbar from "./components/layouts/Navbar";
import Landing from "./components/layouts/Landing";
import Footer from "./components/layouts/Footer";

// import Search from "./components/search/Search"
import Catalog from "./components/search/Catalog"

class App extends Component {
  render() {
    return (
      <div>
        <Router>
          <Switch>
          <Navbar/>
            <Route exact path="/" component={Landing}/>
            <Route exact path="/search" component={Catalog} />
          </Switch>
        </Router>
        <Landing/>
        <Footer/>
      </div>
    );
  }
}

export default App;
