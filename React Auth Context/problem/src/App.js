import React from 'react'
import AuthContextProvider from './Context/AuthContextProvider';
import Login from './Components/Login'
import { Dashboard } from './Components/Dashboard';


export default function App() {

  return (
    <div>
      <AuthContextProvider>
        <Login/>
        <Dashboard/>
      </AuthContextProvider>
    </div>
  )
}
