import React, {useState} from "react";

export default function ItemCount({stock, initial}) {
    const [count, setCount] = useState(initial);
    const increase=()=>{
        if(count<stock)
        setCount(count+1);
      }
      const decrease=()=>{
        if(count>1)
        setCount(count-1);
      }
      return (
        <div>
          <br />
          <button type="button" class="btn btn-secondary" onClick={decrease}>-</button>
          {count}
          <button type="button" class="btn btn-secondary" onClick={increase} >+</button>
          <button type="button" class="btn btn-dark">Agregar al Carrito</button>
          <br />
          <br />
        </div>
      )
}

