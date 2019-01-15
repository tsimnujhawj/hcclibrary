import React, { Component } from "react";
import LoadingIcon from "../../../src/images/loading_icon.gif";
import NoResults from "../../../src/images/no_results.gif";


class Results extends Component {
  constructor(props) {
    super(props);
    this.state = {
      items: [],
      isLoaded: false,
      stuff: "education",
      searchParamter: this.props.searchQuery
    }
  }

  componentDidMount() {
    fetch("/search/q", {
      method: "POST",
      headers: {
        "Accept": "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        firstParam: this.state.searchParamter
      })
    })
    .then(res => res.json())
    .then(response => {
      this.setState({
        items: response,
        isLoaded: true,
      })
    })
  }

  // componentWillUnmount() {
  //   this.setState({
  //     isLoaded: false,
  //     searchParamter: "",
  //     items: []
  //   })
  // }


  // TODO: migrate post request from Catalog.js to Results.js component
  // TODO: display all specific requests

  render () {
    var { isLoaded, items } = this.state;
    if (!isLoaded) {
      return (
        <img className="loading-icon" src={LoadingIcon}/>
      )
    } else if (items <= 0) {
      return (
        <div>
          <h2 className="no-results">No Results</h2>
          {/* <img className="loading-icon" src={NoResults}/> */}
        </div>
      )
    } else {
    return (
      <div>
          <div className="container result-container">
          {items.map(item => (
          <div className="list-group result-item">
          <a href="#" className="list-group-item list-group-item-action flex-column align-items-start active">
            <div className="d-flex w-100 justify-content-between">
              <h5 className="mb-1" key={item.id}>{item.item_title}</h5>
              <small className="reference">Ref#: {item.id}</small>
            </div>
            <p className="mb-1 author-name">{item.item_author}</p>
            <p className="mb-1">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis eu dapibus ex.{this.props.searchQuery}</p>
          </a>
            </div>
            ))}
          </div>

      </div>
    )
  }
}
};

export default Results;