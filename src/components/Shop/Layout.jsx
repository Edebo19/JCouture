import React from 'react'
import Header from '../Landing/Header'
import { Outlet, useLocation } from 'react-router-dom'
import "../CSS/Shop.css"

const Layout = () => {

  const { pathname } = useLocation()
  const path = pathname.slice(1)
  const pathParts = path.split('/') 
  const locate = useLocation()
  const currentLocation = locate.pathname.slice(1).split("/")

  return (
    <div className='Layout'>
        <Header/>
        <div className="holdLocation">
          <div className="innerLocation">
            <p>HOME/{currentLocation[1].toUpperCase()}</p>
          </div>
        </div>
        <Outlet/>
    </div>
  )
}

export default Layout