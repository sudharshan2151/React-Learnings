import styles from "./GroceryItem.module.css";
import AddToCartButton  from "./AddToCartButton";
import QuantityButton from "./QuantityButton";
import {useState} from "react";

const GroceryItem = (props) => {
  const [quan,setQuant] = useState(0);
  
  const handleDec = ()=>{
    setQuant(quan-1);
  }

  const handleInc = ()=>{
    setQuant(quan+1);
  }
  const handleToCart = ()=>{
    setQuant(quan+1);
  }
  return <div className={styles.grocery_card}>
      <img src={props.image} alt="" />
      <h3>{props.name}</h3>
      <h5>Rs: {props.price}</h5>
      {!quan?<AddToCartButton onClick={handleToCart}/>:<QuantityButton incClick={handleInc} decClick={handleDec} count={quan}/>}
  </div>
};

export default GroceryItem;
