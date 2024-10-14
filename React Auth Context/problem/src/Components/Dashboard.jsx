import React from 'react'
import { useContext } from 'react'
import { AppContext } from '../Context/AuthContextProvider'

export const Dashboard = () => {
    const value = useContext(AppContext);
    const {isAuth} = value;
    const dash = <div >
            <h3 data-testid = "token" >Token: {value.token}</h3>
            <button data-testid = "logout" onClick={()=>value.setIsAuth(false)}>LOGOUT</button>
        </div>
    return (
        <div>
            {isAuth?dash:null}
        </div>
    )
}
