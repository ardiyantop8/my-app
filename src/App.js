import React, { Component } from 'react';
import './App.css';
import MenuMakanan from "./components/MenuMakanan/MenuMakanan";
import MenuMinuman from "./components/MenuMinuman/MenuMinuman";

class App extends Component {
  constructor() {
    super();
    this.state = {
      namaResto: 'Nayyara'
    }
  }

  render() {
    return (
      <div className="App">
        <h1>Cafe And Resto { this.state.namaResto }</h1>
        <h2>Menu Makanan</h2>
        <MenuMakanan namaMenu={"Ayam Bakar"} hargaMenu={25000}/>
        <MenuMakanan namaMenu={"Nasi Goreng"} hargaMenu={15000}/>
        <h2>Menu Minuman</h2>
        <MenuMinuman namaMenu={"Jus Melon"} hargaMenu={8000}/>
        <MenuMinuman namaMenu={"Jus Alpukat"} hargaMenu={8000}/>
        <MenuMinuman namaMenu={"Jus Jambu"} hargaMenu={7000}/>
      </div>
      
    );
  }
}
export default App;
