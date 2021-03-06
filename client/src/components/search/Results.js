import React, { Component } from "react";
import LoadingIcon from "../../../src/images/loading_icon.gif";
import NoResults from "../../../src/images/no_results.gif";


class Results extends Component {
  constructor(props) {
    super(props);
    this.state = {
      items: this.props.items,
      isLoaded: this.props.isLoaded,
    }
  }

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
          <small>Results found: {items.length}</small>
          {items.map(item => (
          <div className="list-group result-item">
          <a className="list-group-item list-group-item-action flex-column align-items-start active result-item">
            <div className="d-flex w-100 justify-content-between">
              <h5 className="mb-1" key={item.id}>{item.item_title}</h5>
              <small className="reference">{item.item_topic} | Ref#: {item.id} | Copies: {item.item_quantity}</small>
            </div>
            <p className="mb-1 author-name">{item.item_author}</p>
            {/* <p className="mb-1">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis eu dapibus ex.</p> */}
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