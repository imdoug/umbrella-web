import React, { createContext, useState } from "react";
import axios from 'axios'

export const UserContext = createContext()

const UserProvider = ( { children }) =>{
      const [userLogin, setUserLogin] = useState({email: '', password: ''})
      const [userRegister, setUserRegister] = useState({email: '', password: '', username: ''})
      const [currentUser, setCurrentUser] = useState('')
      const [data, setData] = useState({})

      // LATER on Login and Register will add  user to local storage to persist with login 
      const handleLogin = (e) =>{
            e.preventDefault()
            axios.post('http://localhost:3001/login', userLogin)
                  .then((response)=>{
                        setCurrentUser(response.data)
                        getData()
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
      }
      const getData = () =>{
            axios.get('http://localhost:3001/').then((response)=>{
                  setData(response.data)
            }).catch((error)=>{
                  console.log(error)
            })
      }
      const handleLogOut = () =>{
            // LATER on this function will remove the user from the local storage
            setCurrentUser('')
      }
      return (
            <UserContext.Provider value={{ handleLogin, handleRegister, handleChangeLogin, handleChangeRegister, currentUser, getData, data, handleLogOut }}>
                  { children }
            </UserContext.Provider>
      )
}

export default UserProvider