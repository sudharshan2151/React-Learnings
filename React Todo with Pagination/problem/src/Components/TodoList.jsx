import {useState,useEffect} from "react"
import TodoItem from "./TodoItem";
import Pagination from "./Pagination";
import AddTodo from "./AddTodo";
function TodoList() {
  const [load,setLoad] = useState(true);
  const [error,setError] = useState(false);
  const [limit,setLimit] = useState(3);
  const [page,setPage] = useState(1);
  const [value1,setValue1] = useState('');
  const [data1,setData] = useState([]);
  const [length,setLength] = useState(0);
  

  useEffect(()=>{
    setLoad(true)
    if(length==0){
      fetch(`http://localhost:${process.env.REACT_APP_JSON_SERVER_PORT}/todos`)
      .then(res=>res.json())
      .then(data=>{
        setLength(data.length);
      })
      .catch(error=>{
        console.log(error);
        setError(true);
      })
    }
    fetch(`http://localhost:${process.env.REACT_APP_JSON_SERVER_PORT}/todos?_page=${page}&_limit=${limit}`)
    .then(res=>res.json())
    .then(data=>{
      setLoad(false);
      console.log(data);
      setData(data);
    })
    .catch(error=>{
      console.log(error);
      setError(true);
    })
  },[page,limit])

  


  if(load){
    return <h1 data-testid="loading">Loading...</h1>
  }

  if(error){
    return <h1 data-testid="err">Something went wrong..</h1>
  }

  const handleChange = (e)=>{
    e.preventDefault();
    setLimit(e.target.value);
  }

  const handleToggle = (a,i)=>{
      a.status=!a.status;
      let newArr = [...data1];
      setData(newArr);
      fetch(`http://localhost:${process.env.REACT_APP_JSON_SERVER_PORT}/todos/${a.id}`,{
          method :'PUT',
          body : JSON.stringify(a),
        headers :{
          "Content-Type":"application/json"
        }
      }).then(res=>res.json())
      .then(data=>{
        console.log(data);
      })
      .catch(error=>{
        setError(true);
        console.log(error);
       
      })
  }

  const handleDelete = (a,i)=>{
    console.log(data1,"Inside on Delete");
    const newArr = data1.filter(e=>e.id!=a.id);
    setData(newArr);
    fetch(`http://localhost:${process.env.REACT_APP_JSON_SERVER_PORT}/todos/${a.id}`,{
      method:'DELETE',
      headers:{
        "Content-Type":"application/json"
      }
    })
    .then(res=>res.json())
    .then(data=>{
      setLength(length-1);
    })
    .catch(error=>{
      setError(true);
    })
  }
  const handlePost = ()=>{
    console.log(`http://localhost:${process.env.REACT_APP_JSON_SERVER_PORT}/todos`)
    let obj = {
      id:length+1,
      status: false,
      title:value1.toString()
    }
    fetch(`http://localhost:${process.env.REACT_APP_JSON_SERVER_PORT}/todos`,{
      method :'POST',
      body :JSON.stringify(obj),
      headers:{
        "Content-type": "application/json"
      }
    })
    .then(res=>res.json())
    .then(data=>{
      console.log(data);
      setValue1('');
      setLength(length+1);
    }).catch(error=>{
      setError(true);
      console.log(error);
    });
  }
  return (
    <>
      {/* Add select tag here for selecting the total no. of todos to be displayed */}
      <select name="limit" id="limt" value={limit} onChange={(e)=>{handleChange(e)}}>
        <option value="3">3</option>
        <option value="6">6</option>
        <option value="9">9</option>
      </select>
    
      {console.log(length)}
      {/* Add AddTodo component here */}
      <AddTodo onClick={handlePost} onChange={(e)=>{e.preventDefault();console.log(e.target.value);setValue1(e.target.value)}} value={value1}/>
      {/* Add all the todos here with the help of TodoItem component */}
      {data1.length>0&&data1.map((a,i)=>{
        return <TodoItem {...a} toggle={()=>handleToggle(a,i)} delete={()=>handleDelete(a,i)}/>
      })}
      
      <Pagination dp={page==1?true:false} prev={()=>setPage(page-1)} next={()=>setPage(page+1)} dn={(page*limit)>=length?true:false} page={page}/>
      {/* Add Pagination component here */}
    </>
  );
}

export default TodoList;
