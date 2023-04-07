import React from 'react';
import ReactDOM from 'react-dom';
import "./Subscribe.scss"

function Subscribe() {
    return (
    <div className="subscribe-main flex flex-col items-center justify-center">
        <div className='container'>
            <h3 className='subscribe-h3'>Subscribe Our Newsletter</h3>
              <div className="subscribe-field relative w-full">
                <input type="email" className="subscribe-input block p-2.5 w-full z-20 text-sm text-gray-900 bg-gray-50 rounded-r-lg border-l-gray-50 border-l-2 border border-gray-300 focus:ring-blue-500  dark:bg-gray-700 dark:border-l-gray-700  dark:border-gray-600 dark:placeholder-gray-400 dark:text-white" placeholder="Enter your email address" required />
                <button type="submit" className="subscribe-btn absolute top-0 right-0 p-2.5 text-sm font-medium text-white bg-blue-700 rounded-r-lg border border-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Subscribe</button>
                </div>
        </div>
</div>

    );
}

export default Subscribe;
