import React, { Component } from "react";

import Search from "./Search"

class Catalog extends Component {

    constructor(){
        super();
        this.state = {
          nonProfitName: "",
          nonProfitState: "",
          nonProfitCategory: "",
          pageSize: "",
          nonProfitRes: []
        }
    }

  render() {
    return (
      <div>       
        <Search
        
        />
      </div>
      
    );
  }
}

export default Catalog;
