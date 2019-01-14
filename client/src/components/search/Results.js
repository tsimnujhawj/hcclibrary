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
    fetch("https://jsonplaceholder.typicode.com/users")
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
  <div className="container result-container">
  <div className="list-group result-item">
  <a href="#" className="list-group-item list-group-item-action flex-column align-items-start active">
    <div className="d-flex w-100 justify-content-between">
      {/* <h5 className="mb-1">{props.searchQuery}</h5> */}
      <small>3 days ago</small>
    </div>
    {/* <div>{props.topicQuery} | {props.topicId}</div> */}
    <p className="mb-1">Donec id elit non mi porta gravida at eget metus. Maecenas sed diam eget risus varius blandit.</p>
    <small>Donec id elit non mi porta.</small>
            {items.map(item => (
              <li key={item.id}>{item.name} | {item.email}</li>
            ))}
  </a>
    </div>
  </div>
    )
  }
};

export default Results;