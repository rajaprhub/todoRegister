import React, {useState, useEffect } from 'react'
import styles from "../Styles/Homepage.module.css"


export const HomePage = () => {
   const [data,setData] = useState([])
    
   const fetchData = async ()=>{
     let a = await fetch(`http://localhost:3030/userproduct`)
     let b = await a.json()
     setData(b)
  }
    useEffect(()=>{
     fetchData()
   },[])



  return (
    <> 
        <h1> home page</h1>

         <div className={styles.container}>
              {
                data.map( (elem)=>( 
                    <ol key={elem.id}>
                   <img
                      src={elem.image}
                      alt={elem.name}
                      height="150px"
                      width="150px"
                    />
                       <p> {elem.id}</p>
                       <p> {elem.name}</p>

                    </ol>
                ))
              }

         </div>

     </>
  )

}
