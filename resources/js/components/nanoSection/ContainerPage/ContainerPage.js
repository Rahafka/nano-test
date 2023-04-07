import React from 'react';
import ReactDOM from 'react-dom';
import "./ContainerPage.scss"


function ContainerPage(props) {
    return (
        <div >
           {props.children}
        </div>
    );
}

export default ContainerPage;
