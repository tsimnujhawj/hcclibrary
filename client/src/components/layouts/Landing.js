import React, { Component } from "react";
import HomeLanding from "./HomeLanding";

class Landing extends Component {

    render() {
        return (
        <div>
            <div className="hero-content">
                    <h1 id="hero-title">Hmong Cultural Center's Library Catalog</h1>
            </div>
            <HomeLanding/>
        </div>
        )
    }
}

export default Landing;