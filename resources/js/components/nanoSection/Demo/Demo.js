import React from "react";
import ReactDOM from "react-dom";
import "./Demo.scss";

function Demo() {
    return (
        <div className="demo-main flex flex-col items-center justify-center">
            <div className="container">
            <div className="demo-title">
                100% Automation in Healthcare <br/> Operations and Services Such as
                Claims,  <br/> Approvals and More...
            </div>
            <p className="demo-subtitle">
                We help deliver better solutions for payers, hospitals, doctors,
                pharmacies, health plans, <br/> governments, employers and the
                millions of lives they touch.
            </p>
            <button className="demo-btn">REQUEST A DEMO</button>
            </div>
        </div>
    );
}

export default Demo;
