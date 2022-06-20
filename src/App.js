import React, { Component } from 'react';
import './App.css';

// class App extends Component {
//   render() {
//     return (
//       React.createElement(
//         'h1',
//         { className: 'main-title',id: 'title' },
//         'Welcome to y website!'
//       )
//     );
//   }
// }

class App extends Component {
  render() {
    const namaLengkap = "Ardiyanto Putra";
    return (
      <div>
        <h1 className="main-template">Welcome to {namaLengkap}!!</h1>
        <p>ini adalah paragraf </p>
      </div>
    );
  }
}
export default App;
