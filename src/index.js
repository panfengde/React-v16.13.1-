import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';



console.log(<App />)
ReactDOM.render(
  <App data="第一" />,
  document.getElementById('root')
);

//ReactDOM.render(<div>hello</div>,document.getElementById('root'))

//document.querySelector('#root')._reactRootContainer

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
