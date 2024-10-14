import React from "react";
import { useState } from "react";
import CoffeeCard from "../component/CoffeeCard";

const Coffee = () => {
  const [arr,setArr] = useState([]);
  const [but,setBut] = useState(false);
  const handleFetch = ()=>{
    console.log(process.env.REACT_APP_JSON_SERVER_PORT);
    fetch(`http://localhost:${process.env.REACT_APP_JSON_SERVER_PORT}/coffee`)
    .then(res=>res.json())
    .then(data=>{
      console.log(data);
      setArr(data);
      setBut(true);
    })
  }
  return (
    <div>
      {/* Create Button `Get Coffee` here */}
      <button className="button-18" onClick={handleFetch} disabled={but}>Get Coffee</button>
      <div className="coffee_container">
        {console.log(arr)}
        {/* Populate coffee data inside CoffeeCard.jsx */}
        {arr.map((a)=>{
            return <CoffeeCard title={a.title} image={a.image} ingredient={a.ingredients} price={a.price} description={a.description} />
        })}
      </div>
    </div>
  );
};

export default Coffee;
