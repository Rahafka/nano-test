import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App'


if (document.getElementById('nanoApp')) {
    ReactDOM.render(<App />, document.getElementById('nanoApp'));
}
