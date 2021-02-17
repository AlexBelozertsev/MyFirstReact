import React from 'react'; // подключение реакта к модулю
import ReactDOM from 'react-dom'; // подключение virtualDom to RealDom
import App from './components/App';
// import './index.css';


ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
); //render to realDOM with 'use strict'

// =================================================================================================================
const link = React.createElement("a", { href: "react.org", target: "_blank" }, "link"); //creating virtualDOM Element
console.log(link);

const jsxLink = <a href="react.org" target="_blank" >link</a>;
console.log(jsxLink);

// ReactDOM.render(link, document.getElementById("root")); //render to realDOM
