
import React,{useState} from "react";
export const AuthContext = React.createContext() ;

export const AuthContextProvider = ({children})=>{
  const [state,setState] = useState( {isAuth : false})

  const loginUser = ()=>{
     setState( {...state,isAuth : true})
  }
  const logoutUser = ()=>{
    setState( {...state,isAuth : false})
  }

  return (
    <AuthContext.Provider value = {  {authState:state ,loginUser,logoutUser}}>
           {children}
    </AuthContext.Provider>
   )

}