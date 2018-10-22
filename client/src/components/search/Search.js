import React, { Component } from "react";
import Background from '../../../src/images/DSCF7620_Vlai_Ly.jpg';

const sectionStyle = {
  width: "100%",
  height: "100vh",
  backgroundImage: `url(${Background})`
};

class Search extends Component {
    render() {
        return (
        <div>
            <div style={sectionStyle} className="landing-image">
                <div className="hero-content">
                    <h1 id="hero-title">Hmong Cultural Center's Library Catalog - SEARCH</h1>
                </div>
            </div>
        </div>
        )
    }
}

export default Search;