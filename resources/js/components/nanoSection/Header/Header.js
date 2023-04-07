import React from "react";
// import logo from "./Logo-test.jpg";
import NavItem from "../NavItem/NavItem";
import "./Header.scss"

export default function Header({ fixed }) {
  const [navbarOpen, setNavbarOpen] = React.useState(false);
  return (
    <>
      <nav className="relative flex flex-wrap items-center justify-between px-2 py-3 bg-white fixed-top">
        <div className="container px-4 mx-auto flex flex-wrap items-center justify-between">
          <div className="w-full relative flex justify-between lg:w-auto lg:static lg:block lg:justify-start">
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
            <button
              className="text-black cursor-pointer text-xl leading-none px-3 py-1 border border-solid border-transparent rounded bg-transparent block lg:hidden outline-none focus:outline-none"
              type="button"
              onClick={() => setNavbarOpen(!navbarOpen)}
            >
              <i className="fas fa-bars"></i>
            </button>
          </div>
          <div
            className={
              "lg:flex flex-grow items-center" +
              (navbarOpen ? " flex" : " hidden")
            }
            id="example-navbar-danger"
          >
            <ul className="flex flex-col lg:flex-row list-none lg:ml-auto mb-0">
              <li className="nav-item mr-3 xl:mr-6">
                <div className="contact-info">
                <img className="contact-img" src="https://nanohealthsuite.com/_next/static/media/icon-phone-alt.38ab601c.svg" alt="call"/>
                    <div>
                        <span className="heade-span"> Call</span>
                        <p className="heade-p">+971 (04) 2896 454</p>
                       </div>
                </div>

              </li>
              <li className="nav-item mr-3 xl:mr-6">
              <div className="contact-info">
                    <img className="contact-img"  src="https://nanohealthsuite.com/_next/static/media/Icon-envelope.08b361dd.svg" alt="connect-us"/>
                    <div>
                        <span className="heade-span"> Connect with us</span>
                        <p className="heade-p">sales@nanohealthsuite.com</p>
                       </div>
                </div>
              </li>
              <li className="nav-item mr-3 xl:mr-6">
              <div className="contact-info">
                    <img className="contact-img" src="https://nanohealthsuite.com/_next/static/media/Icon-Clock.01bed079.svg" alt="time"/>
                    <div>
                        <span className="heade-span">Sat - Thu</span>
                        <p className="heade-p">07:00 - 22:00</p>
                       </div>
                </div>
              </li>
              <li className="nav-item mr-3 xl:mr-6">
              <div>
                    <button className="contact-btn">Contact Us</button>
                </div>
              </li>
            </ul>



            {/* <ul className="flex flex-col lg:flex-row list-none lg:ml-auto">
               <NavItem>
                            <a href="#" className="nav-link" > Call </a>
                            </NavItem>
                            <NavItem>
                            <a href="#" className="nav-link" >Connect with us </a>
                            </NavItem>
                            <NavItem>
                            <a href="#" className="nav-link" > Sat - Thu </a>
                            </NavItem>
                            <NavItem>
                                <button>Contact Us</button>
                            </NavItem>
                    </ul> */}
          </div>
        </div>
      </nav>
    </>
  );
}
