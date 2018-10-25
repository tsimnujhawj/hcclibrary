import React, { Component } from "react";
import Background from '../../../src/images/DSCF7620_Vlai_Ly.jpg';

const sectionStyle = {
  width: "100%",
  height: "100vh",
  backgroundImage: `url(${Background})`
};

const Search = props => {
        return (
        <div>
            <div
            // style={sectionStyle}
            // className="landing-image"
            >
                <div className="hero-content">
                    <h1 id="hero-title">Hmong Cultural Center's Library Catalog - Search</h1>
                </div>

            <form className="form-container">
            <div className="container">
            <div className="row">
                <div className="col-md-6">
                    <div className="form-group">
                    <label htmlFor="searchQuery">Search</label>
                    <input type="text" className="form-control" placeholder="Search keywords" onChange={props.handleSearchQuery}/>
                    </div>
                </div>
                <div className="col-md-6">
                <div className="form-group">
                    <label htmlFor="queryTopic">Topic</label>
                    <select className="form-control" id="queryTopic" onChange={props.handleTopicQuery}>
                    <option value="">Select A Topic</option>
                    <option value="1">Linguistic and Hmong Romanize Writing System</option>
                    <option value="2">Health &amp; Medicine</option>
                    <option value="3">Education</option>
                    </select>
                </div>
                </div>
            </div>
            <button type="submit" className="btn btn-info" onClick={props.handleFormSubmit}>Submit</button>
            </div>
            </form>

            </div>
        </div>
        )
}

export default Search;