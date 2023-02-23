import React, { useState } from 'react'
 
import './Register.css'


export const Register = () => {
      //  ****************************
    const initailStateErrors ={ 
      email: {required: false},
      password:{required: false},
      name: {required: false},
      custom_error : null 
   }
    const [errors,setErrors]= useState(initailStateErrors)
    const [loading,setLoading ] = useState(false)
    const handleSubmit =(e)=>{
        e.preventDefault();
        Registeruser()
          // let errors = initailStateErrors ;
          // let   haserror = false
          // if(inputs.email == "" ){
          //   errors.email.required = true
          //   haserror = true
          // }
          // if(inputs.password == "" ){
          //   errors.password.required = true
          //   haserror = true
          // }
          // if(inputs.name == "" ){
          //   errors.name.required = true
          //   haserror = true
          // }
          // if( !haserror  ){
          //   setLoading(true)
          //   //   send api request
          // }
          // setErrors(errors)
   }

      //  ****************************
       const [inputs,setInputs] = useState ( {
        email: "",
        password:"",
        name:""
      })
      const handleInput = (event)=>{
         console.log(inputs)
         setInputs( {...inputs,[event.target.name] : event.target.value})
      }
   //  ****************************
  const Registeruser = async ()=>{
          try {
               let res = await fetch(`http://localhost:3030/user`,{
                 method: "POST",
                  body: JSON.stringify(inputs),
                  headers: {
                    "Content-Type":"application/json"
                  }
               })
               res = await res.json()
            } catch (error) {
              console.log(error)
            }
        }



        // const HandleLogin = async(e)=>{
        //   dispatch(AuthRequestAction())
        // e.preventDefault()
        
        // try{
        // let res = await fetch(`http://localhost:3030/user`)
        // res = await res.json()
        // let x = false
        // for(let i=0; i<res.length; i++){
        // if((res[i].email===formData.email && res[i].password===formData.password)){
        // x = true
        // // loginUser(res[i])
        // console.log("loginDataMatched")
        // dispatch(AuthSuccessAction(res[i]))
        // handleLoginClose()
        // }
        // }
        

  return (
     <> 
       <div>
       <section class="register-block">
            <div class="container">
               <div class="row ">
                  <div class="col register-sec">
                     <h2 class="text-center">Register Now</h2>
                     <form  onSubmit={handleSubmit}  class="register-form" action="" >
                      <div class="form-group">
                        <label for="exampleInputEmail1" class="text-uppercase">Name</label>
          
                        <input type="text" class="form-control"  onChange ={handleInput} name="name" id=""/>
                         {   errors.name.required ? ( 
                           <span class="text-danger" >
                             Name is required.
                           </span> ): null
                        }
                     </div>
                      <div class="form-group">
                        <label for="exampleInputEmail1" class="text-uppercase">Email</label>
          
                        <input type="text"  class="form-control" onChange ={handleInput}   name="email" id="" />
                        {    errors.email.required  ?  (
                       <span class="text-danger" >
                            Email is required.
                            </span> ): null
                        }

                     </div>
                     <div class="form-group">
                        <label for="exampleInputPassword1" class="text-uppercase">Password</label>
                        <input  class="form-control" type="password" onChange ={handleInput}  name="password" id=""/>
                        {   errors.password.required   ? ( 
                        <span class="text-danger" >
                            Password is required.
                            </span> ): null
                        }
                     </div>
                     <div class="form-group">
          
                        <span class="text-danger" >
                           <p>Custom Error Message!</p>
                        </span>
                        {
                           loading ? ( 
                              <div  class="text-center">
                              <div class="spinner-border text-primary " role="status">
                                <span class="sr-only">Loading...</span>
                              </div>
                            </div> 
                           ) : null
                        }
                      
          
                        <input type="submit" class="btn btn-login float-right" disabled={loading}  value="Register" />
                     </div>
                     <div class="clearfix"></div>
                     <div class="form-group">
                       Already have account ? Please <a href="javascript:void(0);">Login</a>
                     </div>
          
          
                     </form>
          
          
                  </div>
          
               </div>
          
          
            </div>
          </section>

      </div>      
   </>
  )


}
