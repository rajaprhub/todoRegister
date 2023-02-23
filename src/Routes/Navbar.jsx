import React from 'react'
import { Link } from 'react-router-dom'

export const Navbar = () => {
  return (
    <> 
          <div  style={{ display: "flex",alignItems: "center", marginTop:"15px",justifyContent: "space-around"  }}>
          <Link to="/">
             <div style={{height:"50px" ,width:"40px",backgroundColor:"whitesmoke"}}> 
               <h1>&#9885;</h1>
             </div>
           </Link>


            <Link to="/addproducts">
              <h5> Add Products</h5>
           </Link>

       </div>

    </>
  )
}
