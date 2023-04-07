import React from "react";
import ReactDOM from "react-dom";
import "./FooterSecThree.scss";

function FooterSecThree() {
    return (
        <div className="container footerThree">
            <h3 className="footer-titel">Quick Links</h3>
            <div className="desc-divider mb-4"></div>
            <div className="mt-8">
               <ul className="pl-0">
                <li className="footer-link mt-6"><a>About NANO Health Suite</a></li>
                <li className="footer-link mt-6"><a>Terms & Conditions</a></li>
                <li className="footer-link mt-6"><a>Privacy Policy</a></li>
                <li className="footer-link mt-6"><a>Support</a></li>
               </ul>
            </div>
        </div>
    );
}

export default FooterSecThree;
