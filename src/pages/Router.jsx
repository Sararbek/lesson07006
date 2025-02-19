import React, { lazy } from 'react'
import { Route, Routes } from 'react-router-dom'
const Login = lazy(() => import("./login/Login"))
const Dashboard = lazy(() => import("./dashboard/Dashboard"))
const Auth = lazy(() => import("./auth/Auth"))

const Router = () => {
  return (
    <>
        <Routes>
            <Route path='login' element={<Login/>} />
            <Route path='/' element={<Auth/>}>
                <Route path='admin' element={<Dashboard/>} />
            </Route>    
        </Routes>
    </>
  )
}

export default Router