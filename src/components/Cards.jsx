import React from "react";
import "./Cards.css"
import amoladora from "../images/amoladora.png"
import sierra from "../images/sierra.png"
import taladro from "../images/taladro.png"
import ItemCount from './ItemCount';

function Cards() {
    return ( 
        <>
<div class="card-group">
  <div class="card">
    <img src={amoladora} class="card-img-top" alt="..."/>
    <div class="card-body">
      <h5 class="card-title">AMOLADORA</h5>
      <p class="card-text">$5000</p>
    </div>
    <ItemCount stock={5} initial={1}/>
  </div>
  <div class="card">
    <img src={sierra}class="card-img-top" alt="..."/>
    <div class="card-body">
      <h5 class="card-title">SIERRA</h5>
      <p class="card-text">$4000</p>
    </div>
    <ItemCount stock={5} initial={1}/>
  </div>
  <div class="card">
    <img src={taladro}class="card-img-top" alt="..."/>
    <div class="card-body">
      <h5 class="card-title">TALADRO</h5>
      <p class="card-text">$5400</p>
    </div>
    <ItemCount stock={5} initial={1}/>
  </div>
</div>
        </>
     );
}

export default Cards;