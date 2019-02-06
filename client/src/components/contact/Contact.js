import React from "react";

let style = {
    border: "0px",
    // minWidth: "300px",
    // minHeight: "225px",
    width: "100%",
    height: "450px"
}

const Contact = props => (
    <div>
        <div className="hero-content">
           <h1 id="hero-title">Contact Us</h1>
        </div>
        <br/>
        <div className="container form-container">
            <div className="row">
            <div className="col-6">
            <h5>Hmong Cultural Center</h5>
                    <p>375 University Avenue, Suite 204
                    <br/>    
                    Saint Paul, MN 55103
                    <br/>
                    Phone: (651) 917-9937
                    <br/>
                    Fax: (651) 917-9978
                    <br/><br/>
                    Executive Director: Txongpao Lee
                    <br/>
                    E-Mail: txong@hmongcc.org</p>
            </div>
            <div className="col-md-6 col-sm-12">
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2823.394245951151!2d-93.11794628440367!3d44.95598087909832!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x87f62aa05af00001%3A0xd24f8f35bc5622d7!2s375+University+Ave+W%2C+St+Paul%2C+MN+55103!5e0!3m2!1sen!2sus!4v1549401573538" style={style}></iframe>
            </div>
            </div>
        </div>
    </div>
)

export default Contact;