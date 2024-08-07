

import { createContext ,useContext,useState} from "react";
import { executeBasicAuthenticationService } from "../api/HelloWorldApiService"
import { apiClient } from "../api/ApiClient";

//Create a context
export const AuthContext=createContext()
export const useAuth=()=> useContext(AuthContext)



//Share the created context with other components

export default function AuthProvider({children}){


//Put some state in context


const[isAuthenticated,setAuthenticated]=useState(false)

const[username,setUsername]=useState(null)

const[token,settoken]=useState(null)

 async function login(username, password) {



  const baToken = 'Basic ' + window.btoa( username + ":" + password )
  
  try{

  
  const response = await executeBasicAuthenticationService(baToken)
  
  if(response.status===200){
        setAuthenticated(true)
        setUsername(username)
        settoken(baToken)
        apiClient.interceptors.request.use(
          (config) =>{
            config.headers.Authorization=baToken
            return config
          }
        )
         return true
       
    } else {
       logout()
        return false
      
     }
}  catch(error){
  logout()
  return false
}

 }

function logout(){
setAuthenticated(false)
settoken(null)
setUsername(null)
}

    return (
  <AuthContext.Provider value={ {isAuthenticated,setAuthenticated,login,logout,username,token} }>

    {children}
  </AuthContext.Provider>


    )
}