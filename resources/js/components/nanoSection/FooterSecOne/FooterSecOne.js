import React from "react";
import ReactDOM from "react-dom";
import "./FooterSecOne.scss";
import SocialSec from "../SocialSec/SocialSec"

function FooterSecOne() {
    return (
        <div className="container">
            <a
                href="https://nanohealthsuite.com/"
                className="logo w-28 lg:w-40"
            >
                <img
                    // src={logo}
                    src="https://backend.nanohealthsuite.com/img/logo-1637913354.svg"
                    alt="Nano-Health Logo"
                />
            </a>
            <p className="mt-8">
                An autonomous global healthcare technology corporation that
                intensely converges on developing data-driven analytics,
                accelerates innovation and advances healthcare transformation.
            </p>
            <SocialSec/>
        </div>
    );
}

export default FooterSecOne;
