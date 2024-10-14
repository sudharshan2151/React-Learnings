import React, { useContext,useState } from 'react';
import { AppContext } from '../Context/AuthContextProvider'; 

const fields = {
    email:"",
    password:""
}
export default function Login() {
    const value = useContext(AppContext);
    const[data,setData] = useState(fields);
    const handleSubmit = (e)=>{
        e.preventDefault();
        console.log("Inside the form submit");
        value.setLoading(true);
        fetch('https://reqres.in/api/login',{
            body:JSON.stringify(data),
            method: 'POST',
            headers:{
                "Content-Type": "application/json",
            }
        })
        .then(res=>res.json())
        .then(data1=>{
            console.log(data1);
            if(data1.error===undefined)value.setIsAuth(true);
            value.setToken(data1.token);
            setData({...fields});
            console.log(value);
        })
        .catch(error=>console.log(error));
        value.setLoading(false);
    }
    const formy = <form data-testid = "auth_form"  onSubmit={handleSubmit}>
                        <input
                            type = "email"
                            data-testid = "email"
                            placeholder = "Enter Email"
                            name = "email"
                            onChange={(e)=>{
                                const dup = {...data};
                                dup.email=e.target.value;
                                setData(dup);
                            }}
                        />
                        <br />
                        <input
                            type = "password"
                            data-testid = "password"
                            placeholder = "Enter password"
                            name = "password"
                            onChange={(e)=>{
                                const dup = {...data};
                                dup.password=e.target.value;
                                setData(dup);
                            }}
                        />
                        <br />
                        <input type = "submit"/>
                    </form>

    return (
        <div>
            {value.isAuth?null:formy}           
        </div>
    )
}
