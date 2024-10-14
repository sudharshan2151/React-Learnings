import React from "react";
import {useState , useEffect } from "react";

function App() {
  const [arr,setArr] = useState([]);
  const [page,setPage] = useState(1);
  const [but,setBut]  = useState([]);

  useEffect(()=>{
    fetch(`https://dbioz2ek0e.execute-api.ap-south-1.amazonaws.com/mockapi/get-employees?limit=12&page=${page}`)
    .then(res=>res.json())
    .then((data)=>{
      setArr(data.data)
      let temp = data.totalPages;
      let butt = [];
      for(let i=1;i<=temp;i++){
        butt.push(i);
      }
      setBut(butt);
    })
  },[page])



  return (
    <div className="App">
      <h1>Employees Dashboard</h1>
      
      <div className="employee">
        <table border="1px">
          <thead>
            <tr>
              <th>Name</th>
              <th>Department</th>
              <th>Image</th>
              <th>Gender</th>
              <th>Salary</th>
            </tr>
          </thead>
          <tbody>
            {/* map through the data*/}            
            {arr.map((item) => {
             return <tr>
                  <td  className="employee-card-name">{item.name}</td>
                  <td className="employee-card-department">{item.department}</td>
                  <td className="employee-card-image">{item.image}</td>
                  <td className="employee-card-gender">{item.gender}</td>
                  <td className="employee-card-salary">{item.salary}</td>
              </tr>
            })}            
          </tbody>
        </table>
      </div>
      {/* add your pagination here */}
      {[1,2,3,4,5,6,7,8,9].map((item) => {
        return <button key ={item} onClick={()=>{setPage(item)}} style={
          {
            border:page===item?"1px solid red":"1px solid black",
            margin:"10px"
          }
        } disabled={page===item?true:false}>{item}</button>
      })}      
    </div>
  );
}

export default App;
