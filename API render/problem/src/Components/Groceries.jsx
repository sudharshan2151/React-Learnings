import {useState} from "react";
import LoadingIndicator from "./LoadingIndicator";
import GroceryItem from "./GroceryItem";
import styles from"./Groceries.module.css";

const Groceries = () => {
  const [disable, setDisable] = useState(false);
  const [arr, setArr] = useState([]);
  const [load,setLoad] = useState(false);
  
  const handleButton = ()=>{
    setDisable(true);
    setLoad(true);
    fetch("https://dbioz2ek0e.execute-api.ap-south-1.amazonaws.com/mockapi/get-groceries").then(res=>res.json()).then(data=>{
      setArr(data.data);
      setLoad(false);
    }).catch(error=>{
      console.log(error);
    })
  }


  if(load){
    return <LoadingIndicator/>;
  }
  return <div className={styles.grocery_container}>
    <h1 >Groceries</h1>
    <button className={styles.btn}  onClick={handleButton} disabled={disable}>Get Groceries</button>
    
    <div data-cy="grocery-items-container" className={styles.miniContainer}>
        {arr.length>0&&arr.map(a=>{
          return <>
          <GroceryItem name={a.name} price={a.price} image={a.image}/>
          </>
        })}
    </div>
   
  </div>;
};

export default Groceries;
