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
          <div className="Site">
        <Router>
          
          <div className="Site-content">
          <Navbar/>
            <Route path="/" component={Landing}/>
            <Route path="/search" component={Catalog} />
            <Route path="/about" component={About} />
            <Route path="/contact" component={Contact} />
            </div>
        </Router>

        

        </div>
        <Footer/>
      </div>
    );
  }
}

export default App;
