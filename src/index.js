import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import BookList from './BookList'
import registerServiceWorker from './registerServiceWorker';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';

ReactDOM.render(<App />, document.getElementById('root'));
ReactDOM.render(<BookList />, document.getElementById('content'));
registerServiceWorker();
