import React from 'react'
import{Route,Routes} from "react-router-dom"
import { HomePage } from '../Pages/HomePage'
import { AddProducts } from '../Pages/AddProducts'

export const AllRoutes = () => {
  
  return (
    <Routes>  
          <Route path ="/"  element={ <HomePage/>}/>
          <Route path ="/addproducts"  element={ <AddProducts/>}/>     
     </Routes>
  )
}
