import React from "react";
import HccEmblem from "../../images/hcc_emblem.png"

const About = props => (
    <div>
        <div className="hero-content">
           <h1 id="hero-title">About Us</h1>
        </div>
        <br/>
        <div className="container">
        <img className="image-center" src={HccEmblem}/>
        <br/>
        <p>Hmong Cultural Center is the primary Hmong and Asian American organization in the Minneapolis-St. Paul area that provides community outreach activities related to multicultural education for the purposes of promoting positive race relations in the Twin Cities community.</p>
        <p>The Hmong Cultural Center is home to the <strong>Hmong Resource Center Library</strong>, which is perhaps the most comprehensive collection of Hmong-related literature, scholarly research, and multimedia materials in North America. The Hmong Cultural Center Museum offers many interactive displays that teach about the Hmong people, their history, their culture and their experience in the U.S. over the past 25 years. Please visit our center if you live in the Twin Cities or are planning on visiting Minneapolis-St. Paul.</p>
        <p>The Cultural Arts Education Program at Hmong Cultural Center offers classes for the Qeej instrument, Hmong dance, and Hmong marriage and funeral songs.</p>
        <p>Hmong Cultural Center offers multicultural education through the Hmong 101 Program which provides interactive presentations about Hmong culture, as well as a multimedia arts education website intended to teach about Hmong history, culture and folk arts.</p>
        <p>The long-running Adult Education Program at Hmong Cultural Center offers citizenship class, general ESL classes,  and occupational English classes and career advising.</p>
        </div>
    </div>
)

export default About;