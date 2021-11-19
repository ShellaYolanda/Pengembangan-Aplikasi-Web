import React, { Component } from 'react';
import './App.css'; //import file css
import logo from './logo.svg'; //import file image logo.sgv
import jersey1 from './img/jersey-chelsea-home.png';
import jersey2 from './img/jersey-chelsea-away.png';
import jersey3 from './img/jersey-chelsea-thrid.png';

class App extends Component {

  render() {
    var h1 = <i>Lannister</i>;
    const title = "Toko Online";
    this.namaclub = "Chelsea";
 
  return (
      <div className="content">
        <img className="logo" src={logo} />
          <h1 style={{textAlign: 'center', color: 'rgb(252, 146, 158)'}}>
            Hello, {h1}
         </h1>
        <h2 className="title">{title}</h2>

        <div class="row">
         <div class="column">
          <img className="jersey" src={jersey1} /> </div>
         <div class="column">
          <img className="jersey" src={jersey2} /> </div>
        <div class="column">
          <img className="jersey" src={jersey3} /></div>
      </div>

      <div class="row">
         <div class="column">
         <p className="namaproduk"> {this.namaclub} Home </p>
         </div>
         <div class="column">
         <p className="namaproduk"> {this.namaclub} Away </p>
         </div>
        <div class="column">
        <p className="namaproduk"> {this.namaclub} Thrid Kit</p>
        </div>
      </div>

      <div class="row">
         <div class="column">
         <p className="hargaproduk"> Rp. 500.000 </p>
         </div>
         <div class="column">
         <p className="hargaproduk"> Rp. 450.000 </p>
         </div>
        <div class="column">
        <p className="hargaproduk"> Rp. 450.000 </p>
        </div>
      </div>


    </div>
 
   );
  }
}
export default App;