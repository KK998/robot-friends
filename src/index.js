import React from 'react';
import ReactDOM from 'react-dom';
import App from './Templates/App.js';
import './index.css';
import 'tachyons';
import * as serviceWorker from './Templates/serviceWorker';

ReactDOM.render(<App />, document.getElementById('root'));
serviceWorker.unregister();
