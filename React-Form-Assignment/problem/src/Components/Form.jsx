import React from "react";
import "./Form.css";
import {useState} from "react"
import ShowFormData from "./ShowFormData";

const Form = () => {

  const fields = {
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    phNumber: "",
    country: "",
    birthDate: "",
    avatar: "",
    marriageStatus: false, // default
    gender: ""
  }

   const [formy, setFormy]=useState(fields);
   const [show,setShow] = useState(false);


   const handleChange = (e)=>{
    console.log(e.target.value);
    const {name,type,value,checked}=e.target;
    let temp = {...formy};
    console.log(checked);
    temp[name] = type==="checked"?checked:value;
    setFormy(temp);
    setShow(false);
   }
  return (
    <div>
      <div>
        <h1>React Form Assignment</h1>
        <form onSubmit={(e) => {e.preventDefault();setShow(true)}}>
          {/* First Name */}
          <div>
            <label htmlFor="">FirstName</label>
            <input type="text" name="firstName" value={formy.firstName} onChange={handleChange}/>
            <label htmlFor="">LastName</label>
            <input type="text" name="lastName" value={formy.lastName}onChange={handleChange}/>
          </div>
          
          {/* Last Name */}
          
          <div>Email
            <input type="email" name="email"value={formy.email}onChange={handleChange}/>
          </div>
          {/* Email */}
          <div>Password
            <input type="password" name="password"value={formy.password}onChange={handleChange}/>
          </div>
          {/* Password */}
          <div>PhoneNumber
            <input type="number" name="phNumber"value={formy.phNumber}onChange={handleChange}/>
          </div>
          {/* Phone number */}
          <div>Country
            <select name="country"  value={formy.country}onChange={handleChange}>
              <option value="USA">USA</option>
              <option value="UK">UK</option>
              <option value="India">India</option>
              <option value="Canada">Canada</option>
              <option value="France">France</option>
              <option value="Germany">Germany</option>
              <option value="Japan">Japan</option>
              <option value="Italy">Italy</option>
              <option value="Spain">Spain</option>
              <option value="Russia">Russia</option>
              <option value="Brazil">Brazil</option>
              <option value="China">China</option>
              <option value="Indonesia">Indonesia</option>
              <option value="Malaysia">Malaysia</option>
            </select>
            
          </div>
          {/* Country Select Tage */}
          {/* Birth Date Selector */}
          <div>BirthDate
            <input type="date" name="birthDate"value={formy.birthDate}onChange={handleChange}/>
          </div>
          {/* Profile Pic Selector */}
          <div>choose Avatar
            <input type="file" name="avatar"value={formy.avatar} onChange={handleChange}/>
          </div>
          {/* Married Status Selector */}
          <div>Marriage Status
            <input type="checkbox"  name="marriageStatus" value={formy.marriageStatus}onChange={handleChange}/>
          </div>
          {/* Gender Selector */}
          <div>
            <input type="radio" name="gender" value="male" onChange={handleChange}/><label >Male</label>
            <input type="radio" name="gender" value="female" onChange={handleChange}/><label >Female</label>
            <input type="radio" name="gender" value="other" onChange={handleChange}/><label >Other</label>
          </div>
          {/* Submit Button - input type submit */}
          <input type="submit" />
        </form>
        {/* if form submitted then show ShowFormData component here */}
        {show&&<ShowFormData {...formy}/>}
      </div>
    </div>
  );
};

export default Form;
