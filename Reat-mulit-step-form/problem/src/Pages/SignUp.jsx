import React from "react";
import { useState,useRef } from "react";
import StepOne from "../Components/SignUp/StepOne";
import StepTwo from "../Components/SignUp/StepTwo";
import StepThree from "../Components/SignUp/StepThree";
import StepFour from "../Components/SignUp/StepFour";
import UserInfo from "../Components/SignUp/UserInfo";

const SignUp = () => {
  
  const fields = {
    email : "",
    password : "",
    confirmPassword : "",
    education : "",
    passingYear : "",
    birthDate : "",
    firstName : "",
    lastName : "",
    phoneNumber : "",
    fatherName : "",
    motherName : "",
    address : ""
  }
  

  const [count,setCount] = useState(1);
  const [userInfo, setUserInfo] = useState(false);
  const [formy , setFormy] = useState(fields);

  if(userInfo){
    return <div>
          <UserInfo {...formy}/>
    </div>
  }
  const handleChange = (e)=>{
    console.log(e.target.value,e.target.name);
    let name = e.target.name;
    let value = e.target.value;
    let temp = {...formy};
    temp[name] = value;
    setFormy(temp);
    // console.log(formy);
    
  }
  const step = [<StepOne  handleChange={handleChange}/>,<StepTwo handleChange={handleChange}/>,<StepThree handleChange={handleChange}/>,<StepFour handleChange={handleChange}/>];
  return <div>
    <h2 data-cy="current-step">Step : {count}</h2>
    <div>
      
        {step[count-1]}
       <button type="button" disabled={count===1} data-cy="previous"onClick={()=>setCount(count-1)} style={
        {
          display:count===1?"none":"block"
        }
       }>Previous</button>
       <button type="button" disabled={count===4} data-cy="next"onClick={()=>setCount(count+1)} style={
        {
          display:count===4?"none":"block"
        }
       }>Next</button>
       
    </div>
    <form onSubmit={()=>setUserInfo(true)}>
      <input type="submit" disabled={count!==4} style={
        {
          display:count!==4?"none":"block"
        }
      }/>
    </form>
  </div>;
};

export default SignUp;
