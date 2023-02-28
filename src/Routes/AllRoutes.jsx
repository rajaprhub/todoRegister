import React from 'react'
import{Route,Routes} from "react-router-dom"
import { HomePage } from '../Pages/HomePage'
import { AddProducts } from '../Pages/AddProducts'
import { Register } from '../Components/Register'
import { Login } from '../Components/Login'


export const AllRoutes = () => {
  
  return (
    <Routes>  
          <Route path ="/"  element={ <HomePage/>}/>
          <Route path ="/addproducts"  element={ <AddProducts/>}/>  
          <Route path ="/register"  element={ <Register/>}/>   
          <Route path='/login'  element={<Login/>}/> 
     </Routes>
  )
}
