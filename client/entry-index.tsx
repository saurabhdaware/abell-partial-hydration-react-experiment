import React from "react";
import ReactDOM from 'react-dom';
import Navbar from './Navbar';

ReactDOM.hydrate(<Navbar />, document.querySelector('#navbar'));

setTimeout(async () => {
  const Counter = (await import('./Counter')).default;
  ReactDOM.hydrate(<Counter />, document.querySelector('#counter'));
}, 5000);