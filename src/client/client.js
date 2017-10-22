import React from 'react';
import ReactDOM from 'react-dom';
import Home from './components/Home';

// ReactDOM.render(<Home />, document.querySelector('#root'));
// -> Calling ReactDOM.render() to hydrate server-rendered markup will stop working in React v17.
// -> Replace the ReactDOM.render() call with ReactDOM.hydrate()

ReactDOM.hydrate(<Home />, document.querySelector('#root'));
