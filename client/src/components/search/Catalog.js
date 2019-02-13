import React, { Component } from "react";
import Category from "../../utils/api/category"
import Search from "./Search"
import Results from "./Results"

class Catalog extends Component {

    constructor(props){
        super(props);
        this.state = {
          searchQuery: "",
          topicQuery: "",
          topicId: "",
          isLoaded: false,
          items: []
    }
    this.handleSearchQuery = this.handleSearchQuery.bind(this);
    this.handleTopicQuery = this.handleTopicQuery.bind(this);
    this.handleFormSubmit = this.handleFormSubmit.bind(this);
    this.clearResults = this.clearResults.bind(this);
  }

    handleSearchQuery = (event) => {
      this.setState({ searchQuery: event.target.value });
    }
    
    handleTopicQuery = (event) => {
      this.setState({
        topicId: event.target.value,
        topicQuery: Category[event.target.value].category
      });
    }
    
      // When the search form submits, perform an api search with user input
      handleFormSubmit = (event) => {
        event.preventDefault();
        // reset searched and clears form/results upon submit
        this.setState({ searched: false });
        const data = this.state;
        // do i make the api call here?
            fetch("/search", {
              method: "POST",
              headers: {
                "Accept": "application/json",
                "Content-Type": "application/json",
              },
              body: JSON.stringify({
                firstParam: data.searchQuery,
                topicParam: data.topicQuery
              })
            })
            .then(res => res.json())
            .then(response => {
              this.setState({
                items: response,
                isLoaded: true,
                searched: true
              })
            })
      }

      clearResults = (event) => {
        // event.preventDefault();
        this.setState({
          searchQuery: "",
          topicQuery: "",
          topicId: "",
          isLoaded: false,
          items: []
        });
      }


    renderResults = () => {
      return(
        <div>
        <Results
          searchQuery={this.state.searchQuery}
          topicQuery={this.state.topicQuery}
          topicId={this.state.topicId}
          items={this.state.items}
          isLoaded={this.state.isLoaded}
        />
        </div>
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
        {/* If api to db is success, render Results component */}
        {this.state.searched ? this.renderResults() : ""}
      </div>
      
    );
  }
}

export default Catalog;
