import React, { useEffect } from 'react'
import styles from '../Styles/AddProducts.module.css'
import { useState } from 'react'

export const AddProducts = () => {
    //   *******************
     const [data,setData] = useState ( {  
            image: "", 
            name:"",
            price:"",
            desc:""
      } )
     const handleInput = (e)=>{
         setData( {...data,[e.target.name] : e.target.value})
      }
          //   *******************
      const addformProducts= async ()=>{
            try {
             let res = await fetch(`http://localhost:3030/userproduct`,{
                   method: "POST",
                    body: JSON.stringify(data),
                    headers: {
                      "Content-Type":"application/json"
                    }
                 })
                 res = await res.json()
              } catch (error) {
                console.log(error)
              }
        }
         //   *******************
         const handleSubmit =(e)=>{
            e.preventDefault();
            if(data.image =="" || data.name == "" || data.price == "" || data.desc == "" ){
              alert("Please fill all Inputs to add Products")
            }
            else{
              addformProducts()
              setData({  image: "", name:"", price:"", desc:""})
            }
           
         }
          //   *******************
  return (
      <> 
        {/* <h5> AddProduct now</h5> */}
        <div className={styles.container}>
          <form  onSubmit={handleSubmit} >
             <input type="url"  value={data.image} className={styles.inp}  onChange ={handleInput} name="image"  placeholder="image"/>
             <input type="text" value={data.name}   className={styles.inp}    onChange ={handleInput} name="name"   placeholder="name"/>
             <input type="number"  value={data.price}   className={styles.inp}    onChange ={handleInput} name="price"   placeholder="price"/>
             <input type="text"  value={data.desc}   className={styles.inp}    onChange ={handleInput} name="desc"   placeholder="description"/>
             <button type="submit" className={styles.btn}> Add Now</button>
          </form>

        </div>
         {/* ****************** */}
      </>
  )
}
