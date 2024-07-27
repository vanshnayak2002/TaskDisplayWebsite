import './TodoApp.css';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import LogoutComponent from './LogoutComponent';
import FooterComponent from './FooterComponent';
import HeaderComponent from './HeaderComponent';
import ListTodosComponent from './ListTodosComponent';
import ErrorComponent from './ErrorComponent';
import WelcomeComponent from './WelcomeComponent';
import LoginComponent from './LoginComponent.jsx';
import AuthProvider ,{useAuth}from './security/AuthContext.js';


function AuthenticationRoute({children}){
  const authContext=useAuth()
    if(authContext.isAuthenticated)
    return children


return <Navigate to="/" />

}



export default function TodoApp() {
    return (
        <div className="TodoApp">
          
            <AuthProvider>
            <BrowserRouter>
            <HeaderComponent />
                <Routes>
                    <Route path='/' element={<LoginComponent />} />
                    <Route path='/login' element={<LoginComponent />} />
                    <Route path='/welcome/:username' element={
                        <AuthenticationRoute>
                            <WelcomeComponent />
                        </AuthenticationRoute>
                     }/>
                    <Route path='/logout' element={
                       <AuthenticationRoute> 
                          <LogoutComponent /> 
                       </AuthenticationRoute>
                    }/> 
                    <Route path='*' element={<ErrorComponent />} />
                    <Route path='/todos' element={
                        <AuthenticationRoute>
                           <ListTodosComponent />
                        </AuthenticationRoute>
                    }/>
                 
                 </Routes>
                
                 <FooterComponent />
            </BrowserRouter>
            </AuthProvider>
           
        </div>
    );
}































