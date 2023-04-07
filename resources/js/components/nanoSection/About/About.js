import React from "react";
import ReactDOM from "react-dom";
import DescriptionSection from "../DescriptionSection/DescriptionSection";
import "./About.scss"
import Card from "../Card/Card";
import CollaborativeIntel from "../CollaborativeIntel/CollaborativeIntel"

function About() {
    const about_img1 ="https://backend.nanohealthsuite.com/img/20-Million-1643702455.svg"
    const about_img2 ="https://backend.nanohealthsuite.com/img/5-Million-1643702467.svg"
    const about_img3 ="https://backend.nanohealthsuite.com/img/clients-1644911887.svg"
    const about_img4 ="https://backend.nanohealthsuite.com/img/100-1643702499.svg"


    return (
        <div className="about-main flex flex-col items-center justify-center">
            <div className="container">
                <DescriptionSection
                    title="WHO WE ARE"
                    desheader="About the Nano Health"
                    description=" Nano Health is devising solutions to equip better and
                    innovative, unified healthcare that can help healthcare
                    providers achieve better care by empowering people to make
                    better decisions."/>

                    <div className="card-Container my-5">
                    <Card image={about_img1}  rate="20 Million+" iconDes="Insurance Claims Processesd"/>
                    <Card image={about_img2}  rate="5 Million+" iconDes="Client and Patient Relationships"/>
                    <Card image={about_img3} rate="30000+" iconDes="Business Clients Worked With"/>
                    <Card image={about_img4}  rate="100+" iconDes="Years of Collective Work Experience"/>
                    </div>

                    <CollaborativeIntel/>

            </div>
        </div>
    );
}

export default About;
