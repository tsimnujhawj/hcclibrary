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
        <div style={sectionStyle} className="landing-image">

          <div>
            <div className="news-container">
            <div className="container search-intro">
            <h2 className="text-center">Introduction</h2>
            {/* <h6 className="text-center">02/06/2019</h6> */}
            <div className="text-center">
                <p>Welcome to the Hmong Resource Center Library!</p><p>We have the most comprehensive collection of Hmong-related literature, scholarly research, and multimedia materials in North America.
                Hmong Cultural Center is the primairy Hmong and Asian-American organization in Minneapolis-Saint Paul, Minnesota that provides community outreach activities related to multicultural education for the purposes of promoting positive race relations in the Twin Cities community. Without the generous donations and grants from our donars and folks like you, we could not exist as a center for the community.</p>
                <p>Please come <a href="/contact">take a tour</a> of our exhibit and consider <a href="https://www.givemn.org/organization/Hmong-Cultural-Center" target="_blank">donating</a>.</p>
                <p>Thank you for visiting!</p>
            </div>
            </div>
            </div>

            <div className="news-container">
            <div className="container search-intro">
            <h2 className="text-center">Information regarding the library search</h2>
            <h6 className="text-center">
            <p className="text-center">
              Please be aware that the catalog is in development.<br/>All features may not be available.
            </p>
            </h6>
            </div>
            </div>
            
          </div>
          

        </div>
        )
}

export default HomeLanding;