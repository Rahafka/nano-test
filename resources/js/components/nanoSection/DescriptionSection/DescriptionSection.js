import React from "react";
import ReactDOM from "react-dom";
import "./DescriptionSection.scss"

function DescriptionSection(props) {
    return (
        <div className="desc-main flex flex-col items-center justify-center">
            <div className="container">
                    <div className="desc-title">{props.title}</div>
                <h3 className="desc-h3">{props.desheader}</h3>
                <div className="desc-divider mb-4"></div>
                <p className="desc-subtitle">
               {props.description}
                </p>
            </div>
        </div>
    );
}

export default DescriptionSection;
