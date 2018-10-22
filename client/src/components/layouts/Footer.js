import React, { Component } from "react";

class Footer extends Component {
    render() {
        return (
        <div>
            <footer className="footer bg-dark text-white">
            Copyright &copy; {new Date().getFullYear()}
            </footer>
        </div>
        )
    }
}

export default Footer;