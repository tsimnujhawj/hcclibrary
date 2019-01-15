import React, { Component } from "react";


class Results extends Component {
  constructor(props) {
    super(props);
    this.state = {
      items: [],
      isLoaded: false,
    }
  }

  componentDidMount() {
    fetch("/search")
      .then(res => res.json())
      .then(json => {
        this.setState({
          isLoaded: true,
          items: json,
        })
      })
  }
  
  render () {
    var { isLoaded, items } = this.state;
    if (!isLoaded) {
      return (
        <img className="loading-icon" src="https://upload.wikimedia.org/wikipedia/commons/b/b1/Loading_icon.gif"/>
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
              <small>3 days ago</small>
            </div>
            <p className="mb-1 author-name">{item.item_author}</p>
            <p className="mb-1">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis eu dapibus ex.</p>
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