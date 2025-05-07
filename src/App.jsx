import React from 'react'
import "./App.css"
import {createHashRouter, RouterProvider} from "react-router-dom"
import Landing from './components/Landing/Landing'
import Layout from './components/Shop/Layout'
import AllProducts from './components/Shop/AllProducts'
import Category from './components/Shop/Category'
import DetailsPage from './components/Shop/DetailsPage'
import SpecifiedCategory from './components/Shop/SpecifiedCategory'
import Cart from './components/Cart/Cart'

const App = () => {
  const router = createHashRouter([
    {
      path:"",
      element: <Landing/>
    },
    {
      path:"browse",
      element: <Layout/>,
      children: [
        {
          path:"shop",
          element: <AllProducts/>
        },
        {
          path:"category/",
          element: <Category/>
        },
        {
          path: "details/:id",
          element: <DetailsPage/>
        },
        {
          path: "specified/:catId",
          element: <SpecifiedCategory/>
        },
        {
          path: "cart",
          element: <Cart/>
        }
      ]
    },
    {
      path:"cart",
      element: <Cart/>
    }
  ])

  return (
    <div>
      <RouterProvider router={router}/>
    </div>
  )
}

export default App