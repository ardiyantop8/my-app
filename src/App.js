import React, { Component } from 'react';
import './App.css';
import MenuMakanan from "./components/MenuMakanan/MenuMakanan";
import MenuMinuman from "./components/MenuMinuman/MenuMinuman";

class App extends Component {
  constructor() {
    super();
    this.state = {
      namaResto: 'Nayyara',
      menuMakanan: [
        { nama: 'Ayam bakar', harga: 25000, stock: 10 },
        { nama: 'Nasi Goreng', harga: 22000, stock: 0 },
        
      ],
      menuMinuman : [
        { id:1, nama: 'Jus Alpukat', harga: 8000, stock: 10 },
        { id:2, nama: 'Jus Mangga', harga: 7000, stock: 0 },
        { id:3, nama: 'Jus Jeruk', harga: 7000, stock: 5 },
        { id:4, nama: 'Jus Naga', harga: 8000, stock: 11 },
        { id:5, nama: 'Jus Jambu', harga: 8000, stock: 20 },

      ]
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
        <MenuMakanan 
          namaMenu = { this.state.menuMakanan[0].nama }
          hargaMenu = { this.state.menuMakanan[0].harga }
          stock = { this.state.menuMakanan[0].stock }
        />
        <MenuMakanan 
          namaMenu = { this.state.menuMakanan[1].nama }
          hargaMenu = { this.state.menuMakanan[1].harga }
          stock = { this.state.menuMakanan[1].stock }
        />
        <h2>Menu Minuman</h2>
        <div className="row">
          {
            this.state.menuMinuman.map((menu, index) =>
              <MenuMinuman key={menu.id} namaMenu={menu.nama} hargaMenu={menu.harga} stok={menu.stock}/>
            )
          }
        </div>
      </div>
      
    );
  }
}
export default App;
