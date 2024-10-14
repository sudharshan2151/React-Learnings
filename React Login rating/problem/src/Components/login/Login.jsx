import { useState } from "react";
import Dashboard from "../dashboard/Dashboard";
const Login = () => {
  const [user,setUser] = useState('')
  const [pass,setPass] = useState('')

  const [state,setState] = useState(true);
  const handleClick = (e)=>{
      e.preventDefault();
      
      if(user==='admin'&&pass==='1234'){
        setState(false);
      }
    }
    
  
  return (
    
     <div>
      {state?(
      <form onSubmit={handleClick}>
        <input type="text" placeholder="username" name="username" onChange={(e)=>setUser(e.target.value)} />
        <input type="text" placeholder="password" name="password" onChange={(e)=>setPass(e.target.value)}/>
        <input type="submit" value="submit"  />
      </form>):
      (<Dashboard/>)}
    </div>
  );
};

export default Login;
