// import React, { Component } from 'react';
// import logo from '../icon.jpg';
// import './css/style.css';

function tick() {
  // const element = (
    // <div>
    //   <h1>React !</h1>
    //   <h2>It is {new Date().toLocaleTimeString()}.</h2>
    // </div>
  // );
  const element = new App().render();
  ReactDOM.render(element, document.getElementById("root"));
}

setInterval(tick, 1000);


class App extends React.Component {
  render() {
    return (
      <div>
        <h1>React !</h1>
        <h2>It is {new Date().toLocaleTimeString()}.</h2>
        <img src="http://localhost:8000/source/icon.jpg" width="100px" height="100px"/>
      </div>
    );
  }
}
