import React from 'react';
import ReactDOM from 'react-dom';
import "./SocialSec.scss";

function SocialSec() {
    return (
        <div className="socialSec-main w-full flex justify-center xl:justify-start items-center mt-8">
          <ul className='social-ul flex'>
            <li>
                <a  className="social-link" href='https://www.facebook.com/NanoHealthSuiteLLC/'>
                <img className='social-img'
                    src="https://backend.nanohealthsuite.com/img/fb-1637915388.svg"
                    alt="facebook"
                />
                </a>
            </li>
            <li>
            <a  className="social-link" href='https://twitter.com/NanoHealthSuite'>
                <img className='social-img'
                    src="https://backend.nanohealthsuite.com/img/tweet-1637915399.svg"
                    alt="tweeter"
                />
                </a>
            </li>
            <li>
            <a  className="social-link" href='https://www.instagram.com/NanoHealthSuite/'>
                <img className='social-img'
                    src="https://backend.nanohealthsuite.com/img/insta-1637915408.svg"
                    alt="insta"
                />
                </a>
            </li>
            <li>
            <a  className="social-link" href='https://www.youtube.com/channel/UCt2mqhwdTE9ywMrtArn-SFQ'>
                <img className='social-img'
                    src="https://backend.nanohealthsuite.com/img/youtube-1637915528.svg"
                    alt="youtube"
                />
                </a>
            </li>
            <li>
            <a  className="social-link" href='https://www.linkedin.com/company/nano-health-suite/'>
                <img className='social-img'
                    src="https://backend.nanohealthsuite.com/img/ln-1637915457.svg"
                    alt="linkedin"
                />
                </a>
            </li>
          </ul>
        </div>
    );
}

export default SocialSec;
