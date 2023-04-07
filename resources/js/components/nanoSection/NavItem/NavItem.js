import React from 'react';
import ReactDOM from 'react-dom';

function NavItem(props) {
    return (
        <li className="nav-item">
           {props.children}
        </li>
    );
}

export default NavItem;
