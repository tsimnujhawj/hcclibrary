import React, { Component } from "react";

import Search from "./Search"
import Results from "./Results"

class Catalog extends Component {

    constructor(){
        super();
        this.state = {
          searchQuery: "",
          topicQuery: ""
    }
  }

    handleSearchQuery = (event) => {
      this.setState({ searchQuery: event.target.value });
    }
    
    handleTopicQuery = (event) => {
      this.setState({ topicQuery: event.target.value });
    }
    
      // When the search form submits, perform an api search with user input
      handleFormSubmit = (event) => {
        event.preventDefault();
        console.log(this.state.searchQuery, this.state.topicQuery)
      }


    renderResults = () => {
      return(
        <Results
          searchQuery={this.state.searchQuery}
          topicQuery={this.state.topicQuery}
        />
      )
    }
    
  render() {
    return (
      <div>       
        <Search
        handleSearchQuery={this.handleSearchQuery}
        handleTopicQuery={this.handleTopicQuery}
        handleFormSubmit={this.handleFormSubmit}
        />

        {this.renderResults()}
      </div>
      
    );
  }
}

export default Catalog;
