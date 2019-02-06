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
                    <h1 id="hero-title">Search</h1>
                </div>
                <br/>
            <div className="container search-intro">
                <p>We don't really know where this goes - and I'm not sure we really care. Now let's put some happy little clouds in here. Poor old tree. It just happens - whether or not you worried about it or tried to plan it. You better get your coat out, this is going to be a cold painting. Son of a gun.</p>
                <p>But they're very easily killed. Clouds are delicate. Just make little strokes like that. Every single thing in the world has its own personality - and it is up to you to make friends with the little rascals. We don't want to set these clouds on fire. You gotta think like a tree. Clouds are free. They just float around the sky all day and have fun.</p>
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
            <button type="submit" className="btn clear-btn btn-danger" onClick={this.props.clearResults}>Reset</button>
            </div>
            </form>

            </div>
        </div>
        )}
}

export default Search;