import React, { Component } from 'react';

class MenuMinuman extends Component {
    render() {
        return (
            <div style={{ border: "1px solid black", width:300, margin:"auto", borderRadius:"15px",marginTop:"10px",boxShadow: "5px 7px #888888" }}>
                <p>Nama Menu : { this.props.namaMenu }</p>
                <p>Harga Menu : { this.props.hargaMenu }</p>
                <p>Stok : { this.props.stok }</p>
            </div>
        )
    }
}

export default MenuMinuman;