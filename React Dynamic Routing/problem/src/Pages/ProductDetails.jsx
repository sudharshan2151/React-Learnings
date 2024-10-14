import React ,{useState,useEffect} from 'react'
import {useParams} from 'react-router-dom'
export default function ProductDetails() {
  const [products,setProducts] = useState({});
    const {id} = useParams();
    useEffect(()=>{
      fetch(`http://localhost:${process.env.REACT_APP_JSON_SERVER_PORT}/products/${id}`)
      .then(res=>res.json())
      .then(data=>setProducts(data))
    },[id])
  return (
    <div data-testid = "product-details" >
       <h1 data-testid = "product_name">{products.name}</h1>
    </div>
  )
}
