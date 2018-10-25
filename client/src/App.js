import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import './App.css';

// header, landing, and footer
import Navbar from "./components/layouts/Navbar";
import Landing from "./components/layouts/Landing";
import Footer from "./components/layouts/Footer";

// import Search from "./components/search/Search"
import Catalog from "./components/search/Catalog"

import About from "./components/about/About"
import Contact from "./components/contact/Contact"

class App extends Component {
  render() {
    return (
      
        <div>
          <div className="footer-container">
        <Router>
          
          <div>
          <Navbar/>
            <Route exact path="/" component={Landing}/>
            <Route exact path="/search" component={Catalog} />
            <Route exact path="/about" component={About} />
            <Route exact path="/contact" component={Contact} />
            </div>
        </Router>
        </div>
        <Footer/>
      </div>
    );
  }
}

export default App;
