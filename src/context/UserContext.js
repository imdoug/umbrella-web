import React, { createContext, useState } from "react";
import axios from 'axios'

export const UserContext = createContext()

const UserProvider = ( { children }) =>{
      const [userLogin, setUserLogin] = useState({email: '', password: ''})
      const [userRegister, setUserRegister] = useState({email: '', password: '', username: ''})
      const [currentUser, setCurrentUser] = useState('')
      const handleLogin = (e) =>{
            e.preventDefault()
            axios.post('http://localhost:3001/login', userLogin)
                  .then((response)=>{
                        setCurrentUser(response.data)
                        console.log(response.data)
                  })
                  .catch((error)=>{
                        console.log(error)
                  })
      }
      const handleRegister = (e) =>{
            e.preventDefault()
            axios.post('http://localhost:3001/register', userRegister)
                  .then((response)=>{
                        setCurrentUser(response.data)
                        console.log(response.data)
                  })
                  .catch((error)=>{
                        console.log(error)
                  })
      }
      const handleChangeLogin = (e, name) =>{
            setUserLogin((prevState) => ({...prevState, [name]: e.target.value}))
      }
      const handleChangeRegister = (e, name) =>{
            setUserRegister((prevState) => ({...prevState, [name]: e.target.value}))
             // api call for register 
            // if there is a reponse set this user to currentUser 
      }


      return (
            <UserContext.Provider value={{ handleLogin, handleRegister, handleChangeLogin, handleChangeRegister, currentUser }}>
                  { children }
            </UserContext.Provider>
      )
}

export default UserProvider