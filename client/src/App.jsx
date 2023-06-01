import React, {createContext,useReducer, useState} from 'react'
import { BrowserRouter,Routes, Route } from "react-router-dom";
import Navbar from './pages/Navbar'
import Weather from './pages/Weather'
import Home from './pages/Home'
import Profile from './pages/Profile';
import Signup from './pages/Signup';
import Login from './pages/Login';
import Error from './pages/Error';
import Footer from './pages/Footer';
import Logout from './pages/Logout';
import { initialState, reducer } from './reducer/UserReducer';

// context API
export const UserContext = createContext();


const App = () => {
  const [isDarkMode,setIsDarkMode] = useState(false);
  const [state, dispatch] = useReducer(reducer, initialState);


  return (
    <>
    <UserContext.Provider value={{state,dispatch}}>
      <BrowserRouter>
      <Navbar isDarkMode={isDarkMode} setIsDarkMode={setIsDarkMode} />
      <Routes>
        <Route exact path='/' element={<Home isDarkMode={isDarkMode}/>} />
        <Route path="weather" element={<Weather />} />
        <Route path="profile" element={<Profile isDarkMode={isDarkMode} />} />
        <Route path="login" element={<Login />} />
        <Route path="signup" element={<Signup />} />
        <Route path="logout" element={<Logout/>} />
        <Route path="*" element={<Error />} />
     </Routes>
      <Footer isDarkMode={isDarkMode}/>
      </BrowserRouter>
    </UserContext.Provider>
      </>
    
  )
}

export default App
