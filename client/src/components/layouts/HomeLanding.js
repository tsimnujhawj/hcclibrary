import React, { Component } from "react";
import Background from '../../../src/images/DSCF8392_Vlai_Ly.jpg';
import { relative } from "path";

const sectionStyle = {
//   width: "100%",
//   height: "100vh",
  backgroundImage: `url(${Background})`
};

const HomeLanding = () => {
        return (
            <div style={sectionStyle} className="landing-image"></div>
        )
}

export default HomeLanding;