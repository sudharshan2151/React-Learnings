import styles from "./AddTodo.module.css"
import Button from "../common/button/Button";
import TodoItem from "./TodoItem";
import {useState} from "react"

function AddTodo() {
  const [value,setValue]=useState('');
  const [arr , setArr] = useState([]);
  const [count , setCount] = useState(0);
  return (
    <div >
      <input className={styles.input} type="text" placeholder="Add a new todo" value={value} onChange={(event)=>{
        console.log(event);
        setValue(event.target.value);
      }}/>
      <Button name="ADD" onClick={()=>{
        setCount(arr.length+1);
        console.log({"id":count,"string":value,"boolean":false});
        setArr([...arr,{"id":count,"string":value,"boolean":false}]);
        setValue('');
      }}/>
      
      {arr.map((e,i)=>{
        return (<TodoItem title={e.string} onClick={()=>{
          const newArr= arr.filter((aa,ind)=>{
            if(ind!=i)return aa
          });
          setArr(newArr);
        }}/>)
      })}
    </div>
  );
}

export default AddTodo;
