import "./App.css";
import { useState } from "react";
import Product from "./components/Product";
const data = [
  {
    id: 1,
    name: "Noodles",
    price: 30,
    quantity: 1,
  },
  {
    id: 2,
    name: "Biriyani",
    price: 90,
    quantity: 1,
  },
  {
    id: 2,
    name: "Chips",
    price: 10,
    quantity: 1,
  },
];

function App() {
  const [ar, setArr] = useState(data);
  let sum = 0;
  ar.map((a)=>{
    sum+=a.quantity*a.price;
  })
  const handleQty = (id,payload)=>{
    console.log(id,payload)
    let newArr = [...ar];
    newArr[id].quantity=newArr[id].quantity+payload;
    setArr(newArr)
  }
  return (
    <div className="App" data-testid="app">
      <div data-testid="cart-products">
        {/*  map through the  data and pass props to the Product component */}
        {ar.map((a,i)=>{
           return <Product id={i} name={a.name} disable={a.quantity<=0?true:false} price={a.price} quantity={a.quantity} handleQty={
             handleQty
            }
            
            />
        })}
      </div>

      <h1 id="total-cart" data-testid="total-cart">
        {/* Show the total of the Cart(a actual Price of a Product = price * quantity) */}
        {/* The total price should be in this syntax `Total :123` */}
        Total :{sum}
        
      </h1>
    </div>
  );
}

export default App;
