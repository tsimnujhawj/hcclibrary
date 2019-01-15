import React, { Component } from "react";
import Category from "../../utils/api/category"
import SearchDatabase from "../../utils/api/dbsearch"
import Search from "./Search"
import Results from "./Results"

class Catalog extends Component {

    constructor(props){
        super(props);
        this.state = {
          searchQuery: "",
          topicQuery: "",
          topicId: "",
          item: "",
    }
    this.handleSearchQuery = this.handleSearchQuery.bind(this);
    this.handleTopicQuery = this.handleTopicQuery.bind(this);
    this.handleFormSubmit = this.handleFormSubmit.bind(this);
    this.clearResults = this.clearResults.bind(this);
  }

    handleSearchQuery = (event) => {
      this.setState({ searchQuery: event.target.value });
      // do i make the api call here?
    }
    
    handleTopicQuery = (event) => {
      this.setState({
        topicId: event.target.value,
        topicQuery: Category[event.target.value].category
      });
      let idPosition = this.state.topicId;
      let categoryName = this.state.topicQuery
      console.log("Category:", categoryName, idPosition, "\n", Category[event.target.value]);
    }
    
      // When the search form submits, perform an api search with user input
      handleFormSubmit = (event) => {
        event.preventDefault();
        this.setState({ searched: true });
      }

      clearResults = (event) => {
        event.preventDefault();
        this.setState({
          searchQuery: "",
          topicQuery: "",
          topicId: "",
          item: "",
        });
      }


    renderResults = () => {
      return(
        <Results
          searchQuery={this.state.searchQuery}
          topicQuery={this.state.topicQuery}
          topicId={this.state.topicId}
          item={this.state.item}
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
