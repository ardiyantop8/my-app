import React from 'react';

var menuMakanan = (props) => {
    return (
        <div style={{ border: "1px solid black", width:300, margin:"auto", borderRadius:"15px",marginBottom:"10px",boxShadow: "5px 7px #888888" }}>
          <p>Nama Menu : { props.namaMenu }</p>
          <p>Harga Menu : { props.hargaMenu }</p>
        </div>
    );
};

export default menuMakanan;