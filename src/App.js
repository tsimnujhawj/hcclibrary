import React, { Component } from 'react';
import './App.css';

// header, landing, and footer
import Header from "./components/layouts/Header";
import Landing from "./components/layouts/Landing";
import Footer from "./components/layouts/Footer";

class App extends Component {
  render() {
    return (
      <div>
        <Header/>
        <Landing/>
        <Footer/>
      </div>
    );
  }
}

export default App;
