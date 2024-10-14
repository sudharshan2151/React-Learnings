import React from 'react'
import { useState,useEffect } from 'react'
import {Link} from "react-router-dom"

export default function AllProducts() {
  const [products,setProducts] = useState([])
  useEffect(()=>{
    fetch(`http://localhost:${process.env.REACT_APP_JSON_SERVER_PORT}/products`)
    .then(res=>res.json())
    .then(data=>setProducts(data))

  },[])
  return (
    <div>
      <div>All Products</div>
      <div data-testid = "products-wrapper">
        {products?.map((a)=>(
            <div>
               <Link to={`/products/${a.id}`} style={{
                  textDecoration:"none",
                  color : "black"
               }}>
                  <p>{a.id}</p>
                  <h1>{a.name}</h1>
                  <h3>{a.price}</h3>
                </Link>
            </div>
        ))}
      </div>
    </div>
  )
}
