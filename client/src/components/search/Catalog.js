import React, { Component } from "react";
import Category from "../../utils/api/category"
import SearchDatabase from "../../utils/api/dbsearch"
import Search from "./Search"
import Results from "./Results"

class Catalog extends Component {

    constructor(){
        super();
        this.state = {
          searchQuery: "",
          topicQuery: "",
          topicId: "",
          searched: false
    }
  }

    handleSearchQuery = (event) => {
      this.setState({ searchQuery: event.target.value });
      console.log(this.state.searchQuery)
      // do i make the api call here?
    }
    
    handleTopicQuery = (event) => {
      this.setState({
        topicId: event.target.value,
        topicQuery: event.target.name
      });
      const idPosition = this.state.topicId;
      const categoryName = this.state.topicQuery
      console.log(this.state.topicId, Category[idPosition], categoryName)
    }
    
      // When the search form submits, perform an api search with user input
      handleFormSubmit = (event) => {
        event.preventDefault();
        this.setState({ searched: true });
        // console.log(this.state.searchQuery, this.state.topicQuery)
        console.log(SearchDatabase)
      }


    renderResults = () => {
      return(
        <Results
          searchQuery={this.state.searchQuery}
          topicQuery={this.state.topicQuery}
          topicId={this.state.topicId}
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

        {this.state.searched ? this.renderResults() : ""}
      </div>
      
    );
  }
}

export default Catalog;
