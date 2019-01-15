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
          item: "",
          searched: false
    }
    this.handleSearchQuery = this.handleSearchQuery.bind(this);
    this.handleTopicQuery = this.handleTopicQuery.bind(this);
    this.handleFormSubmit = this.handleFormSubmit.bind(this);
  }

    handleSearchQuery = (event) => {
      this.setState({ searchQuery: event.target.value });
      console.log(this.state.searchQuery)
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
        // console.log(this.state.searchQuery, this.state.topicQuery)
        console.log("Performing...", SearchDatabase)
        // TODO: call SearchDatabase function from dbsearch.js
        // SearchDatabase.SearchDatabase(this.state.searched);
        // fetch("/search/q", {
        //   method: "POST",
        //   headers: {
        //     "Accept": "application/json",
        //     "Content-Type": "application/json",
        //   },
        //   body: JSON.stringify({
        //     firstParam: "vietnam"
        //   })
        // })
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
