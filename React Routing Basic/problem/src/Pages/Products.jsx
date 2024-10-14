import React from 'react'
import {useState,useEffect} from 'react'
import styles from "./Products.module.css"

export default function Products() {
  const [products,setProducts] = useState([])

    useEffect(()=>{
      fetch(`https://dbioz2ek0e.execute-api.ap-south-1.amazonaws.com/mockapi/get-products`)
        .then(res=>res.json())
        .then(data=>setProducts(data.data))
    },[])
  return (
    <div>
      <h1 >All Products</h1 >
      <div className= "products-wrapper" style={
        {
          display: "grid",
          gridTemplateColumns:" repeat(4,300px)"
        }
      }>
        {products?.map(a=>(
          <div className={styles.card}>
            <div className = {styles.id} >{a.id}</div>
            <h3 className = {styles.title} >{a.title} </h3>
            <div className = {styles.category}>{a.category} </div>
            <div className = {styles.price}>Rs .{a.price} </div>
          </div>
        ))}
      </div>
    </div>
  )
}