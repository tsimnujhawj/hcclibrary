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
    return (
      <div>
        {items.map(item => (
  <div className="container result-container">
  <div className="list-group result-item">
  <a href="#" className="list-group-item list-group-item-action flex-column align-items-start active">
    <div className="d-flex w-100 justify-content-between">
      {/* <h5 className="mb-1">{props.searchQuery}</h5> */}
      <small>3 days ago</small>
    </div>
    {/* <div>{props.topicQuery} | {props.topicId}</div> */}
    <p className="mb-1" key={item.id}>{item.item_title}</p>
  </a>
    </div>
  </div>
  ))}
  </div>
    )
  }
};

export default Results;