import React from "react";
import { useState } from "react";

function Item({ name, category }) {

  const [inCart, setclassName] = useState(false)
  
  function handleClick(){
    setclassName(() => !inCart)
  }
  
  return (
    <li className={inCart ? "in-cart" : ""}>
      <span>{name}</span>
      <span className="category">{category}</span>
      <button onClick={handleClick} className="add">{inCart ? "Remove" : "Add to cart"}</button>
    </li>
  );
}

export default Item;
