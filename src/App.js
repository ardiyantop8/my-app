import React, { Component } from 'react';
import './App.css';
import MenuMakanan from "./components/MenuMakanan/MenuMakanan";
import MenuMinuman from "./components/MenuMinuman/MenuMinuman";

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>Cafe And Resto Nayyara</h1>
        <h2>Menu Makanan</h2>
        <MenuMakanan/>
        <h2>Menu Minuman</h2>
        <MenuMinuman/>
      </div>
      
    );
  }
}
export default App;
