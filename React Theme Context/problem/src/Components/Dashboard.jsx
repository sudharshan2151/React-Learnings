import React, { useState } from 'react'
import { useContext } from 'react'
import { AppContext } from '../Context/ThemeContextProvider'
import { useEffect } from 'react'
import User from './User'
export const Dashboard = () => {
    const value = useContext(AppContext);
    const[data,setData] = useState([]);
    
    useEffect(()=>{
        fetch(`http://localhost:3000/users`)
        .then(res=>res.json())
        .then(data1=>setData(data1))
    },[])
    return (
        <div data-testid = "dashboard-cont"  style={
            {
                color:value.isDarkTheme?"white":"black",
                backgroundColor:value.isDarkTheme?"black":"white",
            }}>
            <select data-testid = "select-theme" onChange={(a)=>value.setDark(a.target.value=='l'?false:true)}>
                <option value="l">Light Theme</option>
                <option value='d'>Dark Theme</option>
            </select>
            {/* map through the users and render User component */}
            <h1>All Active Users</h1>
            {data.map((a)=>(
                <User {...a}{...value}/>
            ))}
        </div>
)
}
