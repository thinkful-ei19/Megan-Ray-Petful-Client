import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Dashboard from './Dashboard';
import registerServiceWorker from './registerServiceWorker';
import store from './store';

ReactDOM.render(<Dashboard />, document.getElementById('root'));
registerServiceWorker();
