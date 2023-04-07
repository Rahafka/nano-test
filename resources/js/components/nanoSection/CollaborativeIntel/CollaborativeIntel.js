import React from "react";
import ReactDOM from "react-dom";
import "./CollaborativeIntel.scss";

function CollaborativeIntel() {
    return (
        <div className="collaborativeIntel-main container">
            <div className="flex flex-col xl:flex-row gap-8">
                <div className="flex flex-col items-center justify-center w-full xl:w-5/12">
                    <img src="https://nanohealthsuite.com/_next/image?url=https%3A%2F%2Fbackend.nanohealthsuite.com%2Fimg%2Fwebp%2FUntitled-1650359218.webp&w=1200&q=75" />
                </div>
                <div className="flex flex-col items-center justify-center xl:items-start w-full xl:w-7/12 gap-y-4">
                    <h4 className="collab-titel"> Collaborative Intelligence for Better Healthcare</h4>
                    <p className="collab-des">Digital Healthcare Solutions for</p>
                    <h5 className="collab-subtitel">Government and Healthcare Regulators</h5>
                    <div className="desc-divider mb-4"></div>
                    <p className="collab-p">
                        Supporting government firms to facilitate critical and
                        essential health services. We deliver mission-critical
                        business administration solutions for government-funded
                        healthcare plans that minimize expenses, streamline
                        operations, enhance program support, and develop
                        compliance while implementing automatic, easy-to-use
                        tools and gratifying outcomes for the people and
                        communities they serve.
                    </p>
                </div>
            </div>
        </div>
    );
}

export default CollaborativeIntel;
