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

  handleGantiNamaResto = () => {
    this.setState({namaResto: 'Nayyara Aisah Fayola'})
  }
  handleBackNamaResto = () => {
    this.setState({namaResto: 'Nayyara'})
  }

  render() {
    return (
      <div className="App">
        <h1>Cafe And Resto { this.state.namaResto }</h1>
        <button onClick={this.handleGantiNamaResto} className="btn btn-primary" style={{ boxShadow: "5px 7px #888888",margin:"5px"}}>Ganti Nama Resto</button>
        <button onClick={this.handleBackNamaResto} className="btn btn-info" style={{ boxShadow: "5px 7px #888888",margin:"5px"}}>Kembali Nama Resto</button>
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
