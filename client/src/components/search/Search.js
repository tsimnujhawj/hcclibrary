import React, { Component } from "react";
import Category from "../../utils/api/category"
import CategorySelect from "./CategorySelect"

class Search extends Component {

    renderCategory = () => {
        return Category.map(el => (
          <CategorySelect
            id={el.id}
            category={el.category}
            keyword={el.keyword}
          />
        ));
      }

        render() {
        return (
        <div>
            <div>
                <div className="hero-content">
                    <h1 id="hero-title">Hmong Cultural Center's Library Catalog - Search</h1>
                </div>

            <form className="form-container">
            <div className="container">
            <div className="row">
                <div className="col-md-6">
                    <div className="form-group">
                    <label htmlFor="searchQuery">Search</label>
                    <input type="text" className="form-control" placeholder="Search keywords" onChange={this.props.handleSearchQuery}/>
                    </div>
                </div>
                <div className="col-md-6">
                <div className="form-group">
                    <label htmlFor="queryTopic">Topic</label>
                    <select className="form-control" id="queryTopic" onChange={this.props.handleTopicQuery}>
                    <option value="" name="select-a-topic">Select A Topic</option>
                    {this.renderCategory()}
                    </select>
                </div>
                </div>
            </div>
            <button type="submit" className="btn btn-info" onClick={this.props.handleFormSubmit}>Submit</button>
            </div>
            </form>

            </div>
        </div>
        )}
}

export default Search;