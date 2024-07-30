

import { createContext ,useContext,useState} from "react";


//Create a context
export const AuthContext=createContext()
export const useAuth=()=> useContext(AuthContext)



//Share the created context with other components

export default function AuthProvider({children}){


//Put some state in context


const[isAuthenticated,setAuthenticated]=useState(false)

const[username,setUsername]=useState(null)

function login(username,password){
    if(username==='in28minutes' && password==='dummy'){
        setAuthenticated(true)
        setUsername(username)
         return true
       
    } else {
        setAuthenticated(false)
        setUsername(null)
        return false
      
    }
}

function logout(){
setAuthenticated(false)
}

    return (
  <AuthContext.Provider value={ {isAuthenticated,setAuthenticated,login,logout,username} }>

    {children}
  </AuthContext.Provider>


    )
}