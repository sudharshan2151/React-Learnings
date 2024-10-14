import React from 'react'
import {Routes,Route} from 'react-router-dom'
import Home from '../Pages/Home'
import About from '../Pages/About'
import Contact from '../Pages/Contact'
import Products from '../Pages/Products'

const AllRoutes = () => {
    const route = [
        {
            path:'/',
            element:<Home/>
        },
        {
            path:'/about',
            element:<About/>
        },
        {
            path:'/contact',
            element:<Contact/>
        },
        {
            path:'/products',
            element:<Products/>
        }
    ]
    return (
        <div>
            <Routes>
                {route?.map(a=>(
                    <Route path={a.path} element={a.element}/>
                ))}
            </Routes>
        </div>
    )
}

export {AllRoutes}