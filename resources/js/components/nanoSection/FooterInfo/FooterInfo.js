import React from "react";
import ReactDOM from "react-dom";
import "./FooterInfo.scss";
import FooterSecOne from "../FooterSecOne/FooterSecOne";
import FooterSecTwo from "../FooterSecTwo/FooterSecTwo";
import FooterSecThree from "../FooterSecThree/FooterSecThree";

function FooterInfo() {
    return (
        <div className="footerInfo-main flex flex-col items-center justify-center">
            <div className="flex flex-col container xl:flex-row xl:justify-between xl:items-start">
                <div className="flex flex-col items-center xl:items-start w-full xl:w-5/12 flex-shrink pr-0 xl:pr-2">
                    <FooterSecOne />
                </div>
                <div className="flex flex-col items-center xl:items-start w-full xl:w-2/12 flex-shrink mt-8 xl:mt-0">
                    <FooterSecTwo />
                </div>
                <div className="flex flex-col items-center xl:items-start w-full xl:w-2/12 flex-shrink mt-8 xl:mt-0">
                    <FooterSecThree />
                </div>

            </div>
            <div className="footerInfo-last container flex  justify-center items-center mt-8">
            This site is protected by reCAPTCHA and the Google
            <a className="footer-span">Privacy Policy</a>
            and <a className="footer-span"> Terms of Service</a> apply.
        </div>
        </div>
    );
}

export default FooterInfo;
