import Star from "./Star";
import Login from "../login/Login";
import CommentList from "./CommentList";
import {useState} from "react"
const data = [
  {
    id: 1,
    title: "Very Poor",
    color: "red",
    rating: 1,
  },
  {
    id: 2,
    title: "Poor",
    color: "yellow",
    rating: 2,
  },
  {
    id: 3,
    title: "good",
    color: "orange",
    rating: 3,
  },
  {
    id: 4,
    title: "Very Good",
    color: "lightgreen",
    rating: 4,
  },
  {
    id: 5,
    title: "Excellent",
    color: "green",
    rating: 5,
  },
];

const Dashboard = () => {
  const [logout,setLogout] = useState(true);
  const [ar,setArr] = useState(data);
  return (
    <>
      {logout?
      (<div className="dashboard">
        <h1>Rating - App</h1>
        {/* Add Logout button here */}
        <button onClick={()=>{
          setLogout(false)
        }}>Logout</button>
        {console.log(ar)}
        {/* Add CommentList here */}
              {ar.map((a,i)=>{
                let ob = a;
                 
                return <CommentList  {...ob} onClick={
                  ()=>{
                    let newArr = ar.filter((e,ind)=>{
                       return a.id!=e.id;
                    })
                     setArr([...newArr])
                   }
                }/>
              })}
        
      </div>):
      <Login/>}
    </>
  );
};

export default Dashboard;
