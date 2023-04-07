import React from "react";
import ReactDOM from "react-dom";
import "./FooterSecTwo.scss";

function FooterSecTwo() {
    return (
        <div className="container footerTwo">
        <h3 className="footer-titel">Contact Us</h3>
        <div className="desc-divider mb-4"></div>
        <div className="mt-8">
            <h4 className="footer-subtitel">Head Office:</h4>
            <p>312, Airport Building, Port Saeed Street, Deira, Dubai, United Arab Emirates</p>
            <p className="mt-4">+971 (04) 2896 454</p>
            <p className="mt-4">sales@nanohealthsuite.com</p>
        </div>
        </div>
    );
}

export default FooterSecTwo;
