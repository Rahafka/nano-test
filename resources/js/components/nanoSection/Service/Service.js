import React from "react";
import ReactDOM from "react-dom";
import DescriptionSection from "../DescriptionSection/DescriptionSection";
import "./Service.scss";
import Card from "../Card/Card";

function Service() {
    const serv_img1 ="https://nanohealthsuite.com/_next/image?url=https%3A%2F%2Fbackend.nanohealthsuite.com%2Fimg%2Fproducts%2F1672900473324-nano-pbm.png&w=3840&q=75"
    const serv_img2 ="https://nanohealthsuite.com/_next/image?url=https%3A%2F%2Fbackend.nanohealthsuite.com%2Fimg%2Fproducts%2F1672841156773-nano-drg.png&w=3840&q=75"
    const serv_img3 ="https://nanohealthsuite.com/_next/image?url=https%3A%2F%2Fbackend.nanohealthsuite.com%2Fimg%2Fproducts%2F1673248667591-nano-emr-at-3x.png&w=3840&q=75"
    const serv_img4 ="https://nanohealthsuite.com/_next/image?url=https%3A%2F%2Fbackend.nanohealthsuite.com%2Fimg%2Fproducts%2F1672915451825-nano-iddk-at-2x.png&w=640&q=75"
    const serv_img5 ="https://nanohealthsuite.com/_next/image?url=https%3A%2F%2Fbackend.nanohealthsuite.com%2Fimg%2Fproducts%2F1672928062676-nano-med.png&w=3840&q=75"

    return (
        <div className="service-main flex flex-col items-center justify-center">
            <div className="container">
                <DescriptionSection
                    title="DIGITAL HEALTHCARE SOLUTIONS FOR"
                    desheader="Healthcare Service Providers"
                    description=" Remodeling the patient experience while encouraging efficiencies. Unifies integration and data control into a unique
                    platform to connect data from diverse operations, applications and data sources across the entire care network."
                />
                 <div className="card-Container my-5">
                    <Card image={serv_img1}  iconDes="Pharmacy Benefits Management"/>
                    <Card image={serv_img2}  iconDes="Diagnosis Related Group Assignment"/>
                    <Card image={serv_img3}  iconDes="Medical Coding Rules"/>
                    <Card image={serv_img4}  iconDes="International Drug Data Knowledge"/>
                    <Card image={serv_img5}  iconDes="Medical Coding Rules"/>
                    </div>
            </div>
        </div>
    );
}

export default Service;
