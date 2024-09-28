import React from 'react'
import NavigationB from './Component/NavigationB'
import { Outlet } from 'react-router-dom'
import Footer from './Component/Footer'

const Layout = () => {
  return (
    <>
    <NavigationB/>
    <Outlet/>
    <Footer/>
    {/* {
     "routes": [
        {
            "src": "/[^.]+",
            "dest": "/",
            "status": 200
        }
     ]
} */}
    </>
  )
}

export default Layout